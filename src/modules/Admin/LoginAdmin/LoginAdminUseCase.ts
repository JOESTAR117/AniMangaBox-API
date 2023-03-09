import { AdminDTO } from '../../../dtos/Admin/AdminDTO'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import { database } from '../../../database/database'
import { AppError } from '../../../errors/AppError'

dotenv.config()

export class LoginAdminUseCase {
	constructor(private data: AdminDTO) {}
	async execute() {
		const UserAdmin: string = process.env.ADMIN as string

		try {
			const userIsValid = await database.admin.findFirst({
				where: {
					email: this.data.email,
				},
			})

			if (!userIsValid) {
				return new AppError('User or Password incorrect')
			}

			const passwordIsValid = await bcrypt.compare(
				this.data.password,
				userIsValid.password
			)

			if (!passwordIsValid) {
				return new AppError('User or Password incorrect')
			}
			const tokenAdmin = jwt.sign({ id: this.data.id }, UserAdmin, {
				expiresIn: 86400,
			})

			return tokenAdmin
		} catch (error) {
			console.log(error)
		}
	}
}
