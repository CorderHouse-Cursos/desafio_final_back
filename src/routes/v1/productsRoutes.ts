import Router from 'express'
import productsController from '../../controllers/productsController'
import * as validation from '../../middlewares/validation'
import isAdmin from '../../middlewares/isAdmin'
import multer from 'multer'
import storage from '../../config/multer'

const router = Router()

router.get('/', productsController.getAll)
router.get('/:id', validation.idValidate, productsController.getById)
router.post(
	'/',
	[
		isAdmin,
		multer({
			storage,
		}).any(),
		validation.productValidate,
	],
	productsController.create
)
router.put(
	'/:id',
	[
		isAdmin,
		validation.idValidate,
		multer({
			storage,
		}).any(),
	],
	productsController.update
)
router.delete(
	'/:id',
	[isAdmin, validation.idValidate],
	productsController.delete
)

export default router
