import { Request, Response } from "express";
import { CreateAnimeRentUseCase } from "./CreateAnimeRentUseCase";

export class CreateAnimeRentControllers {
  async handle(req: Request, res: Response) {
    const { animeId, userId } = req.body;
    try {
      const createAnimeRentUseCase = new CreateAnimeRentUseCase();

      const result = await createAnimeRentUseCase.execute({
        animeId,
        userId,
      });

      return res.status(201).json(result);
    } catch (error) {
      console.error(error);
    }
  }
}
