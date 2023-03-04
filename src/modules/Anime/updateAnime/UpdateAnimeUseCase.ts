import { database } from '../../../database/database'
import { AppError } from '../../../errors/AppError'
import { AnimeDTO } from '../../../dtos/Anime/AnimeDTO'

export class UpdateAnimeUseCase {
	constructor(private data: AnimeDTO) {}
	async execute() {
		try {
			const anime = await database.anime.update({
				where: {
					id: this.data.id,
				},
				data: {
					title: this.data.title,
					description: this.data.description,
					episodes: this.data.episodes,
					release_date: this.data.release_date,
				},
			})
			if (
				!this.data.title &&
				!this.data.description &&
				!this.data.episodes &&
				!this.data.release_date
			) {
				return new AppError('fill in some field to update')
			}

			return anime
		} catch (error) {
			return console.log(error)
		}
	}
}
