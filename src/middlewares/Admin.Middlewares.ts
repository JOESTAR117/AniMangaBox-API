import { NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

export const adminMiddlewares = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const UserAdmin: string = process.env.ADMIN as string;

  const authToken = req.headers.authorization;

  if (!authToken) {
    return res.status(401).json({ message: "You are not the administrator" });
  }

  const [, token] = authToken.split(" ");
  try {
    jwt.verify(token, UserAdmin);

    next();
  } catch (error) {
    return res.status(400).json({ message: "You are not the administrator" });
  }
};
