import { Router } from "express";
import { CreateUserAdminController } from "../modules/Admin/CreateAdmin/CreateUserAdminController";
import { LoginAdminController } from "../modules/Admin/LoginAdmin/LoginAdminController";

const admin = Router();

const createUserAdminController = new CreateUserAdminController();
const loginAdminController = new LoginAdminController();

admin.post("/", createUserAdminController.handle);
admin.post("/login", loginAdminController.handle);

export { admin };
