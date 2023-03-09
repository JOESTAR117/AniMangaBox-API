import { hash } from 'bcrypt'
import { database } from '../../../database/database'
import { AppError } from '../../../errors/AppError'
import { UserDTO } from '../../../dtos/User/UserDto'

export class CreateUserUseCase {
	constructor(private data: UserDTO) {}
	async execute() {
		try {
			const userExists = await database.user.findUnique({
				where: {
					email: this.data.email,
				},
			})

			if (userExists) {
				return new AppError('User already exists!')
			}

			const hashPassword = await hash(this.data.password, 10)

			const user = await database.user.create({
				data: {
					name: this.data.name,
					email: this.data.email,
					password: hashPassword,
				},
			})
			if (
				user.email.length < 1 ||
				user.name.length < 1 ||
				user.password.length < 1
			) {
				return new AppError('fill in all fields to create the account')
			}

			return user
		} catch (error) {
			return console.log(error)
		}
	}
}
