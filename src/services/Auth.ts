import jwt from "jsonwebtoken";
import { database } from "../database/database";

const Token: any = process.env.SECRET_JWT;

const User = database.user;

const loginService = (email: any) =>
  User.findUnique({
    where: {
      email: email,
    },
  });

const generateToken = (id: any) =>
  jwt.sign({ id: id }, Token, { expiresIn: 86400 });

export { loginService, generateToken };
