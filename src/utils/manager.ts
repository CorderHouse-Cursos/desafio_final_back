import { FirebaseManager } from '../containers/FirebaseRepository'
import { MongoManager } from '../containers/MongoRepository'

import mongoose from 'mongoose'

import IData from '../models/Data'
import DataManager from '../containers/DataRepository'
import dotenv from 'dotenv'
import initDatabase from '../config/database'

dotenv.config()
initDatabase()

export function initManager<T extends IData>(
	name: string,
	model: mongoose.Model<any>
) {
	const database = process.env.DATABASE

	switch (database) {
		case 'mongo':
			return new MongoManager<T>(name, model)
		case 'firebase':
			return new FirebaseManager<T>(name)
		default:
			return new DataManager<T>(name)
	}
}
