import { Request, Response } from "express";
import { database } from "../../../database/database";
import { UserDTO } from "../UserDto";

export class UpdateUserController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const { name }: UserDTO = req.body;

    const idIsValid = await database.user.findUnique({
      where: {
        id: id,
      },
    });

    if (!idIsValid) {
      return res.status(400).json({ message: "id is not valid" });
    }

    const user = await database.user.update({
      where: {
        id: id,
      },
      data: {
        name: name,
      },
    });
    return res.status(204).json(user);
  }
}
