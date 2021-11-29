import app from './app'
import * as constants from './utils/constants'

app.listen(constants.PORT, () => {
	console.log(`Server is running in ${constants.SERVER_URL}`)
})
