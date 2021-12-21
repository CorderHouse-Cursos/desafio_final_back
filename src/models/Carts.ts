import IData from './Data'
import { IProducts } from './Products'

export interface ICarts extends IData {
	timestamp: Date
	products: IProducts[]
}
