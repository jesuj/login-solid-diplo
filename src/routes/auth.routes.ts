
import { changeCripto, changeLogger, login, registrar } from '../controllers/auth.controller'
import { Router } from 'express'

const router = Router()

router.post('/register', registrar)
router.post('/login', login)
router.post('/changeLogger', changeLogger)
router.post('/changeCripto', changeCripto)

export default router
