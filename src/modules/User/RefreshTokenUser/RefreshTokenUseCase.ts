import { database } from "../../../database/database";
import { AppError } from "../../../errors/AppError";
import { GenerateTokenProvider } from "../../../provider/GenerateTokenProvider";

export class RefreshTokenUserUseCase {
  async execute(refresh_token: string) {
    const refreshToken = await database.refreshToken.findFirst({
      where: {
        id: refresh_token,
      },
    });

    if (!refreshToken) {
      return new AppError("Refresh Token invalid");
    }

    const generateTokenProvider = new GenerateTokenProvider();

    const token = await generateTokenProvider.execute(refreshToken.userId);

    return token;
  }
}
