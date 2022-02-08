import { IUser } from '../models/User'
import { IAuthRepositories, IUserRepositories } from '../repositories'
import { DATABASE } from '../utils/constants'

const {
	AuthRepositories,
	UserRepositories,
} = require(`../repositories/${DATABASE}Repositories/`)

export class AuthService {
	private readonly authRepositories: IAuthRepositories = new AuthRepositories()
	private readonly userRepositories: IUserRepositories = new UserRepositories()
	public login(email: string, password: string): void {
		return
	}
	public logout(): void {
		return
	}
	public register(data: IUser): void {
		return
	}
}
