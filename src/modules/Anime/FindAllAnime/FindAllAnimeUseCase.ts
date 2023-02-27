import { database } from "../../../database/database";
import { request, Request } from "express";

export class FindAllAnimeUseCase {
  async execute(req: Request) {
    const { search, take, skip } = req.query;
    try {
      const animes = await database.anime.findMany({
        where: {
          title: {
            contains: String(search),
            mode: "insensitive",
          },
        },
        take: Number(take),
        skip: Number(skip),
        select: {
          id: true,
          title: true,
          description: true,
          episodes: true,
          release_date: true,
          AnimeRent: {
            select: {
              user: {
                select: {
                  name: true,
                  id: true,
                },
              },
            },
          },
        },
      });

      return animes;
    } catch (error) {
      console.log(error);
    }
  }
}
