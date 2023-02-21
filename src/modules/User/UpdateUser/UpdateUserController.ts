import { Request, Response } from "express";
import { database } from "../../../database/database";
import { UserDTO } from "../UserDto";

export class UpdateUserController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const { name }: UserDTO = req.body;
    const user = await database.user.update({
      where: {
        id: id,
      },
      data: {
        name: name,
      },
    });
    return res.status(204).json(user)
  }
}
