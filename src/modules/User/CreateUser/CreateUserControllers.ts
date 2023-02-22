import { Request, Response } from "express";
import { database } from "../../../database/database";
import { UserDTO } from "../UserDto";

export class CreateUserController {
  async handle(req: Request, res: Response) {
    const { name, email }: UserDTO = req.body;
    try {
      const userExists = await database.user.findUnique({
        where: {
          email: email,
        },
      });

      if (userExists) {
        return res.status(400).json({ message: "User already exists" });
      }

      const user = await database.user.create({
        data: {
          name: name,
          email: email,
        },
      });

      return res.status(201).json(user);
    } catch (error) {
      console.error(error);
    }
  }
}
