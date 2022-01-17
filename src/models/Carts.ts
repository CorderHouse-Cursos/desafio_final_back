import IData from './Data'
import { IProducts } from './Products'
import mongoose, { Schema } from 'mongoose'

export interface ICarts extends IData {
	timestamp: Date
	products: IProducts[]
}

const CartsSchema = new Schema({
	timestamp: {
		type: Date,
		default: Date.now,
	},
	products: {
		type: [
			{
				type: Array,
			},
		],
		required: true,
	},
})

export const CartsModel = mongoose.model<ICarts>('Carts', CartsSchema)
