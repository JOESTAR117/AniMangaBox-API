import { database } from "../../../database/database";
import { AppError } from "../../../errors/AppError";
import { AnimeRentDTO } from "../AnimeRentDTO";

export class DeleteAnimeRentUseCase {
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
        return new AppError("Anime or user does not exist!");
      }

      const animeWasRented = await database.animeRent.findUnique({
        where: {
          userId_animeId: {
            animeId: animeId,
            userId: userId,
          },
        },
      });

      if (!animeWasRented) {
        return new AppError("this anime has not been rented");
      }

      const anime_rent = await database.animeRent.delete({
        where: {
          userId_animeId: {
            animeId: animeId,
            userId: userId,
          },
        },
        select: {
          anime: {
            select: {
              title: true,
            },
          },
        },
      });

      return anime_rent;
    } catch (error) {
      return console.log(error);
    }
  }
}
