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
			const cart = await cartManager.getById(req.params.id)
			
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
			cartManager.delete(req.params.id)
			res.status(STATUSCODE.OK).json({ message: 'Carrito eliminado' })
		} catch (err) {
			next(err)
		}
	},
	addProductToCart: async (req: Request, res: Response, next: NextFunction) => {
		try {
			const { id, productId } = req.params
			const product = await productManager.getById(productId)
			const cart = await cartManager.getById(id)
			
			await cartManager.update(cart.id, {
				id: cart.id,
				timestamp: cart.timestamp,
				products: cart.products.length > 0 ? [...cart.products,product] : [product],
			})
		
			return res.status(STATUSCODE.OK).json({message:'Producto agregado con exito'})
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
			const cart = await cartManager.getById(req.params.id)
			
			const cartFiltered = cart.products.filter((pro) => {
			
				if(pro.id){
					return pro.id !== productId
				}else{
					
					return pro._id?.toString() !== productId
				}
				
			})
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
