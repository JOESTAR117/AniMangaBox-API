import { Request, Response } from "express";
import { database } from "../../../database/database";
import { AnimeDTO } from "../AnimeDTO";

export class CreateAnimeControllers {
  async handle(req: Request, res: Response) {
    const { title, description, episodes, release_date }: AnimeDTO = req.body;
    try {
      const animeExists = await database.anime.findFirst({
        where: {
          title: title,
        },
      });

      if (animeExists) {
        return res.status(400).json({ message: "Anime already exists" });
      }

      const anime = await database.anime.create({
        data: {
          title: title,
          description: description,
          episodes: episodes,
          release_date: release_date,
        },
      });

      return res.status(201).json(anime);
    } catch (error) {
      console.error(error);
    }
  }
}
