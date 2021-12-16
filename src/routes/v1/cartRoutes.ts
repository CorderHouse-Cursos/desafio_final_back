import Router from 'express'
import indexController from '../../controllers/indexController'

const router = Router()

router.post('/', indexController.index)

export default router
