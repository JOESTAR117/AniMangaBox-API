import { Request, Response } from 'express'
import { CreateAnimeRentUseCase } from './CreateAnimeRentUseCase'

export class CreateAnimeRentControllers {
	async handle(req: Request, res: Response) {
		const { animeId, userId } = req.body

		const createAnimeRentUseCase = new CreateAnimeRentUseCase({
			animeId,
			userId,
		})

		await createAnimeRentUseCase.execute(req, res)

		return res.status(201).json({ message: 'anime successfully rented' })
	}
}
