import express, { json } from 'express'
import morgan from 'morgan'
import cors from 'cors'

const port = process.env.PORT ?? 3004

const app = express()

app.use(json())

app.use(morgan('dev'))

app.use(cors({ origin: '*' }))

app.listen(port, () => {
  console.log(`Server running in http://localhost:${port}`)
})
