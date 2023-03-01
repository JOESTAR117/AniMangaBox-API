import { Request, Response } from 'express'
import { FindAllMangaUseCase } from './FindAllMangaUseCase'

export class FindAllMangaControllers {
	async handle(req: Request, res: Response) {
		const findAllManga = new FindAllMangaUseCase()

		const result = await findAllManga.execute()

		res.status(200).json(result)
	}
}
