import { Request, Response } from "express";
import { database } from "../../../database/database";
import { AdminDTO } from "../AdminDTO";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export class LoginAdminController {
  async handle(req: Request, res: Response) {
    const { email, password, id }: AdminDTO = req.body;

    const UserAdmin: string = process.env.ADMIN as string;

    try {
      const userIsValid = await database.admin.findFirst({
        where: {
          email: email,
        },
      });

      if (!userIsValid) {
        return res.status(400).json({ message: "User or Password incorrect" });
      }

      const passwordIsValid = await bcrypt.compare(
        password,
        userIsValid.password
      );

      if (!passwordIsValid) {
        return res.status(400).json({ message: "User or Password incorrect" });
      }

      const tokenAdmin = jwt.sign({ id: id }, UserAdmin, {
        expiresIn: 86400,
      });

      res.json(tokenAdmin);
    } catch (error) {
      console.log(error);
    }
  }
}
