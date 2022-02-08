import { NextFunction, Request, Response } from 'express'
import { IProduct } from '../models/Products'

import { ProductsService } from '../services'
import STATUSCODE from '../utils/statusCode'
import * as constants from '../utils/constants'

const productService = new ProductsService()
export default {
	getAll: async (req: Request, res: Response, next: NextFunction) => {
		try {
			const products = await productService.getAll()

			res.status(STATUSCODE.OK).json(products)
		} catch (err) {
			console.log(err)
			next(err)
		}
	},
	getById: async (req: Request, res: Response, next: NextFunction) => {
		try {
			const product = await productService.getById(req.params.id)
			res.status(STATUSCODE.OK).json(product)
		} catch (err) {
			next(err)
		}
	},
	create: async (req: Request, res: Response, next: NextFunction) => {
		try {
			const product = req.body as IProduct
			const photo = req.files as Express.Multer.File[]
			const path = `${constants.SERVER_URL}/uploads/${photo[0].filename}`
			product.foto = path
			product.timestamp = new Date()
			await productService.create(product)
			res
				.status(STATUSCODE.CREATED)
				.json({ message: 'Producto creado', product })
		} catch (err) {
			next(err)
		}
	},
	update: async (req: Request, res: Response, next: NextFunction) => {
		try {
			const product = req.body as IProduct
			const photo = req.files as Express.Multer.File[]
			const path = `${constants.SERVER_URL}/uploads/${photo[0].filename}`

			product.foto = path
			await productService.update(parseInt(req.params.id), product)
			res
				.status(STATUSCODE.OK)
				.json({ message: 'Producto actualizado', product })
		} catch (err) {
			next(err)
		}
	},
	delete: async (req: Request, res: Response, next: NextFunction) => {
		try {
			await productService.delete(parseInt(req.params.id))
			res.status(STATUSCODE.OK).json({ message: 'Producto eliminado' })
		} catch (err) {
			next
		}
	},
}
