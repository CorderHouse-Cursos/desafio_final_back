import fs from 'fs'
import path from 'path'
import IData from '../models/Data'
import { NotFound } from '../utils/errors'

export default class DataManager<T extends IData> {
	private file: string
	private data: T[] = []
	private name: string
	private allDataFIle = {}
	constructor(name: string) {
		this.file = path.join(__dirname, '../data/data.json')
		this.name = name
		this._loadData()
	}

	private _loadData(): void {
		console.log(this.file)
		if (fs.existsSync(this.file)) {
			this.data = JSON.parse(fs.readFileSync(this.file, 'utf8'))[this.name]
			this.allDataFIle = JSON.parse(fs.readFileSync(this.file, 'utf8'))
		}
	}
	private _saveData(): void {
		fs.writeFileSync(
			this.file,
			JSON.stringify({ ...this.allDataFIle, [this.name]: this.data })
		)
	}

	public getAll(): T[] {
		if (this.data === undefined) {
			return []
		}

		return this.data
	}

	public getById(id: number): T {
		if (this.data === undefined) {
			throw new NotFound('No se encontró el elemento')
		}

		const index = this.data.findIndex((item) => item.id == id)
		if (index === -1) {
			throw new NotFound('No se encontró el elemento')
		}
		return this.data[index]
	}

	public create(data: T): number {
		if (this.data === undefined) {
			throw new NotFound('No se encontró el elemento')
		}
		const id = this.data.length > 0 ? this.data[this.data.length - 1].id + 1 : 1
		this.data.push({ ...data, id })
		this._saveData()
		return id
	}

	public update(id: number, data: T): void {
		if (this.data === undefined) {
			throw new NotFound('No se encontró el elemento')
		}

		const index = this.data.findIndex((item) => item.id == id)
		if (index === -1) {
			throw new NotFound('No se encontró el elemento')
		}
		const oldData = this.data[index]
		this.data[index] = { ...oldData, ...data, id }

		this._saveData()
	}
	public delete(id: number): void {
		if (this.data === undefined) {
			throw new NotFound('No se encontró el elemento')
		}

		const index = this.data.findIndex((item) => item.id == id)
		if (index === -1) {
			throw new NotFound('No se encontró el elemento')
		}
		this.data.splice(index, 1)
		this._saveData()
	}
}
