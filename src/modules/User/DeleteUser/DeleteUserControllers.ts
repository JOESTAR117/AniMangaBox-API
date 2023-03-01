import { Request, Response } from 'express'
import { DeleteUserUseCase } from './DeleteUserUseCase'

export class DeleteUserController {
	async handle(req: Request, res: Response) {
		const { id } = req.params

		const deleteUserUseCase = new DeleteUserUseCase()

		const result = await deleteUserUseCase.execute({
			id: id,
		})

		return res.status(200).json(result)
	}
}
