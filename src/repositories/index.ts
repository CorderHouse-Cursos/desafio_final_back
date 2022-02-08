import { ICart } from '../models/Carts'
import { IProduct } from '../models/Products'
import { IUser } from '../models/User'

export interface IProductRepositories {
	getAll(): Promise<IProduct[]>
	getById(id: string | number): Promise<IProduct | null>
	create(data: IProduct): Promise<string>
	update(id: string | number, data: IProduct): Promise<void>
	delete: (id: string | number) => Promise<void>
}

export interface ICartRepositories {
	getAll(): Promise<ICart[]>
	getById(id: string | number): Promise<ICart | null>
	create(data: ICart): Promise<string>
	update(id: string | number, data: ICart): Promise<void>
	delete: (id: string | number) => Promise<void>
}

export interface IUserRepositories {
	getAll(): Promise<IUser[]>
	getById(id: string | number): Promise<IUser | null>
	create(data: IUser): Promise<string>
	update(id: string | number, data: IUser): Promise<void>
	delete: (id: string | number) => Promise<void>
	getByEmail(email: string): Promise<IUser>
}

export interface IAuthRepositories {
	login(email: string, password: string): Promise<IUser>
	logout(): Promise<void>
	register(data: IUser): Promise<void>
}
