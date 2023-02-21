import { Request, Response } from "express";
import { database } from "../../../database/database";

export class DeleteAnimeController {
  async handle(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const anime = await database.anime.delete({
        where: {
          id: id,
        },
      });

      return res.status(200).json(anime);
    } catch (error) {
      console.error(error);
    }
  }
}
