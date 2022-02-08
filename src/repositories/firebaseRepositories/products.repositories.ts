import { IProduct } from '../../models/Products'
import * as admin from 'firebase-admin'
export class ProductRepositories {
	private db = admin.firestore()

	public async getAll(): Promise<IProduct[]> {
		console.log('llegue')
		const doc = await this.db.collection('products').get()
		const data: IProduct[] = []
		doc.forEach((doc) => {
			console.log(doc.data())
			data.push({ ...doc.data(), id: doc.id } as IProduct)
		})
		return data
	}

	public async getById(id: string | number): Promise<IProduct | null> {
		const doc = this.db.collection('products').doc(id.toString())
		const item = await doc.get()
		if (!item) return null
		return { ...item.data(), id: doc.id } as IProduct
	}

	public async create(data: IProduct): Promise<string> {
		const doc = this.db.collection('products').doc()
		data['id'] = doc.id
		await doc.create(data)
		return doc.id
	}

	public async update(id: string | number, data: IProduct): Promise<void> {
		const doc = this.db.collection('products').doc(id.toString())
		const retrieve = await doc.get()
		if (!retrieve.data()) return
		await doc.update(data)
	}

	public async delete(id: string | number): Promise<void> {
		const doc = this.db.collection('products').doc(id.toString())
		if (!doc) return
		await doc.delete()
	}
}
