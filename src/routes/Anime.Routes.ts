import { Router } from 'express'

import { adminMiddlewares } from '../middlewares/Admin.Middlewares'
import { Auth } from '../middlewares/Auth.Middlewares'
import { validAnimeId } from '../middlewares/Global.Middlewares'

import { CreateAnimeControllers } from '../modules/Anime/CreateAnime/CreateAnimeControllers'
import { DeleteAnimeControllers } from '../modules/Anime/DeleteAnime/DeleteAnimeController'
import { FindAllAnimeController } from '../modules/Anime/FindAllAnime/FindAllAnimeControllers'
import { UpdateAnimeControllers } from '../modules/Anime/updateAnime/UpdateAnimeControllers'

import { CreateAnimeRentControllers } from '../modules/Anime_Rent/CreateAnimeRent/CreateAnimeRentControllers'
import { DeleteAnimeRentControllers } from '../modules/Anime_Rent/DeleteAnimeRent/DeleteAnimeRentControllers'

const createAnimeControllers = new CreateAnimeControllers()
const findAllAnimeControllers = new FindAllAnimeController()
const updateAnimeControllers = new UpdateAnimeControllers()
const deleteAnimeControllers = new DeleteAnimeControllers()

const createAnimeRentControllers = new CreateAnimeRentControllers()
const deleteAnimeRentControllers = new DeleteAnimeRentControllers()

const anime = Router()

anime.post('/', createAnimeControllers.handle)
anime.get('/', findAllAnimeControllers.handle)
anime.patch(
	'/:id',
	adminMiddlewares,
	validAnimeId,
	updateAnimeControllers.handle
)
anime.delete(
	'/:id',
	adminMiddlewares,
	validAnimeId,
	deleteAnimeControllers.handle
)

anime.post('/rent', Auth, createAnimeRentControllers.handle)
anime.delete('/rent/delete', Auth, deleteAnimeRentControllers.handle)

export { anime }
