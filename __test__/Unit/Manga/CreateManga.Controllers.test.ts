import { Request } from "express";
import { makeMockResponse } from "../../../utils/mocks/makeMockResponse";
import { CreateMangaControllers } from "../../../src/modules/Manga/CreateManga/CreateMangaControllers";

const createManga = new CreateMangaControllers();

describe("CreatedMangaController", () => {
  const res = makeMockResponse();

  it("Should return the status 201 of the created manga", async () => {
    const req = {
      body: {
        title: "title",
        description: "description",
        Chapters: "Chapters",
        Finished: true,
        release_date: "2013-04-07T16:53:52.899Z",
      },
    } as Request;

    await createManga.handle(req, res);

    expect(res.state.status).toEqual(201);
  });
});
