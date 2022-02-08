import { CartsModel, ICart } from '../../models/Carts'

export class CartsRepositories {
	public async getAll(): Promise<ICart[]> {
		return await CartsModel.find()
	}

	public async getById(id: string | number): Promise<ICart | null> {
		return await CartsModel.findById(id)
	}

	public async create(data: ICart): Promise<string> {
		const cart = new CartsModel(data)
		return await cart.save().then(() => cart._id)
	}

	public async update(id: string | number, data: ICart): Promise<void> {
		await CartsModel.findByIdAndUpdate(id, data)
	}

	public async delete(id: string | number): Promise<void> {
		await CartsModel.findByIdAndRemove(id)
	}
}
