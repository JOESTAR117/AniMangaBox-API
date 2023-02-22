import { Request, Response } from "express";
import { database } from "../../../database/database";

export class FindAllUsersControllers {
  async handle(req: Request, res: Response) {
    const usersExits = await database.user.findMany();

    if (!usersExits) {
      return res.status(400).json({ message: "No users found" });
    }

    const users = await database.user.findMany({
      include: {
        AnimeRent: {
          select: {
            animeId: true,
          },
        },
      },
    });

    return res.status(200).json(users);
  }
}
