import app from './app'
import { PORT, DATABASE_URL, SERVER_URL } from './utils/constants'
import mongoose from 'mongoose'
import { ProductosModel } from './models/Products'

app.listen(PORT, () => {
	console.log(`Server is running in ${SERVER_URL}`)
})

mongoose
	.connect(DATABASE_URL)
	.then((con) => {
		console.log('conectado')
	})
	.catch((err) => {
		console.log(err)
	})

mongoose.set('toJSON', {
	virtuals: true,
	transform: (doc, converted) => {
		delete converted._id
	},
})
