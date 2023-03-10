import { Request, Response } from 'express'
import { DeleteAnimeRentUseCase } from './DeleteAnimeRentUseCase'

export class DeleteAnimeRentControllers {
	async handle(req: Request, res: Response) {
		const { animeId, userId } = req.body
		try {
			const deleteAnimeRentUseCase = new DeleteAnimeRentUseCase({
				animeId,
				userId,
			})

			await deleteAnimeRentUseCase.execute()

			return res
				.status(200)
				.json({ message: 'you ended the lease with this anime' })
		} catch (error) {
			console.error(error)
		}
	}
}
