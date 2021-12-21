import { Request, Response } from 'express'
import { ICarts } from '../models/Carts'
import DataManager from '../services/DataManager'
import STATUSCODE from '../utils/statusCode'
import * as constants from '../utils/constants'
import { IProducts } from '../models/Products'

const cartManager = new DataManager<ICarts>('carts')
const productManager = new DataManager<IProducts>('products')

export default {
	getProductsInCartById: (req: Request, res: Response) => {
		const cart = cartManager.getById(parseInt(req.params.id))
		res.status(STATUSCODE.OK).json(cart)
	},
	createCart: (req: Request, res: Response) => {
		const idCart = cartManager.create({
			id: 1,
			timestamp: new Date(),
			products: [],
		})
		res
			.status(STATUSCODE.CREATED)
			.json({ message: 'Carrito creado', data: { id: idCart } })
	},

	deleteCart: (req: Request, res: Response) => {
		cartManager.delete(parseInt(req.params.id))
		res.status(STATUSCODE.OK).json({ message: 'Carrito eliminado' })
	},
	addProductToCart: (req: Request, res: Response) => {
		const productId = productManager.getById(parseInt(req.params.productId))
		const cart = cartManager.getById(parseInt(req.params.id))
		cartManager.update(cart.id, {
			id: cart.id,
			timestamp: cart.timestamp,
			products: [...cart.products, productId],
		})
		res.status(STATUSCODE.OK).json({ message: 'Producto agregado con exito' })
	},
	deleteProductFromCart: (req: Request, res: Response) => {
		const productId = parseInt(req.params.productId)
		const cart = cartManager.getById(parseInt(req.params.id))

		const cartFiltered = cart.products.filter((pro) => pro.id !== productId)
		cartManager.update(cart.id, {
			id: cart.id,
			timestamp: cart.timestamp,
			products: cartFiltered,
		})
		res.status(STATUSCODE.OK).json({ message: 'Producto eliminado con exito' })
	},
}
