import { Router } from "express";
import swaggerUi from 'swagger-ui-express'
import swaggerDocument from '../swagger.json'

const swagger = Router()

swagger.use("/",swaggerUi.serve)
swagger.get("/doc",swaggerUi.setup(swaggerDocument))

export {swagger}