import { Request, Response } from 'express'
import { UpdateUserUseCase } from './UpdateUserUseCase'

export class UpdateUserController {
	async handle(req: Request, res: Response) {
		const { id } = req.params
		const { name, email, password } = req.body

		if (!password && !email && !name) {
			return res.status(400).json({ message: 'pass some data to update' })
		}

		const updateUserUseCase = new UpdateUserUseCase({
			email,
			name,
			password,
			id,
		})
		await updateUserUseCase.execute()

		return res
			.status(200)
			.json({ message: 'congratulations update done successfully' })
	}
}
