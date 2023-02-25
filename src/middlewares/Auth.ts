import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import dotenv from 'dotenv'

dotenv.config()


const Token:string = (process.env.SECRET_JWT as string)

export const Auth = async (req: Request, res: Response, next: NextFunction) => {
  const authToken = req.headers.authorization;

  if (!authToken) {
    return res.status(401).json({
      message: "Token is missing",
    });
  }

  const [, token] = authToken.split(" ");

  try {
    jwt.verify(token, Token);

    next();
  } catch (error) {
    return console.log(Token)
  }
};
