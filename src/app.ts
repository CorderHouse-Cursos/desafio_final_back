import express from 'express'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import cors from 'cors'
import cartRoutes from './routes/v1/cartRoutes'
import productsRoutes from './routes/v1/productsRoutes'
import indexRoutes from './routes/v1/indexRoutes'
import { errorHandler } from './middlewares/errorHandler'
import path from 'path'

const app = express()

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors({ origin: '*' }))
app.use('/', express.static(path.join(__dirname, 'public')))
app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'public', 'index.html'))
})
app.use('/api/user', indexRoutes)
app.use('/api/carrito', cartRoutes)
app.use('/api/productos', productsRoutes)

app.use(errorHandler)
export default app
