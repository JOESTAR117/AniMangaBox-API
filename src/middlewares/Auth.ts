import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

const Token: any = process.env.SECRET_JWT;

export function Auth(req: Request, res: Response, next: NextFunction) {
  const authToken = req.headers.authorization;

  if (!authToken) {
    return res.status(401).json({
      message: "Token is missing",
    });
  }

  const [, token] = authToken.split(" ");

  try {
    jwt.verify(token, Token);

    return next();
  } catch (error) {
    return res.status(401).json({ message: "Token invalid" });
  }
}
