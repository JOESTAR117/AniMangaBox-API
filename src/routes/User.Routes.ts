import { Router } from "express";
import { CreateUserController } from "../modules/User/CreateUser/CreateUserControllers";
import { FindAllUsersControllers } from "../modules/User/findAllUser/FindAllUserControollers";
import { UpdateUserController } from "../modules/User/UpdateUser/UpdateUserController";

const createUserController = new CreateUserController();
const findAllUsersController = new FindAllUsersControllers();
const updateUserController = new UpdateUserController();

const user = Router();

user.post("/user", createUserController.handle);
user.get("/user", findAllUsersController.handle);
user.patch("/user/:id", updateUserController.handle);

export { user };
