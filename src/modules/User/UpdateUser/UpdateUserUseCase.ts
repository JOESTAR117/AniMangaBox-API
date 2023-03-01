import { database } from '../../../database/database'
import { AppError } from '../../../errors/AppError'
import { UserDTO } from '../../../dtos/User/UserDto'
import bcrypt from 'bcrypt'

export class UpdateUserUseCase {
	async execute({ id, email, name, password }: UserDTO) {
		const idIsValid = await database.user.findUnique({
			where: {
				id: id,
			},
		})
		if (!idIsValid) {
			return new AppError('id is not valid')
		}

		const Hash = await bcrypt.hash(password, 8)
		const user = await database.user.update({
			where: {
				id: id,
			},
			data: {
				email: email,
				name: name,
				password: Hash,
			},
		})

		if (!user.password && !user.email && !user.name) {
			return new AppError('pass some data to update')
		}

		return user
	}
}
