import fs from 'fs'
import path from 'path'
import IData from '../models/Data'
import { IProducts } from '../models/Products'

export default class DataManager<T extends IData> {
	private file: string
	private data: T[] = []
	private name: string
	constructor(name: string) {
		this.file = path.join(__dirname, '../data/data.json')
		this.name = name
		this._loadData()
	}

	private _loadData(): void {
		console.log(this.file)
		if (fs.existsSync(this.file)) {
			this.data = JSON.parse(fs.readFileSync(this.file, 'utf8'))[this.name]
		}
	}
	private _saveData(): void {
		fs.writeFileSync(this.file, JSON.stringify({ [this.name]: this.data }))
	}

	public getAll(): T[] {
		if (this.data === undefined) {
			throw new Error('No hay datos')
		}

		return this.data
	}

	public getById(id: number): T {
		if (this.data === undefined) {
			throw new Error('No hay datos')
		}

		const index = this.data.findIndex((item) => item.id == id)
		if (index === -1) {
			throw new Error('No se encontró el elemento')
		}
		return this.data[index]
	}

	public create(data: T): void {
		if (this.data === undefined) {
			throw new Error('No hay datos')
		}
		const last_id =
			this.data.length > 0 ? this.data[this.data.length - 1].id + 1 : 1
		this.data.push({ ...data, id: last_id })
		this._saveData()
	}

	public update(id: number, data: T): void {
		if (this.data === undefined) {
			throw new Error('No hay datos')
		}

		const index = this.data.findIndex((item) => item.id == id)
		if (index === -1) {
			throw new Error('No se encontró el elemento')
		}
		const oldData = this.data[index]
		this.data[index] = { ...oldData, ...data, id }

		this._saveData()
	}
	public delete(id: number): void {
		if (this.data === undefined) {
			throw new Error('No hay datos')
		}

		const index = this.data.findIndex((item) => item.id == id)
		if (index === -1) {
			throw new Error('No se encontró el elemento')
		}
		this.data.splice(index, 1)
		this._saveData()
	}
}
