import { NextFunction, Request, Response } from 'express'
import { IProducts } from '../models/Products'

import { ProductDao } from '../daos'
import STATUSCODE from '../utils/statusCode'
import * as constants from '../utils/constants'

const productManager = new ProductDao()
export default {
	getAll: async (req: Request, res: Response, next: NextFunction) => {
		try {
			const products = await productManager.getAll()

			res.status(STATUSCODE.OK).json(products)
		} catch (err) {
			console.log(err)
			next(err)
		}
	},
	getById: async (req: Request, res: Response, next: NextFunction) => {
		try {
			const product = await productManager.getById(req.params.id)
			res.status(STATUSCODE.OK).json(product)
		} catch (err) {
			next(err)
		}
	},
	create: async (req: Request, res: Response, next: NextFunction) => {
		try {
			const product = req.body as IProducts
			const photo = req.files as Express.Multer.File[]
			const path = `${constants.SERVER_URL}/uploads/${photo[0].filename}`
			product.foto = path
			product.timestamp = new Date()
			await productManager.create(product)
			res
				.status(STATUSCODE.CREATED)
				.json({ message: 'Producto creado', product })
		} catch (err) {
			next(err)
		}
	},
	update: async (req: Request, res: Response, next: NextFunction) => {
		try {
			const product = req.body as IProducts
			const photo = req.files as Express.Multer.File[]
			const path = `${constants.SERVER_URL}/uploads/${photo[0].filename}`

			product.foto = path
			await productManager.update(parseInt(req.params.id), product)
			res
				.status(STATUSCODE.OK)
				.json({ message: 'Producto actualizado', product })
		} catch (err) {
			next(err)
		}
	},
	delete: async (req: Request, res: Response, next: NextFunction) => {
		try {
			await productManager.delete(parseInt(req.params.id))
			res.status(STATUSCODE.OK).json({ message: 'Producto eliminado' })
		} catch (err) {
			next
		}
	},
}
