import multer from 'multer'
import path from 'path'

type DestinationCallback = (error: Error | null, destination: string) => void
type FileNameCallback = (error: Error | null, filename: string) => void

const storage: multer.StorageEngine = multer.diskStorage({
	destination: (req, file, callback: DestinationCallback) => {
		callback(null, path.join(__dirname, '../public/uploads'))
	},
	filename: (req, file, callback: FileNameCallback) => {
		if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
			callback(
				null,
				file.fieldname +
					'-' +
					Date.now() +
					'.' +
					file.originalname.split('.')[file.originalname.split('.').length - 1]
			)
		} else {
			callback(new Error('El archivo debe ser una imagen'), '')
		}
	},
})

export default storage
