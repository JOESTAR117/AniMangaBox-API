import { database } from '../../../database/database'
import { MangaDTO } from '../../../dtos/Manga/MangaDTO'
import { AppError } from '../../../errors/AppError'

export class UpdateMangaUseCase {
	async execute({
		Chapters,
		Finished,
		description,
		release_date,
		title,
		id,
	}: MangaDTO) {
		const manga = await database.manga.update({
			where: {
				id: id,
			},
			data: {
				title,
				description,
				Chapters,
				Finished,
				release_date,
			},
		})

		if (
			!manga.title.length &&
			!manga.description &&
			!manga.Chapters &&
			!manga.Finished &&
			!manga.release_date
		) {
			return new AppError('fill in some field to update')
		}

		return manga
	}
}
