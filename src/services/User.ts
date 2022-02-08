import { IUser } from '../models/User'
import { IUserRepositories } from '../repositories'
import { DATABASE } from '../utils/constants'

const { UserRepositories } = require(`../repositories/${DATABASE}Repositories/`)

export class UserService {
	private readonly userRepositories: IUserRepositories = new UserRepositories()
	public async getAll(): Promise<IUser[]> {
		return await this.userRepositories.getAll()
	}
	public async getById(id: number | string): Promise<IUser> {
		const user = await this.userRepositories.getById(id)
		if (!user) throw new Error('User not found')
		return user
	}
	public async create(data: IUser): Promise<number | string> {
		return await this.userRepositories.create(data)
	}
	public async update(id: string | number, data: IUser): Promise<void> {
		await this.userRepositories.update(id, data)
	}
	public async delete(id: number): Promise<void> {
		await this.userRepositories.delete(id)
	}
	public async getByEmail(email: string): Promise<IUser> {
		return await this.userRepositories.getByEmail(email)
	}
}
