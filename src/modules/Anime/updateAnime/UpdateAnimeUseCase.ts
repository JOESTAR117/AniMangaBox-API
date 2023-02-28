import { database } from "../../../database/database";
import { AppError } from "../../../errors/AppError";
import { AnimeDTO } from "../../../dtos/Anime/AnimeDTO";

export class UpdateAnimeUseCase {
  async execute({ id, description, episodes, title, release_date }: AnimeDTO) {
    try {
      const anime = await database.anime.update({
        where: {
          id: id,
        },
        data: {
          title: title,
          description: description,
          episodes: episodes,
          release_date: release_date,
        },
      });
      if (!title && !description && !episodes && !release_date) {
        return new AppError("fill in some field to update");
      }

      return anime;
    } catch (error) {
      return console.log(error);
    }
  }
}
