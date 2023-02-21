import { Request, Response } from "express";
import { database } from "../../../database/database";

export class FindAllAnimeController {
  async handle(req: Request, res: Response) {
    try {
      const animes = await database.anime.findMany({
        include: {
          AnimeRent: {
            select: {
              user: true,
            },
          },
        },
      });
      return res.status(200).json(animes);
    } catch (error) {
      console.error(error);
    }
  }
}
