import express, { json } from 'express'
import morgan from 'morgan'
import cors from 'cors'
import { DataBase } from './db/initDb'

const port = process.env.PORT ?? 3004

const app = express()

const dB: DataBase = new DataBase()

dB.connectDb()

  .then(() => {
    console.log('G')
  })
  .catch(() => {
    console.log('No conecto al parecer')
  })

app.use(json())

app.use(morgan('dev'))

app.use(cors({ origin: '*' }))

app.listen(port, () => {
  console.log(`Server running in http://localhost:${port}`)
})
