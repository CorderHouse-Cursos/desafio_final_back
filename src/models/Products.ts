import IData from './Data'
export interface IProducts extends IData {
	timestamp: Date
	nombre: string
	descripcion: string
	codigo: string
	foto: string
	precio: number
	stock: number
}
