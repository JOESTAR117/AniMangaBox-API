import { database } from '../../../database/database'
import { AppError } from '../../../errors/AppError'
import { AnimeRentDTO } from '../../../dtos/Anime/AnimeRentDTO'

export class DeleteAnimeRentUseCase {
	constructor(private data: AnimeRentDTO) {}
	async execute() {
		try {
			const animeExists = await database.anime.findUnique({
				where: {
					id: this.data.animeId,
				},
			})

			const userExists = await database.user.findUnique({
				where: {
					id: this.data.userId,
				},
			})

			if (!animeExists || !userExists) {
				return new AppError('Anime or user does not exist!')
			}

			const animeWasRented = await database.animeRent.findUnique({
				where: {
					userId_animeId: {
						animeId: this.data.animeId,
						userId: this.data.userId,
					},
				},
			})

			if (!animeWasRented) {
				return new AppError('this anime has not been rented')
			}

			const anime_rent = await database.animeRent.delete({
				where: {
					userId_animeId: {
						animeId: this.data.animeId,
						userId: this.data.userId,
					},
				},
				select: {
					anime: {
						select: {
							title: true,
						},
					},
				},
			})

			return anime_rent
		} catch (error) {
			return console.log(error)
		}
	}
}
