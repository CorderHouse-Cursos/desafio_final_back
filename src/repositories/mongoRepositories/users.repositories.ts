import { IUser, UserModel } from '../../models/User'

export class UserRepositories {
	public async getAll(): Promise<IUser[]> {
		return await UserModel.find()
	}

	public async getById(id: string | number): Promise<IUser | null> {
		return await UserModel.findById(id)
	}

	public async create(data: IUser): Promise<string> {
		const product = new UserModel(data)
		return await product.save().then(() => product._id)
	}

	public async update(id: string | number, data: IUser): Promise<void> {
		await UserModel.findByIdAndUpdate(id, data)
	}

	public async delete(id: string | number): Promise<void> {
		await UserModel.findByIdAndRemove(id)
	}
	public async getByEmail(email: string): Promise<IUser | null> {
		return await UserModel.findOne({ email })
	}
}
