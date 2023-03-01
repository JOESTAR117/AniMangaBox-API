import { Request, Response } from 'express'
import { DeleteAnimeUseCase } from './DeleteAnimeUseCase'

export class DeleteAnimeControllers {
	async handle(req: Request, res: Response) {
		const { id } = req.params
		const deleteAnimeUseCase = new DeleteAnimeUseCase()
		const result = await deleteAnimeUseCase.execute({
			id,
		})

		return res.status(200).json({ message: 'Anime deleted' })
	}
}
