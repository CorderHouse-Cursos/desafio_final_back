import passport from 'passport'
import { UserService } from '../services'
import { Strategy as LocalStrategy } from 'passport-local'

passport.use(
	new LocalStrategy(function (username, password, done) {
		const user = UserService.get
	})
)
