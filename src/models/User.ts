import IData from './Data'

export interface IUser extends IData {
	email: string
	password: string
	name: string
	lastname: string
	phone: string
	address: string
	city: string
	photo: string
}

const UserSchema = new Schema({
	email: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	name: {
		type: String,
		required: true,
	},
	lastname: {
		type: String,
		required: true,
	},
	phone: {
		type: String,
		required: true,
	},
	address: {
		type: String,
		required: true,
	},
	city: {
		type: String,
		required: true,
	},
	photo: {
		type: String,
		required: true,
	},
})
