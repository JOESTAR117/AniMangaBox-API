import { Request, Response } from 'express'
import { UpdateMangaUseCase } from './UpdateMangaUseCase'

export class UpdateMangaControllers {
	async handle(req: Request, res: Response) {
		const { title, description, Chapters, Finished, release_date } =
			req.body
		const { id } = req.params

		const updateMangaUseCase = new UpdateMangaUseCase()
		const result = await updateMangaUseCase.execute({
			Chapters,
			description,
			Finished,
			release_date,
			title,
			id,
		})

		if (!title && !description && !Finished && !Chapters && !release_date) {
			return res
				.status(400)
				.json({ message: 'fill in some field to update' })
		}
		return res.status(200).json(result)
	}
}
