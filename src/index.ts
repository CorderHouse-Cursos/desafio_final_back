import { PORT, SERVER_URL } from './utils/constants'
import initDatabase from './config/database'
initDatabase()

import app from './app'

app.listen(PORT, () => {
	console.log(`Server is running in ${SERVER_URL}`)
})
