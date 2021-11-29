import express from 'express'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import indexRoutes from './routes/v1/indexRoutes'

const app = express()

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/api/v1/', indexRoutes)

export default app
