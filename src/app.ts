import 'express-async-errors'

import express, { NextFunction, Request, Response } from 'express'
import cors from 'cors'
import { AppError } from './errors/AppError'
import { routes } from './routes'

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
	if (error instanceof AppError) {
		return res.status(error.statusCode).json({
			status: 'error',
			message: error.message,
		})
	}
	return res.status(500).json({
		status: 'error',
		message: `Internal server error - ${error.message}`,
	})
})

export { app }
