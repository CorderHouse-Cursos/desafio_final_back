import { IProduct, ProductosModel } from '../../models/Products'

export class ProductRepositories {
	public async getAll(): Promise<IProduct[]> {
		return await ProductosModel.find()
	}

	public async getById(id: string): Promise<IProduct | null> {
		return await ProductosModel.findById(id)
	}

	public async create(data: IProduct): Promise<string> {
		const product = new ProductosModel(data)
		return await product.save().then(() => product._id)
	}

	public async update(id: string, data: IProduct): Promise<void> {
		await ProductosModel.findByIdAndUpdate(id, data)
	}

	public async delete(id: string): Promise<void> {
		await ProductosModel.findByIdAndRemove(id)
	}
}
