import { database } from "../../../database/database";

export class FindAllUserUseCase {
  async execute() {
    try {
      const users = await database.user.findMany({
        select: {
          id: true,
          name: true,
          email: true,
          AnimeRent: true,
        },
      });

      return users;
    } catch (error) {
      return console.log(error);
    }
  }
}
