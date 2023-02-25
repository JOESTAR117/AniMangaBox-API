import { Request, Response } from "express";
import { CreateUserAdminUseCase } from "./CreateUserAdminUseCase";

export class CreateUserAdminController {
  async handle(req: Request, res: Response) {
    const { email, password } = req.body;

    const createUserAdminUseCase = new CreateUserAdminUseCase();

    const result = await createUserAdminUseCase.execute({
      email,
      password,
    });

    return res.status(201).json(result);
  }
}
