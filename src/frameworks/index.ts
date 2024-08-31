import express, { json } from 'express'
import morgan from 'morgan'
import cors from 'cors'
import { DataBase } from './db/initDb'

const port = process.env.PORT ?? 3004

const app = express()

async function startB (): Promise<void> {
  const dB: DataBase = new DataBase()
  const dataBaseSource = await dB.connectDb()

  if (dataBaseSource == null) {
    console.log('No se conecto bien ')
  }
}

await startB()

app.use(json())

app.use(morgan('dev'))

app.use(cors({ origin: '*' }))

app.listen(port, () => {
  console.log(`Server running in http://localhost:${port}`)
})
