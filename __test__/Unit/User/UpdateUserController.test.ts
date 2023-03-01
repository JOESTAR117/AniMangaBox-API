import { Request } from 'express'
import { makeMockResponse } from '../../../utils/mocks/makeMockResponse'
import { UpdateUserController } from '../../../src/modules/User/UpdateUser/UpdateUserControllers'

const updateUser = new UpdateUserController()

describe('UpdateUserController', () => {
	const res = makeMockResponse()

	it('should respond with 200 when user is updated', async () => {
		const req = {
			params: {
				id: '234324234242',
			},
			body: {
				name: 'Bob',
				email: 'bob@gmail.com',
				password: 123,
			},
		} as unknown as Request

		await updateUser.handle(req, res)

		expect(res.state.status).toEqual(200)
	})
})
