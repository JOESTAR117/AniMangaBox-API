import { database } from '../../../database/database'

export class DeleteMangaUseCase {
	async execute(id: string) {
		const manga = await database.manga.delete({
			where: {
				id: id,
			},
		})

		return manga
	}
}
