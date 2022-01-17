import { ProductosModel } from '../models/Products'
import { CartsModel } from '../models/Carts'
import { MODELS } from './constants'

const models = {
	[MODELS.PRODUCTS]: ProductosModel,
	[MODELS.CART]: CartsModel,
}

export const instanciateModel = (name: string) => models[name]
