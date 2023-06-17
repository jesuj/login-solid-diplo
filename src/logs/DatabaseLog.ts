import { insertLog } from '../db/insertLog.db'
import ILog from './Log.interfaces'

export class DatabaseLog implements ILog {
  register (data: string): void {
    insertLog(data).then(_ => {}).catch(_ => {})
  }
}
