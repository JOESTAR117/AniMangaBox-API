import { Router } from 'express'
import { adminMiddlewares } from '../middlewares/Admin.Middlewares'
import { validMangaId } from '../middlewares/Global.Middlewares'
import { CreateMangaControllers } from '../modules/Manga/CreateManga/CreateMangaControllers'
import { FindAllMangaControllers } from '../modules/Manga/FindAllManga/FindAllMangaControllers'
import { UpdateMangaControllers } from '../modules/Manga/UpdateManga/UpdateMangaControllers'

const manga = Router()

const createMangaControllers = new CreateMangaControllers()
const findAllMangaControllers = new FindAllMangaControllers()
const updateMangaControllers = new UpdateMangaControllers()

manga.post('/', createMangaControllers.handle)
manga.get('/', findAllMangaControllers.handle)
manga.patch(
	'/:id',
	adminMiddlewares,
	validMangaId,
	updateMangaControllers.handle
)

export { manga }
