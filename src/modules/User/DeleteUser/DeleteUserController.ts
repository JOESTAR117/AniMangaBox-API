import { Request, Response } from "express";
import { database } from "../../../database/database";

export class DeleteUsersControllers {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const user = await database.user.delete({
        where: {
          id: id,
        },
      });

      return res.status(204).json(user);
    } catch (error) {
      console.error(error);
    }
  }
}
