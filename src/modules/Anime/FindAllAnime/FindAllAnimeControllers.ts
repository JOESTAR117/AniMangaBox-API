import { Request, Response } from "express";
import { FindAllAnimeUseCase } from "./FindAllAnimeUseCase";

export class FindAllAnimeController {
  async handle(req: Request, res: Response) {
    try {
      const findAllAnimeUseCase = new FindAllAnimeUseCase();

      const result = await findAllAnimeUseCase.execute(req);

      return res.status(200).json(result);
    } catch (error) {
      console.error(error);
    }
  }
}
