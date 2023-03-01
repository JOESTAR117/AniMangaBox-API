import { database } from '../../database/database'
import { AppError } from '../../errors/AppError'
import { GenerateTokenProvider } from '../../provider/RefreshToken/GenerateTokenProvider'
import dayjs from 'dayjs'
import { GenerateRefreshToken } from '../../provider/RefreshToken/GenerateRefreshToken'

export class RefreshTokenUserUseCase {
	async execute(refresh_token: string) {
		const refreshToken = await database.refreshToken.findFirst({
			where: {
				id: refresh_token,
			},
		})

		if (!refreshToken) {
			return new AppError('Refresh Token invalid')
		}

		const refreshTokenExpired = dayjs().isAfter(
			dayjs.unix(refreshToken.expiresIn)
		)

		const generateTokenProvider = new GenerateTokenProvider()

		const token = await generateTokenProvider.execute(refreshToken.userId)

		if (refreshTokenExpired) {
			await database.refreshToken.deleteMany({
				where: {
					userId: refreshToken.userId,
				},
			})

			const generateRefreshTokenProvider = new GenerateRefreshToken()
			const newRefreshToken = await generateRefreshTokenProvider.execute(
				refreshToken.userId
			)

			return {
				token,
				message: {
					'Refresh Token': newRefreshToken,
				},
			}
		}

		return token
	}
}
