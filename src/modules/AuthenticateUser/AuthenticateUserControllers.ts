import { Request, Response } from "express";
import { database } from "../../database/database";
import { AuthenticateDTO } from "./AuthenticateDTO";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { GenerateRefreshToken } from "../../provider/GenerateRefreshToken";

const Token: any = process.env.SECRET_JWT;

export class AuthenticateUserController {
  async handle(req: Request, res: Response) {
    const { email, password, id }: AuthenticateDTO = req.body;

    try {
      const userIsValid = await database.user.findUnique({
        where: {
          email,
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

      const token = jwt.sign({ id: id }, Token, {
        expiresIn: 86400,
      });

      const generateRefreshToken = new GenerateRefreshToken();

      const refreshToken = await generateRefreshToken.execute(userIsValid.id);

      res.json({ token, refreshToken });
    } catch (error) {
      console.log(error);
    }
  }
}
