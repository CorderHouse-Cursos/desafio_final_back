import IData from '../models/Data'
import { NotFound } from '../utils/errors'
import mongoose from 'mongoose'

export class MongoManager<T extends IData> {
	private name: string
	private model: mongoose.Model<T>
	constructor(name: string, model: typeof mongoose.Model) {
		this.name = name
		this.model = model
	}

	public async getAll(): Promise<T[]> {
		return await this.model.find()
	}

	public async getById(id: number | string): Promise<any> {
		const data = this.model.findOne({ id })
		return data
	}

	public async create(data: T): Promise<number> {
		if (data === undefined) {
			throw new NotFound('No se encontró el elemento')
		}

		const newData = new this.model(data)

		const dataSaved = await newData.save()
		return dataSaved.id
	}

	public async update(id: number | string, data: T): Promise<void> {
		const updated = await this.model.findOneAndUpdate({ id }, data, {
			new: true,
		})
		if (!updated) throw new NotFound('No se encontró el elemento')
	}
	public async delete(id: number): Promise<void> {
		const deleted = await this.model.findOneAndUpdate({ id })
		if (!deleted) throw new NotFound('No se encontró el elemento')
	}
}
