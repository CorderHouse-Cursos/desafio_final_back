import { IProduct } from '../models/Products'
import { IProductRepositories } from '../repositories'
import { DATABASE } from '../utils/constants'

const {
	ProductRepositories,
} = require(`../repositories/${DATABASE}Repositories/`)

export class ProductsService {
	private readonly productRepositories: IProductRepositories =
		new ProductRepositories()
	public async getAll(): Promise<IProduct[]> {
		return await this.productRepositories.getAll()
	}
	public async getById(id: number | string): Promise<IProduct> {
		const pro = await this.productRepositories.getById(id)
		if (!pro) throw new Error('No se encontró el elemento')
		return pro
	}
	public async create(data: IProduct): Promise<number | string> {
		return await this.productRepositories.create(data)
	}
	public async update(id: string | number, data: IProduct): Promise<void> {
		await this.productRepositories.update(id, data)
	}
	public async delete(id: number): Promise<void> {
		await this.productRepositories.delete(id)
	}
}
