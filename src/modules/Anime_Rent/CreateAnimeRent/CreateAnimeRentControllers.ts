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

      const userExists = await database.user.findUnique({
        where:{
            id: userId,
        }
      })

      if (!animeExists || !userExists) {
        return res.status(400).json({ message: "Anime or user does not exist!" });
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
