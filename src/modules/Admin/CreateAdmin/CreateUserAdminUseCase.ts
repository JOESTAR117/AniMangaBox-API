import { database } from '../../../database/database'
import { AdminDTO } from '../../../dtos/Admin/AdminDTO'
import bcrypt from 'bcrypt'

export class CreateUserAdminUseCase {
	constructor(private data: AdminDTO) {}
	async execute() {
		const hash = await bcrypt.hash(this.data.password, 8)
		const admin = await database.admin.create({
			data: {
				email: this.data.email,
				password: hash,
			},
		})

		return admin
	}
}
