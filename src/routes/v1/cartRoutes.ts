import Router from 'express'
import cartController from '../../controllers/cartController'
import * as validation from '../../middlewares/validation'
const router = Router()

router.post('/', cartController.createCart)
router.delete('/:id', validation.idCartValidate, cartController.deleteCart)
router.get(
	'/:id/productos',
	validation.idCartValidate,
	cartController.getProductsInCartById
)
router.post(
	'/:id/productos/:productId',
	[validation.idCartValidate, validation.idCartProductsAddValidate],
	cartController.addProductToCart
)
router.delete(
	'/:id/productos/:productId',
	[validation.idCartValidate, validation.idCartProductsAddValidate],
	cartController.deleteProductFromCart
)

export default router
