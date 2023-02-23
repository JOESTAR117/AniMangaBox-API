import { database } from "../../../database/database";

export class FindAllAnimeUseCase {
  async execute() {
    try {
      const animes = await database.anime.findMany({
        include: {
          AnimeRent: {
            select: {
              user: {
                select: {
                  email:true,
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
