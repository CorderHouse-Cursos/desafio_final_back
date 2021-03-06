import { NextFunction, Response, Request } from 'express'
import { CartsModel, ICarts } from '../models/Carts'
import { IProducts, ProductosModel } from '../models/Products'
import { initManager } from '../utils/manager'
import STATUSCODE from '../utils/statusCode'

const cartManager = initManager<ICarts>('carts', CartsModel)
const productManager = initManager<IProducts>('products', ProductosModel)

export const productValidate = (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const product = req.body as IProducts
	const photo = req.files as Express.Multer.File[]

	if (!product.nombre) {
		return res
			.status(STATUSCODE.BAD_REQUEST)
			.json({ message: 'El nombre es requerido' })
		return
	}
	if (!product.descripcion) {
		return res
			.status(STATUSCODE.BAD_REQUEST)
			.json({ message: 'La descripcion es requerida' })
		return
	}
	if (!product.codigo) {
		return res
			.status(STATUSCODE.BAD_REQUEST)
			.json({ message: 'El codigo es requerido' })
	}
	if (!product.precio) {
		return res
			.status(STATUSCODE.BAD_REQUEST)
			.json({ message: 'El precio es requerido' })
	}
	if (!product.stock) {
		return res
			.status(STATUSCODE.BAD_REQUEST)
			.json({ message: 'El stock es requerido' })
	}
	console.log(photo)
	if (photo.length === 0) {
		return res
			.status(STATUSCODE.BAD_REQUEST)
			.json({ message: 'La foto es requerida' })
	}

	if (photo[0].mimetype !== 'image/jpeg' && photo[0].mimetype !== 'image/png') {
		return res
			.status(STATUSCODE.BAD_REQUEST)
			.json({ message: 'El archivo debe ser una imagen' })
	}
	next()
}

export const idValidate = (req: Request, res: Response, next: NextFunction) => {
	if (!req.params.id && typeof req.params.id !== 'number') {
		return res.status(STATUSCODE.OK).json({ message: 'El id debe ser un número' })
	}

	next()
}

export const idProductValidate = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const pro = await productManager.getById(req.params.id)
		if(!pro) throw new Error()
		next()
	} catch (err) {
		return res
			.status(STATUSCODE.NOT_FOUND)
			.json({ message: 'No existe un producto con esa ID' })
	}

}

export const idCartValidate = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const cart = await cartManager.getById(req.params.id)
		if(!cart) throw new Error()
	} catch (err) {
		
		return res
			.status(STATUSCODE.NOT_FOUND)
			.json({ message: 'No existe un carrito con esa ID' })
		
	}

	next()
}
export const idCartProductsAddValidate = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	
	try {
		
		const pro = await productManager.getById(req.params.productId)
	
		if(!pro) throw new Error()
		
	} catch (err) {
		console.log(err)
		return res
			.status(STATUSCODE.NOT_FOUND)
			.json({ message: 'No existe un producto con ese Id' })
	}
	next()
}
