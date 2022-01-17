import { MongoManager } from '../containers/MongoManager'
import { ICarts, CartsModel } from '../models/Carts'
import DataManager from '../containers/DataManager'

const local = false
const cartManager = local
	? new DataManager<ICarts>('carts')
	: new MongoManager<ICarts>('carts', CartsModel)

export class CartsDao {
	public async getAll(): Promise<ICarts[]> {
		return await cartManager.getAll()
	}
	public async getById(id: number): Promise<ICarts> {
		return await cartManager.getById(id)
	}
	public async create(data: ICarts): Promise<number> {
		return await cartManager.create(data)
	}
	public async update(id: number, data: ICarts): Promise<void> {
		await cartManager.update(id, data)
	}
	public async delete(id: number): Promise<void> {
		await cartManager.delete(id)
	}
}
