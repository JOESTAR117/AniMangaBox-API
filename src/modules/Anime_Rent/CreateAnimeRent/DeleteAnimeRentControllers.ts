import { Request, Response } from "express";
import { database } from "../../../database/database";
import { AnimeRentDTO } from "../AnimeRentDTO";

export class DeleteAnimeRentControllers {
  async handle(req: Request, res: Response) {
    const { animeId, userId } = req.params;
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
        return res
          .status(400)
          .json({ message: "Anime or user does not exist!" });
      }

      await database.animeRent.delete({
        where: {
          userId_animeId: {
            animeId: animeId,
            userId: userId,
          },
        },
      });

      return res.status(200).json({ message: `you ended your subscription with the anime ${animeId}` });
    } catch (error) {
      console.error(error);
    }
  }
}
