import { ICarts, CartsModel } from '../models/Carts'
import { initManager } from '../utils/manager'

const cartManager = initManager<ICarts>('carts', CartsModel)

export class CartsService {
	public async getAll(): Promise<ICarts[]> {
		return await cartManager.getAll()
	}
	public async getById(id: number | string): Promise<ICarts> {
		return await cartManager.getById(id)
	}
	public async create(data: ICarts): Promise<number | string> {
		return await cartManager.create(data)
	}
	public async update(id: number | string, data: ICarts): Promise<void> {
		await cartManager.update(id, data)
	}
	public async delete(id: number | string): Promise<void> {
		await cartManager.delete(id)
	}
}
