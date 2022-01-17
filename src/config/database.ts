import mongoose from 'mongoose'
import { DATABASE_URL } from '../utils/constants'
import * as admin from 'firebase-admin'
import cert from '../config/coder-project-final-firebase-adminsdk-x6t5u-323560713a.json'

export const databaseConn = async () => {
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
}

export const firebaseConn = async () => {
	const app = admin.initializeApp({
		credential: admin.credential.cert(cert as admin.ServiceAccount),
		databaseURL: 'https://shop-b2b.firebaseio.com',
	})
	return app
}

export default function init() {
	console.log(process.env.DATABASE)
	switch (process.env.DATABASE) {
		case 'mongo':
			databaseConn()
			break
		case 'firebase':
			firebaseConn()
			break
		default:
			break
	}
}
