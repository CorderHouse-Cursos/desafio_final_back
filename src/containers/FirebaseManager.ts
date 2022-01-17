import IData from '../models/Data'
import { NotFound } from '../utils/errors'
import * as admin from 'firebase-admin'

export class FirebaseManager<T extends IData> {
	private db: admin.firestore.Firestore
	private model: admin.firestore.CollectionReference
	private name: string
	constructor(name: string) {
		this.db = admin.firestore()
		this.model = this.db.collection(name)
		this.name = name
	}

	public async getAll(): Promise<T[]> {
		const querySnapshot = await this.model.get()
		const data: T[] = []
		querySnapshot.forEach((doc) => {
			data.push({ ...doc.data(), id: doc.id } as T)
		})
		return data
	}

	public async getById(id: string | number): Promise<any> {
		console.log('ID: ', id)
		const doc = this.model.doc(id as string)
		const item = await doc.get()

		if (!item.data()) throw new NotFound('No se encontró el elemento')
		return item.data()
	}

	public async create(data: T): Promise<string> {
		if (data === undefined) {
			throw new NotFound('No se encontró el elemento')
		}
		if (this.name === 'carts') {
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			//@ts-ignore
			data['products'] = JSON.stringify(data['products'])
		}
		const doc = this.model.doc()
		data['id'] = doc.id
		await doc.create(data)

		return doc.id
	}

	public async update(id: number | string, data: T): Promise<void> {
		const doc = this.model.doc(id as string)
		console.log('ID: ', id)
		console.log('DATA: ', doc)
		if (!doc) throw new NotFound('No se encontró el elemento')
		await doc.update(data)
	}
	public async delete(id: number): Promise<void> {
		const doc = await this.model.doc(id.toString())
		if (!doc) throw new NotFound('No se encontró el elemento')
		await doc.delete()
	}
}
