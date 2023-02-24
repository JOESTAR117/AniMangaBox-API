import { Router } from "express";
import { PasswordRecovery } from "../modules/User/PasswordRecovery/PasswordRecoveryController";

const recovery = Router()

const recoveryPasswordController = new PasswordRecovery()

recovery.post('/user',recoveryPasswordController.handle)

export {recovery}