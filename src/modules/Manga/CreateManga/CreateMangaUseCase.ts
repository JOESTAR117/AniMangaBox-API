import { database } from "../../../database/database";
import { AppError } from "../../../errors/AppError";
import { MangaDTO } from "../MangaDTO";

export class CreateMangaUseCase {
  async execute({
    title,
    description,
    Chapters,
    Finished,
    release_date,
  }: MangaDTO) {
    const mangaExists = await database.manga.findFirst({
      where: {
        title: title,
      },
    });

    if (mangaExists) {
      return new AppError("This manga is already registered");
    }

    const manga = await database.manga.create({
      data: {
        title: title,
        description: description,
        Chapters: Chapters,
        Finished: Finished,
        release_date: release_date,
      },
    });

    if (
      manga.title.length < 0 ||
      manga.description.length < 0 ||
      manga.Chapters.length < 0
    ) {
      return new AppError("fill in all fields to register the manga");
    }

    return manga;
  }
}
