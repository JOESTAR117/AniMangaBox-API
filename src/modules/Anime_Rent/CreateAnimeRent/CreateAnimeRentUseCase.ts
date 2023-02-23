import { database } from "../../../database/database";
import { AppError } from "../../../errors/AppError";
import { AnimeRentDTO } from "../AnimeRentDTO";

export class CreateAnimeRentUseCase {
  async execute({ animeId, userId }: AnimeRentDTO) {
    try {
      const animeExists = await database.anime.findUnique({
        where: {
          id: animeId,
        },
      });

      const userExists = await database.user.findUnique({
        where: {
          id: userId,
        },
      });

      if (!animeExists || !userExists) {
        return new Error("Anime or user does not exist!");
      }

      const animeWasRented = await database.animeRent.findUnique({
        where: {
          userId_animeId: {
            animeId: animeId,
            userId: userId,
          },
        },
      });

      if (animeWasRented) {
        return new AppError("this anime has already been rented by you");
      }

      const anime_rent = await database.animeRent.create({
        data: {
          animeId: animeId,
          userId: userId,
        },
      });

      return anime_rent;
    } catch (error) {
      return console.log(error);
    }
  }
}
