//errorHandler middleware
// Language: typescript
import { Request, Response, NextFunction } from 'express'

export const errorHandler = (
	err: any,
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const status = err.status || 500
	const message = err.message || 'Internal server error'
	const error = {
		message: message,
		status: status,
	}
	res.status(status).json(error)
}
