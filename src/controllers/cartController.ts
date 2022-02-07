import { NextFunction, Request, Response } from 'express'

import STATUSCODE from '../utils/statusCode'

import { ProductsService, CartsService } from '../services'

const cartService = new CartsService()
const productService = new ProductsService()

export default {
	getProductsInCartById: async (
		req: Request,
		res: Response,
		next: NextFunction
	) => {
		try {
			const cart = await cartService.getById(req.params.id)

			res.status(STATUSCODE.OK).json(cart)
		} catch (err) {
			console.log(err)
			next(err)
		}
	},
	createCart: async (req: Request, res: Response, next: NextFunction) => {
		try {
			const idCart = await cartService.create({
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
			cartService.delete(req.params.id)
			res.status(STATUSCODE.OK).json({ message: 'Carrito eliminado' })
		} catch (err) {
			next(err)
		}
	},
	addProductToCart: async (req: Request, res: Response, next: NextFunction) => {
		try {
			const { id, productId } = req.params
			const product = await productService.getById(productId)
			const cart = await cartService.getById(id)

			await cartService.update(cart.id, {
				id: cart.id,
				timestamp: cart.timestamp,
				products:
					cart.products.length > 0 ? [...cart.products, product] : [product],
			})

			return res
				.status(STATUSCODE.OK)
				.json({ message: 'Producto agregado con exito' })
		} catch (err) {
			console.log(err)
			next(err)
		}
	},
	deleteProductFromCart: async (
		req: Request,
		res: Response,
		next: NextFunction
	) => {
		try {
			const productId = req.params.productId
			const cart = await cartService.getById(req.params.id)

			const cartFiltered = cart.products.filter((pro) => {
				if (pro.id) {
					return pro.id !== productId
				} else {
					return pro._id?.toString() !== productId
				}
			})
			cartService.update(cart.id, {
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
