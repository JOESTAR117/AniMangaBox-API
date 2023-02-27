import { Request, Response } from "express";
import { RefreshTokenUserUseCase } from "./RefreshTokenUseCase";

export class RefreshTokenUserController {
  async handle(req: Request, res: Response) {
    const { refresh_token } = req.body;

    const refreshTokenUserUseCase = new RefreshTokenUserUseCase();

    const result = await refreshTokenUserUseCase.execute(refresh_token);

    return res.json(result);
  }
}
