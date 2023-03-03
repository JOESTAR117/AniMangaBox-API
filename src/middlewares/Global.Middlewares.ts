import { NextFunction, Request, Response } from 'express'
import { database } from '../database/database'

export const validId = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const id = req.params.id

		if (
			!(await database.user.findUnique({
				where: {
					id: id,
				},
			}))
		) {
			return res.status(400).json({ message: 'Invalid ID' })
		}
		next()
	} catch (error) {
		console.log(error)
	}
}

export const validUser = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const id = req.params.id
		const user = await database.user.findUnique({
			where: {
				id: id,
			},
		})

		if (!user) {
			return res.status(400).json({ message: 'User not found' })
		}

		next()
	} catch (error) {
		console.log(error)
	}
}

export const validAnimeId = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const id = req.params.id
		const anime = await database.anime.findUnique({
			where: {
				id: id,
			},
		})

		if (!anime) {
			return res.status(400).json({ message: 'Anime not found' })
		}

		next()
	} catch (error) {
		console.log(error)
	}
}

export const validMangaId = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const id = req.params.id
		const manga = await database.manga.findUnique({
			where: {
				id: id,
			},
		})

		if (!manga) {
			return res.status(400).json({ message: 'Manga not found' })
		}

		next()
	} catch (error) {
		console.log(error)
	}
}

export default { validId, validUser, validAnimeId, validMangaId }
