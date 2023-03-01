import { Request } from 'express'
import { makeMockResponse } from '../../../utils/mocks/makeMockResponse'
import { CreateAnimeControllers } from '../../../src/modules/Anime/CreateAnime/CreateAnimeControllers'

const createAnime = new CreateAnimeControllers()

describe('CreateUserController', () => {
	const res = makeMockResponse()

	it('Should return the status 201 of the created anime', async () => {
		const req = {
			body: {
				title: 'teste',
				description: 'teste',
				episodes: '30',
				release_date: '2013-04-07T16:53:52.899Z',
			},
		} as Request

		await createAnime.handle(req, res)

		expect(res.state.status).toEqual(201)
	})

	it('Should return the status 400 of the created anime failed', async () => {
		const req = {
			body: {
				title: 'teste',
			},
		} as Request

		await createAnime.handle(req, res)

		expect(res.state.status).toEqual(400)
	})
})
