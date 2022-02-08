import dotenv from 'dotenv'
dotenv.config()

export const PORT = process.env.PORT || 3000
export const SERVER_URL = process.env.SERVER_URL || `http://localhost:${PORT}`
export const DATABASE_URL =
	process.env.DATABASE_URL ||
	'mongodb+srv://adminCoder:adminCoder@cluster0.urhvp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
export const MODELS = {
	PRODUCTS: 'Productos',
	CART: 'Carts',
}

export const DATABASE = process.env.DATABASE || 'mongo'
