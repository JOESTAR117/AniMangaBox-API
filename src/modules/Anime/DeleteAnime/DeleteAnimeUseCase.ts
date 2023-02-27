import { database } from "../../../database/database";
import { DeleteAnimeDTO } from "./DeleteAnimeDTO";

export class DeleteAnimeUseCase {
  async execute({ id }: DeleteAnimeDTO) {
    const anime = await database.anime.delete({
      where: {
        id: id,
      },
    });

    return anime;
  }
}
