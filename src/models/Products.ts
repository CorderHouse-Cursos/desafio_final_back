import IData from './Data'
import mongoose, { Schema } from 'mongoose'

export interface IProducts extends IData {
	timestamp: Date
	nombre: string
	descripcion: string
	codigo: string
	foto: string
	precio: number
	stock: number
}

const ProductsSchema = new Schema({
	timestamp: {
		type: Date,
		default: Date.now,
	},
	nombre: {
		type: String,
		required: true,
	},
	descripcion: {
		type: String,
		required: true,
	},
	codigo: {
		type: String,
		required: true,
	},
	foto: {
		type: String,
		required: true,
	},
	precio: {
		type: Number,
		required: true,
	},
	stock: {
		type: Number,
		required: true,
	},
})
ProductsSchema.set('toJSON', {
	transform: function (doc, ret, options) {
		ret.id = ret._id
		delete ret._id
		delete ret.__v
	}
})
export const ProductosModel = mongoose.model<IProducts>(
	'Productos',
	ProductsSchema
)
