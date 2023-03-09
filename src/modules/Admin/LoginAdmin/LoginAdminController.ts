import { Request, Response } from 'express'
import { LoginAdminUseCase } from './LoginAdminUseCase'

export class LoginAdminController {
	async handle(req: Request, res: Response) {
		const { email, password } = req.body
		try {
			const loginAdminUseCase = new LoginAdminUseCase({ email, password })
			const result = await loginAdminUseCase.execute()

			return res.status(200).json(result)
		} catch (error) {
			console.log(error)
		}
	}
}
