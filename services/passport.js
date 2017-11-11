const passport = require("passport")
const BnetStrategy = require('passport-bnet').Strategy;
const BNET_ID = "u99r2wbupxtcvr2hp2eds54cwhxdh25k"
const BNET_SECRET = "HSFVJdwUFCjvtCbq6wCJBrzKTz9Kyd4n"

// Use the BnetStrategy within Passport.
passport.use(new BnetStrategy({
  clientID: BNET_ID,
  clientSecret: BNET_SECRET,
  callbackURL: "/auth/bnet/callback"
}, function(accessToken, refreshToken, profile, done) {
  return done(null, profile);
}));
