import { NextFunction, Request, Response } from "express";
import dotenv from "dotenv";

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
    if (token === UserAdmin) {
      next();
    } else {
      res.status(400).json({ message: "You are not the administrator" });
    }
  } catch (error) {
    return res.status(400).json({ message: "You are not the administrator" });
  }
};
