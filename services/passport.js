const passport = require("passport");
const BnetStrategy = require('passport-bnet').Strategy;
const BNET_ID = "u99r2wbupxtcvr2hp2eds54cwhxdh25k";
const BNET_SECRET = "HSFVJdwUFCjvtCbq6wCJBrzKTz9Kyd4n";

passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(obj, done) {
    done(null, obj);
});

passport.use(
  new BnetStrategy(
    { clientID: BNET_ID,
      clientSecret: BNET_SECRET,
      scope: "wow.profile sc2.profile",
      callbackURL: "https://localhost:5000/auth/bnet/callback" },
    function(accessToken, refreshToken, profile, done) {
      process.nextTick(function () {
        return done(null, profile);
      });
    })
);
