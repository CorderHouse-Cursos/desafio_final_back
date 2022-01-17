import DataManager from '../containers/DataManager'
import { MongoManager } from '../containers/MongoManager'
import { IProducts, ProductosModel } from '../models/Products'

const local = false
const productManager = local
	? new DataManager<IProducts>('products')
	: new MongoManager<IProducts>('products', ProductosModel)

export class ProductDao {
	public async getAll(): Promise<IProducts[]> {
		return await productManager.getAll()
	}
	public async getById(id: number): Promise<IProducts> {
		return await productManager.getById(id)
	}
	public async create(data: IProducts): Promise<number> {
		return await productManager.create(data)
	}
	public async update(id: number, data: IProducts): Promise<void> {
		await productManager.update(id, data)
	}
	public async delete(id: number): Promise<void> {
		await productManager.delete(id)
	}
}
