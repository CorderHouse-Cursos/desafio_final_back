import { CartsModel, ICart } from '../../models/Carts'

export class CartsRepository {
	public async getAll(): Promise<ICart[]> {
		return await CartsModel.find()
	}

	public async getById(id: string): Promise<ICart | null> {
		return await CartsModel.findById(id)
	}

	public async create(data: ICart): Promise<string> {
		const cart = new CartsModel(data)
		return await cart.save().then(() => cart._id)
	}

	public async update(id: string, data: ICart): Promise<void> {
		await CartsModel.findByIdAndUpdate(id, data)
	}

	public async delete(id: string): Promise<void> {
		await CartsModel.findByIdAndRemove(id)
	}
}
