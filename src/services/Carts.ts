import { ICart } from '../models/Carts'
import { ICartRepositories } from '../repositories'
import { DATABASE } from '../utils/constants'
const {
	CartsRepositories,
} = require(`../repositories/${DATABASE}Repositories/`)

export class CartsService {
	private readonly cartRepositories: ICartRepositories = new CartsRepositories()
	public async getAll(): Promise<ICart[]> {
		return await this.cartRepositories.getAll()
	}
	public async getById(id: number | string): Promise<ICart> {
		const cart = await this.cartRepositories.getById(id)
		if (!cart) throw new Error('No se encontró el elemento')
		return cart
	}
	public async create(data: ICart): Promise<number | string> {
		return await this.cartRepositories.create(data)
	}
	public async update(id: number | string, data: ICart): Promise<void> {
		await this.cartRepositories.update(id, data)
	}
	public async delete(id: number | string): Promise<void> {
		await this.cartRepositories.delete(id)
	}
}
