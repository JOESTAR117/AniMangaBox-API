import dayjs from "dayjs";

import { database } from "../database/database";


export class GenerateRefreshToken {
  async execute(userId:string) {
    const expiresIn = dayjs().add(20, "second").unix();

    const generateRefreshToken = await database.refreshToken.create({
      data: {
        userId,
        expiresIn: expiresIn,
      },
    });

    return generateRefreshToken;
  }
}
