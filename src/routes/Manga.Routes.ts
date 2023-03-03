import { Router } from 'express'
import { adminMiddlewares } from '../middlewares/Admin.Middlewares'
import { validMangaId } from '../middlewares/Global.Middlewares'
import { CreateMangaControllers } from '../modules/Manga/CreateManga/CreateMangaControllers'
import { DeleteMangaControllers } from '../modules/Manga/DeleteManga/DeleteMangaControllers'
import { FindAllMangaControllers } from '../modules/Manga/FindAllManga/FindAllMangaControllers'
import { UpdateMangaControllers } from '../modules/Manga/UpdateManga/UpdateMangaControllers'

const manga = Router()

const createMangaControllers = new CreateMangaControllers()
const findAllMangaControllers = new FindAllMangaControllers()
const updateMangaControllers = new UpdateMangaControllers()
const deleteMangaControllers = new DeleteMangaControllers()

manga.post('/', createMangaControllers.handle)
manga.get('/', findAllMangaControllers.handle)
manga.patch(
	'/:id',
	adminMiddlewares,
	validMangaId,
	updateMangaControllers.handle
)
manga.delete(
	'/:id',
	adminMiddlewares,
	validMangaId,
	deleteMangaControllers.handle
)

export { manga }
