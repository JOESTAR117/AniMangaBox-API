import { Router } from "express";
import { Auth } from "../middlewares/Auth";
import { AuthenticateUserController } from "../modules/AuthenticateUser/AuthenticateUserControllers";
import { CreateUserController } from "../modules/User/CreateUser/CreateUserControllers";
import { FindAllUsersControllers } from "../modules/User/findAllUser/FindAllUserControollers";
import { RefreshTokenUserController } from "../modules/User/RefreshTokenUser/RefreshTokenUserController";
import { UpdateUserController } from "../modules/User/UpdateUser/UpdateUserController";

const createUserController = new CreateUserController();
const findAllUsersController = new FindAllUsersControllers();
const updateUserController = new UpdateUserController();
const authenticateUserController = new AuthenticateUserController();

const refreshTokenUserController = new RefreshTokenUserController();

const user = Router();

user.post("/", createUserController.handle);
user.get("/", findAllUsersController.handle);
user.post("/login", authenticateUserController.handle);
user.post("/refresh-token", refreshTokenUserController.handle);

user.patch("/:id", Auth, updateUserController.handle);

export { user };
