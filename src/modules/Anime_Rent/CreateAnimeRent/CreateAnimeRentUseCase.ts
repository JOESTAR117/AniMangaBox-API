import { database } from '../../../database/database'
import { AnimeRentDTO } from '../../../dtos/Anime/AnimeRentDTO'
import { Request, Response } from 'express'

export class CreateAnimeRentUseCase {
	constructor(private data: AnimeRentDTO) {}
	async execute(req: Request, res: Response) {
		try {
			const animeExists = await database.anime.findUnique({
				where: {
					id: this.data.animeId,
				},
			})

			if (!animeExists) {
				res.status(400).json({ message: 'Anime does not exists!' })
			}

			const animeAlredyRented = await database.animeRent.findFirst({
				where: {
					animeId: this.data.animeId,
				},
			})

			if (animeAlredyRented) {
				res.status(400).json({
					message: 'this anime has already been rented by you',
				})
			}

			const userExists = await database.user.findUnique({
				where: {
					id: this.data.userId,
				},
			})

			if (!userExists) {
				res.status(400).json({ message: 'User does not exists!' })
			}

			await database.animeRent.create({
				data: {
					animeId: this.data.animeId,
					userId: this.data.userId,
				},
			})
		} catch (error) {
			return console.log(error)
		}
	}
}
