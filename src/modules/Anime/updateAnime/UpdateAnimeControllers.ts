import { Request, Response } from 'express'
import { UpdateAnimeUseCase } from './UpdateAnimeUseCase'

export class UpdateAnimeControllers {
	async handle(req: Request, res: Response) {
		const { id } = req.params
		const { title, description, episodes, release_date } = req.body
		try {
			const updateAnimeUseCase = new UpdateAnimeUseCase({
				title,
				description,
				episodes,
				release_date,
				id,
			})
			const result = await updateAnimeUseCase.execute()

			return res.status(200).json(result)
		} catch (error) {
			console.error(error)
		}
	}
}
