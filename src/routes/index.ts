import { Router } from "express";
import { CreateUserController } from "../modules/User/CreateUser/CreateUserControllers";
import { DeleteUsersControllers } from "../modules/User/DeleteUser/DeleteUserController";
import { FindAllUsersControllers } from "../modules/User/findAllUser/FindAllUserControollers";
import { UpdateUserController } from "../modules/User/UpdateUser/UpdateUserController";

const createUserController = new CreateUserController();
const findAllUsersController = new FindAllUsersControllers();
const updateUserController = new UpdateUserController();
const deleteUserController = new DeleteUsersControllers();

const router = Router();

router.post("/user", createUserController.handle);
router.get("/user", findAllUsersController.handle);
router.patch("/user/:id", updateUserController.handle);
router.delete("/user/:id", deleteUserController.handle);

export { router };
