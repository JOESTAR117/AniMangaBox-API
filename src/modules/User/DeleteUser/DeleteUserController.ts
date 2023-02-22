import { Request, Response } from "express";
import { database } from "../../../database/database";

export class DeleteUsersControllers {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const userExists = await database.user.findUnique({
        where: {
          id: id,
        },
      });

      if (!userExists) {
        return res.status(400).json({ message: "User not found" });
      }

      const userHasRentedAnime = await database.animeRent.findMany({
        where: {
          userId: id,
        },
      });

      if (userHasRentedAnime.length > 0) {
        return res.status(400).json({ message: "user has rented anime" });
      }

      await database.user.delete({
        where: {
          id: id,
        },
      });

      return res.status(200).json({ message: "User removed" });
    } catch (error) {
      console.error(error);
    }
  }
}
