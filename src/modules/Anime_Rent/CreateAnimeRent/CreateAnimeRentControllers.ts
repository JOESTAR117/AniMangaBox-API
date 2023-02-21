import { Request, Response } from "express";
import { database } from "../../../database/database";
import { AnimeRentDTO } from "../AnimeRentDTO";

export class CreateAnimeRentControllers {
  async handle(req: Request, res: Response) {
    const { animeId, userId }: AnimeRentDTO = req.body;
    try {
      const animeExists = await database.anime.findUnique({
        where: {
          id: animeId,
        },
      });

      if (!animeExists) {
        return res.status(400).json({ message: "Anime does not exists!" });
      }

      await database.animeRent.create({
        data: {
          animeId,
          userId,
        },
      });

      return res.status(200).json({ message: "Rent completed" });
    } catch (error) {
      console.error(error);
    }
  }
}
