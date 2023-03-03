import { Request, Response } from 'express'
import { DeleteMangaUseCase } from './DeleteMangaUseCase'

export class DeleteMangaController {
	async handle(req: Request, res: Response) {
		const { id } = req.params

		const deleteMangaUseCase = new DeleteMangaUseCase()
		const result = await deleteMangaUseCase.execute(id)

		return res.status(200).json(result)
	}
}
