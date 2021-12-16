import { NextFunction, Response, Request } from 'express'
import { IProducts } from '../models/Products'
import STATUSCODE from '../utils/statusCode'

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
		res.status(STATUSCODE.OK).json({ message: 'El id debe ser un número' })
	}
	next()
}
