import Encrypt from '../encriptacion/Encryptor.interfaces'
import ILog from '../logs/Log.interfaces'
import { Usuario } from '../models/Usuario'

export class UsuarioService {
  private logger!: ILog
  private cripto!: Encrypt
  private readonly lista!: Usuario[]

  constructor (logger: ILog, cripto: Encrypt) {
    this.logger = logger
    this.cripto = cripto
    this.lista = []
  }

  registrar (username: string, name: string, password: string): void {
    const user: Usuario = new Usuario(name, username, password)
    console.log({ password }, this.cripto.encrypt(password))
    this.lista.push(user)
    this.logger.register(`Creacion de usuario: ${user.toString()}`)
  }

  login (userName: string, _password: string): boolean {
    for (const user of this.lista) {
      if (user.getUserName() === userName) {
        this.logger.register(`Usuario autenticado: ${user.toString()}`)
        return true
      }
    }
    this.logger.register('Fallo de autenticacion')
    return false
  }

  setLogger (logger: ILog): void {
    this.logger = logger
  }

  setCripto (cripto: Encrypt): void {
    this.cripto = cripto
  }
}
