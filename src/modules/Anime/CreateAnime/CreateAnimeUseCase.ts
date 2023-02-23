import { database } from "../../../database/database";
import { AppError } from "../../../errors/AppError";
import { AnimeDTO } from "../AnimeDTO";

export class CreateAnimeUseCase {
  async execute({ title, description, episodes, release_date }: AnimeDTO) {
    try {
      const animeExists = await database.anime.findFirst({
        where: {
          title: title,
        },
      });

      if (animeExists) {
        return new AppError("Anime already exists");
      }

      const anime = await database.anime.create({
        data: {
          title: title,
          description: description,
          episodes: episodes,
          release_date: release_date,
        },
      });

      return anime;
    } catch (error) {
      return console.log(error);
    }
  }
}
