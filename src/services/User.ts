import { UserModel, IUser } from '../models/User'
import { initManager } from '../utils/manager'

const userManager = initManager<IUser>('user', UserModel)

export class UserService {
	public async getAll(): Promise<IUser[]> {
		return await userManager.getAll()
	}
	public async getById(id: number | string): Promise<IUser> {
		return await userManager.getById(id)
	}
	public async create(data: IUser): Promise<number | string> {
		return await userManager.create(data)
	}
	public async update(id: string | number, data: IUser): Promise<void> {
		await userManager.update(id, data)
	}
	public async delete(id: number): Promise<void> {
		await userManager.delete(id)
	}
	public async getByEmail(email: string): Promise<IUser> {
		return await userManager.getBy({ email })
	}
}
