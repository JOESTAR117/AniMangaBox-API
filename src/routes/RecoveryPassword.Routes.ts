import { Router } from 'express'
import { PasswordRecovery } from '../modules/PasswordRecovery/PasswordRecoveryControllers'

const recovery = Router()

const recoveryPasswordController = new PasswordRecovery()

recovery.post('/user', recoveryPasswordController.handle)

export { recovery }
