import dayjs from "dayjs";

import { database } from "../database/database";


export class GenerateRefreshToken {
  async execute(userId:string) {
    const expiresIn = dayjs().add(30, "minute").unix();

    const generateRefreshToken = await database.refreshToken.create({
      data: {
        userId,
        expiresIn: expiresIn,
      },
    });

    return generateRefreshToken;
  }
}
