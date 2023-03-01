import jwt from 'jsonwebtoken'

const Token: any = process.env.SECRET_JWT

export class GenerateTokenProvider {
	async execute(userId: string) {
		const token = jwt.sign({ id: userId }, Token, {
			expiresIn: 1800,
		})

		return token
	}
}
