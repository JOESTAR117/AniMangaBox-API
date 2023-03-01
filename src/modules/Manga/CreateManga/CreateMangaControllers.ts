import { Response, Request } from 'express'
import { CreateMangaUseCase } from './CreateMangaUseCase'

export class CreateMangaControllers {
	async handle(req: Request, res: Response) {
		const { title, description, Chapters, Finished, release_date } =
			req.body

		const createMangaUseCase = new CreateMangaUseCase()

		const result = await createMangaUseCase.execute({
			title: title,
			description: description,
			Chapters: Chapters,
			Finished: Finished,
			release_date: release_date,
		})

		return res.status(201).json(result)
	}
}
