import { Request, Response } from "express";
import { generateToken, loginService } from "../../services/Auth";
import { UserDTO } from "../User/UserDto";

export class LoginUserController {
  async handle(req: Request, res: Response) {
    const { name, email }: UserDTO = req.body;
    try {
      const user = await loginService(email);

      if (!user) {
        return res.status(404).send({ message: "User or Password not found" });
      }

      const token = generateToken(user.id);

      return res.status(200).json(token);
    } catch (error) {
      console.error(error);
    }
  }
}
