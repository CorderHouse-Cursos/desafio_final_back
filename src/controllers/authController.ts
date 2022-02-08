import { NextFunction, Request, Response } from 'express'

import STATUSCODE from '../utils/statusCode'

export default {
	login: async (req: Request, res: Response, next: NextFunction) => {},
	register: async (req: Request, res: Response, next: NextFunction) => {},
	logout: async (req: Request, res: Response, next: NextFunction) => {},
}
