import { Request, Response } from "express";
import { database } from "../../../database/database";

export class UpdateAnimeControllers {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const { title, description, episodes, release_date } = req.body;

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
        return res
          .status(400)
          .json({ message: "fill in some field to update" });
      }

      return res.status(200).json(anime);
    } catch (error) {
      console.error(error);
    }
  }
}
