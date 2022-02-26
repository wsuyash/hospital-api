const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const Doctor = require('../models/Doctor');

let opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.JWT_SECRET;

passport.use(new JwtStrategy(opts, async (jwt_payload, done) => {
	try {

		const doctor = await Doctor.findById(jwt_payload.id);

		if (doctor) {
			return done(null, doctor);
		} else {
			return done(null, false);
		}
		
	} catch (error) {
		return done(error);
	}
}));

module.exports = passport;