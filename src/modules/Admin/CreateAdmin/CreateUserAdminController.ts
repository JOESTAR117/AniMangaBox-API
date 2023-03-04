import { Request, Response } from 'express'
import { CreateUserAdminUseCase } from './CreateUserAdminUseCase'

export class CreateUserAdminController {
	async handle(req: Request, res: Response) {
		const { email, password } = req.body

		const createUserAdminUseCase = new CreateUserAdminUseCase({email,password})

		const result = await createUserAdminUseCase.execute()

		return res.status(201).json(result)
	}
}
