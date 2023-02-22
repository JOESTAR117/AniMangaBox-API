import { Request, Response } from "express";
import { UserDTO } from "../UserDto";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
  async handle(req: Request, res: Response) {
    const { name, email }: UserDTO = req.body;
    try {
      const createUserUseCases = new CreateUserUseCase();

      const result = await createUserUseCases.execute({ name, email });

      return res.status(201).json(result);
    } catch (error) {
      console.error(error);
    }
  }
}
