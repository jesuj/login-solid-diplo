import express from 'express'
import * as dotenv from 'dotenv'
import authRouter from './routes/auth.routes'
dotenv.config()

export default class Server {
  private readonly app: express.Application
  private readonly port: number

  constructor () {
    this.app = express()
    this.port = Number(process.env.PORT ?? '3000')
    this.middlewares()
    this.routes()
  }

  middlewares (): void {
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: true }))
  }

  routes (): void {
    this.app.use('/api/auth', authRouter)
  }

  listen (): void {
    this.app.listen(this.port, () => {
      console.log(`🚀 Server ready at: http://localhost:${this.port}`)
    })
  }
}
