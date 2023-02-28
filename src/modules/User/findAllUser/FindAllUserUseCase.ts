import { Request } from "express";
import { database } from "../../../database/database";

export class FindAllUserUseCase {
  async execute(req: Request) {
    try {
      const users = await database.user.findMany({
        select: {
          id: true,
          email: true,
          name: true,
          AnimeRent: {
            select: {
              anime: {
                select: {
                  title: true,
                },
              },
            },
          },
          MangaRent: {
            select: {
              manga: {
                select: {
                  title: true,
                },
              },
            },
          },
        },
      });

      return users;
    } catch (error) {
      return console.log(error);
    }
  }
}
