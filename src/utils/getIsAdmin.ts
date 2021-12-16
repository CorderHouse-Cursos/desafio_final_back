import fs from 'fs'
import path from 'path'

export default function getIsAdmin(): boolean {
	const file = path.join(__dirname, '../data/data.json')

	if (fs.existsSync(file)) {
		return JSON.parse(fs.readFileSync(file, 'utf8')).isAdmin
	}
	return false
}
