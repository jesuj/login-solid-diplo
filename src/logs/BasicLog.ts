import ILog from './Log.interfaces'
import fs from 'fs'

export class BasicLog implements ILog {
  private readonly archivo: string

  constructor () {
    this.archivo = 'logs.txt'
  }

  register (data: string): void {
    try {
      console.log(`Log guardado ${this.archivo}`)
      fs.appendFileSync(this.archivo, data + '\n')
    } catch (error) {
      console.error(error)
    }
  }
}
