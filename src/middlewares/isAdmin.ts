import { Request, Response, NextFunction } from 'express'
import getIsAdmin from '../utils/getIsAdmin'

export default function isAdmin(
	req: Request,
	res: Response,
	next: NextFunction
) {
	if (getIsAdmin()) {
		next()
	} else {
		res
			.status(401)
			.json({ message: 'No tienes permisos para hacer esta peticion' })
	}
}
