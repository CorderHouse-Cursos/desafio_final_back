import Router, { Request, Response } from 'express'
import getIsAdmin from '../../utils/getIsAdmin'
const router = Router()

router.get('/', (req: Request, res: Response) => {
	res.json({ admin: getIsAdmin() })
})

export default router
