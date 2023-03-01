import { Router } from 'express'
import { admin } from './Admin.Routes'
import { anime } from './Anime.Routes'
import { manga } from './Manga.Routes'
import { recovery } from './RecoveryPassword.Routes'
import { swagger } from './swagger.Routes'
import { user } from './User.Routes'

const routes = Router()

routes.use('/user', user)
routes.use('/recovery', recovery)
routes.use('/anime', anime)
routes.use('/manga', manga)
routes.use('/doc', swagger)
routes.use('/admin', admin)

export { routes }
