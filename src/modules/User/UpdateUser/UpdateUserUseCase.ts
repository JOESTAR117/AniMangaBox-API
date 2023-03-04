import { database } from '../../../database/database'
import { AppError } from '../../../errors/AppError'
import { UserDTO } from '../../../dtos/User/UserDto'
import bcrypt from 'bcrypt'

export class UpdateUserUseCase {
	constructor(private data: UserDTO) {}
	async execute() {
		const idIsValid = await database.user.findUnique({
			where: {
				id: this.data.id,
			},
		})
		if (!idIsValid) {
			return new AppError('id is not valid')
		}

		const Hash = await bcrypt.hash(this.data.password, 8)
		const user = await database.user.update({
			where: {
				id: this.data.id,
			},
			data: {
				email: this.data.email,
				name: this.data.name,
				password: Hash,
			},
		})

		if (!user.password && !user.email && !user.name) {
			return new AppError('pass some data to update')
		}

		return user
	}
}
