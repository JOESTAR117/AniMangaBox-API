import { Router } from "express";
import { CreateUserAdminController } from "../modules/Admin/CreateUserAdminController";

const admin = Router();

const createUserAdminController = new CreateUserAdminController();

admin.post("/", createUserAdminController.handle);


export {admin}