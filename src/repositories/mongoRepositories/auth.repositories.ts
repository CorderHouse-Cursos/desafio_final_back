import { IUser } from '../../models/User'

export class AuthRepositories {
	public async login(email: string, password: string): Promise<void> {
		return
	}

	public async register(data: IUser): Promise<void> {
		return
	}

	public async logout(): Promise<void> {
		return
	}
}
