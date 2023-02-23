import { Request, Response } from "express";
import { CreateAnimeUseCase } from "./CreateAnimeUseCase";

export class CreateAnimeControllers {
  async handle(req: Request, res: Response) {
    const { title, description, episodes, release_date } = req.body;
    try {
      const createAnimeUseCase = new CreateAnimeUseCase();

      const result = await createAnimeUseCase.execute({
        title,
        description,
        episodes,
        release_date,
      });

      return res.status(201).json({ result });
    } catch (error) {
      console.error(error);
    }
  }
}
