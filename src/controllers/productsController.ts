import { Request, Response } from 'express'
import { IProducts } from '../models/Products'
import DataManager from '../services/DataManager'
import STATUSCODE from '../utils/statusCode'
import * as constants from '../utils/constants'

const productManager = new DataManager<IProducts>('products')
productManager.getAll()
export default {
	getAll: (req: Request, res: Response) => {
		const products = productManager.getAll()
		res.status(STATUSCODE.OK).json(products)
	},
	getById: (req: Request, res: Response) => {
		const product = productManager.getById(parseInt(req.params.id))
		res.status(STATUSCODE.OK).json(product)
	},
	create: (req: Request, res: Response) => {
		const product = req.body as IProducts
		const photo = req.files as Express.Multer.File[]
		const path = `${constants.SERVER_URL}/uploads/${photo[0].filename}`
		product.foto = path
		product.timestamp = new Date()
		productManager.create(product)
		res.status(STATUSCODE.CREATED).json({ message: 'Producto creado', product })
	},
	update: (req: Request, res: Response) => {
		const product = req.body as IProducts
		const photo = req.files as Express.Multer.File[]
		const path = `${constants.SERVER_URL}/uploads/${photo[0].filename}`

		product.foto = path
		productManager.update(parseInt(req.params.id), product)
		res.status(STATUSCODE.OK).json({ message: 'Producto actualizado', product })
	},
	delete: (req: Request, res: Response) => {
		productManager.delete(parseInt(req.params.id))
		res.status(STATUSCODE.OK).json({ message: 'Producto eliminado' })
	},
}
