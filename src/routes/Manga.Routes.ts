import { Router } from "express";
import { CreateMangaControllers } from "../modules/Manga/CreateManga/CreateMangaControllers";

const manga = Router()

const createMangaControllers = new CreateMangaControllers()

manga.post("/",createMangaControllers.handle)

export {manga}