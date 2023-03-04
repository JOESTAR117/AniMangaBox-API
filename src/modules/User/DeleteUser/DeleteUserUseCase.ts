import { database } from '../../../database/database'
import { AppError } from '../../../errors/AppError'
import { DeleteUserDTO } from '../../../dtos/User/DeleteUserDTO'

export class DeleteUserUseCase {
	constructor(private data: DeleteUserDTO) {}
	async execute() {
		const userRentedAnime = await database.animeRent.findMany({
			where: {
				userId: this.data.id,
			},
		})

		if (userRentedAnime.length > 0) {
			return new AppError('user has rented anime')
		}

		const user = await database.user.delete({
			where: {
				id: this.data.id,
			},
		})

		return user
	}
}
