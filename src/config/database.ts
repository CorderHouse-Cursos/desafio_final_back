import mongoose from 'mongoose'
import { DATABASE_URL } from '../utils/constants'

export const databaseConn = async () => {
	mongoose
		.connect(DATABASE_URL)
		.then((con) => {
			console.log('conectado')
		})
		.catch((err) => {
			console.log(err)
		})
}
