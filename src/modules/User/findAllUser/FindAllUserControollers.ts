import { Request, Response } from "express";
import { database } from "../../../database/database";

export class FindAllUsersControllers {
  async handle(req: Request, res: Response) {
    const users = await database.user.findMany({
      include: {
        AnimeRent: true,
      },
    });

    return res.status(200).json(users);
  }
}
