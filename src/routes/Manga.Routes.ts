import { Router } from 'express'
import { CreateMangaControllers } from '../modules/Manga/CreateManga/CreateMangaControllers'
import { FindAllMangaControllers } from '../modules/Manga/FindAllManga/FindAllMangaControllers'

const manga = Router()

const createMangaControllers = new CreateMangaControllers()
const findAllMangaControllers = new FindAllMangaControllers()

manga.post('/', createMangaControllers.handle)
manga.get('/', findAllMangaControllers.handle)

export { manga }
