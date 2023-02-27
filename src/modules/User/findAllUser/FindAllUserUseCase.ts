import { Request } from "express";
import { database } from "../../../database/database";

export class FindAllUserUseCase {
  async execute(req: Request) {
    const { search, take, skip } = req.query;
    try {
      const users = await database.user.findMany({
        where: {
          name: {
            contains: String(search),
            mode: "insensitive",
          },
        },
        take: Number(take),
        skip: Number(skip),
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
