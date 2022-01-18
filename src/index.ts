import app from './app'
import { PORT, SERVER_URL } from './utils/constants'



app.listen(PORT, () => {
	console.log(`Server is running in ${SERVER_URL}`)
})
