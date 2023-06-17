import { DatabaseLog } from '../logs/DatabaseLog'
import { BasicEncryptor } from '../encriptacion/BasicEncryptor'
import { ConsoleLog } from '../logs/ConsoleLog'
import { UsuarioService } from '../services/UsuarioService'
import { Request, Response } from 'express'
import { ExternalLog } from '../logs/ExternalLog'
import { BasicLog } from '../logs/BasicLog'
import ILog from '../logs/Log.interfaces'
import { ReverseEncryptor } from '../encriptacion/ReverseEncryptor'
import Encrypt from '../encriptacion/Encryptor.interfaces'
import { CaesarEncryptor } from '../encriptacion/CaesarEncryptor'

const usuarioService = new UsuarioService(new ConsoleLog(), new BasicEncryptor())

export async function registrar (req: Request, res: Response) {
  const { userName, name, password } = req.body
  usuarioService.registrar(userName, name, password)
  return res.status(201).json({ msg: 'Successful' })
}

export async function login (req: Request, res: Response) {
  const { userName, password } = req.body
  const isLogin = usuarioService.login(userName, password)
  if (isLogin) {
    return res.status(201).json({ msg: 'Login Successful' })
  }
  return res.status(400).json({
    message: 'Bad Request'
  })
}

interface Logs {
  [key: number]: ILog
}

export async function changeLogger (req: Request, res: Response) {
  const { option } = req.body
  const LOGS: Logs = {
    0: new ConsoleLog(),
    1: new DatabaseLog(),
    2: new ExternalLog(),
    3: new BasicLog()
  }
  const OPTION_DEFAULT: number = 0
  const LOG_DEFAULT: ILog = new ConsoleLog()
  usuarioService.setLogger(LOGS[option ?? OPTION_DEFAULT] ?? LOG_DEFAULT)
  return res.status(201).json({ msg: 'Successful' })
}

interface Criptos {
  [key: number]: Encrypt
}

export async function changeCripto (req: Request, res: Response) {
  const { option } = req.body
  const CRIPTOS: Criptos = {
    0: new BasicEncryptor(),
    1: new ReverseEncryptor(),
    3: new CaesarEncryptor()
  }
  const OPTION_DEFAULT: number = 0
  const LOG_DEFAULT: Encrypt = new BasicEncryptor()
  usuarioService.setCripto(CRIPTOS[option ?? OPTION_DEFAULT] ?? LOG_DEFAULT)
  return res.status(201).json({ msg: 'Successful' })
}
