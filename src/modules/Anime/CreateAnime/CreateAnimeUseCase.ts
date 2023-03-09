import { database } from '../../../database/database'
import { AppError } from '../../../errors/AppError'
import { AnimeDTO } from '../../../dtos/Anime/AnimeDTO'

export class CreateAnimeUseCase {
	constructor(private data: AnimeDTO) {}
	async execute() {
		try {
			const animeExists = await database.anime.findFirst({
				where: {
					title: this.data.title,
				},
			})

			if (animeExists) {
				return new AppError('Anime already exists')
			}

			const anime = await database.anime.create({
				data: {
					title: this.data.title,
					description: this.data.description,
					episodes: this.data.episodes,
					release_date: this.data.release_date,
				},
			})
			if (
				anime.title.length < 1 ||
				anime.description.length < 1 ||
				anime.episodes.length < 1
			) {
				return new AppError('fill in all fields to create the anime')
			}

			return anime
		} catch (error) {
			return console.log(error)
		}
	}
}
