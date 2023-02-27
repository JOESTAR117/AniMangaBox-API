import { Response } from "express";
import { FindAllUserUseCase } from "./FindAllUserUseCase";

export class FindAllUsersControllers {
  async handle(res: Response) {
    const findAllUserUseCase = new FindAllUserUseCase();

    const result = await findAllUserUseCase.execute();

    return res.status(200).json(result);
  }
}
