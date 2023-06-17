import ILog from './Log.interfaces'

export class ConsoleLog implements ILog {
  register (data: string): void {
    console.log(data)
  }
}
