import express from 'express'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import cors from 'cors'
import cartRoutes from './routes/v1/cartRoutes'
import productsRoutes from './routes/v1/productsRoutes'

const app = express()

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors({ origin: '*' }))
app.use('/', express.static(`${__dirname}/public`))

app.use('/api/productos', productsRoutes)
app.use('/api/carrito', cartRoutes)

export default app
