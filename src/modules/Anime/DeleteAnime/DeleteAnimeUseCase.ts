import { database } from '../../../database/database'
import { DeleteAnimeDTO } from '../../../dtos/Anime/DeleteAnimeDTO'

export class DeleteAnimeUseCase {
	constructor(private data: DeleteAnimeDTO) {}
	async execute() {
		const anime = await database.anime.delete({
			where: {
				id: this.data.id,
			},
		})

		return anime
	}
}
