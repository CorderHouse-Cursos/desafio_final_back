import { IProducts, ProductosModel } from '../models/Products'
import { initManager } from '../utils/manager'

const productManager = initManager<IProducts>('products', ProductosModel)

export class ProductDao {
	public async getAll(): Promise<IProducts[]> {
		return await productManager.getAll()
	}
	public async getById(id: number | string): Promise<IProducts> {
		return await productManager.getById(id)
	}
	public async create(data: IProducts): Promise<number | string> {
		return await productManager.create(data)
	}
	public async update(id: string | number, data: IProducts): Promise<void> {
		await productManager.update(id, data)
	}
	public async delete(id: number): Promise<void> {
		await productManager.delete(id)
	}
}
