import { Router } from "express";
import { LoginUserController } from "../modules/Auth/LoginUserControllers";

const auth = Router();

const loginUserControllers = new LoginUserController();

auth.post("/user/login", loginUserControllers.handle);

export {auth}