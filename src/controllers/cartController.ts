import { NextFunction, Request, Response } from 'express'

import STATUSCODE from '../utils/statusCode'

import { CartsDao, ProductDao } from '../daos'

const cartManager = new CartsDao()
const productManager = new ProductDao()

export default {
	getProductsInCartById: async (
		req: Request,
		res: Response,
		next: NextFunction
	) => {
		try {
			const cart = await cartManager.getById(parseInt(req.params.id))
			console.log(cart)
			res.status(STATUSCODE.OK).json(cart)
		} catch (err) {
			console.log(err)
			next(err)
		}
	},
	createCart: async (req: Request, res: Response, next: NextFunction) => {
		try {
			const idCart = await cartManager.create({
				id: 1,
				timestamp: new Date(),
				products: [],
			})
			res
				.status(STATUSCODE.CREATED)
				.json({ message: 'Carrito creado', data: { id: idCart } })
		} catch (err) {
			console.log(err)
			next(err)
		}
	},

	deleteCart: async (req: Request, res: Response, next: NextFunction) => {
		try {
			cartManager.delete(parseInt(req.params.id))
			res.status(STATUSCODE.OK).json({ message: 'Carrito eliminado' })
		} catch (err) {
			next(err)
		}
	},
	addProductToCart: async (req: Request, res: Response, next: NextFunction) => {
		try {
			const { id, productId } = req.params
			const idProduct = await productManager.getById(parseInt(productId))
			console.log(idProduct)
			console.log(id)
			const cart = await cartManager.getById(id)
			console.log('PRODUCTOS', cart.products)
			await cartManager.update(cart.id, {
				id: cart.id,
				timestamp: cart.timestamp,
				products: [idProduct],
			})
			res.status(STATUSCODE.OK).json({ message: 'Producto agregado con exito' })
		} catch (err) {
			next(err)
		}
	},
	deleteProductFromCart: async (
		req: Request,
		res: Response,
		next: NextFunction
	) => {
		try {
			const productId = parseInt(req.params.productId)
			const cart = await cartManager.getById(parseInt(req.params.id))

			const cartFiltered = cart.products.filter((pro) => pro.id !== productId)
			cartManager.update(cart.id, {
				id: cart.id,
				timestamp: cart.timestamp,
				products: cartFiltered,
			})
			res
				.status(STATUSCODE.OK)
				.json({ message: 'Producto eliminado con exito' })
		} catch (err) {
			next(err)
		}
	},
}
