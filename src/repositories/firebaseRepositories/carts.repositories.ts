import { ICart } from '../../models/Carts'
import * as admin from 'firebase-admin'
export class CartsRepositories {
	private db = admin.firestore()

	public async getAll(): Promise<ICart[]> {
		const doc = await this.db.collection('carts').get()
		const data: ICart[] = []
		doc.forEach((doc) => {
			data.push({ ...doc.data(), id: doc.id } as ICart)
		})
		return data
	}

	public async getById(id: string | number): Promise<ICart | null> {
		const doc = this.db.collection('carts').doc(id.toString())
		const item = await doc.get()
		if (!item) return null
		return { ...item.data(), id: doc.id } as ICart
	}

	public async create(data: ICart): Promise<string> {
		const doc = this.db.collection('carts').doc()
		data['id'] = doc.id
		await doc.create(data)
		return doc.id
	}

	public async update(id: string | number, data: ICart): Promise<void> {
		const doc = this.db.collection('carts').doc(id.toString())
		const retrieve = await doc.get()
		if (!retrieve.data()) return
		await doc.update(data)
	}

	public async delete(id: string | number): Promise<void> {
		const doc = this.db.collection('carts').doc(id.toString())
		if (!doc) return
		await doc.delete()
	}
}
