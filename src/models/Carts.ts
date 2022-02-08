import IData from './Data'
import { IProduct } from './Products'
import mongoose, { Schema } from 'mongoose'

export interface ICart extends IData {
	timestamp: Date
	products: IProduct[]
}

const CartsSchema = new Schema({
	timestamp: {
		type: Date,
		default: Date.now,
	},
	products: {
		type: [
			{
				type: Object,
			},
		],
		required: true,
	},
})

CartsSchema.set('toJSON', {
	transform: function (doc, ret, options) {
		ret.id = ret._id
		delete ret._id
		delete ret.__v
	},
})
export const CartsModel = mongoose.model<ICart>('Carts', CartsSchema)
