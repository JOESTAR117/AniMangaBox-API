import { database } from '../../../database/database'

export class FindAllMangaUseCase {
	async execute() {
		const manga = await database.manga.findMany({
			select: {
				id: true,
				title: true,
				description: true,
				Chapters: true,
				Finished: true,
				release_date: true,
				MangaRent: {
					include: {
						User: {
							select: {
								id: true,
							},
						},
					},
				},
			},
		})

		return manga
	}
}
