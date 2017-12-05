const passport = require("passport");
const mongoose = require("mongoose");
const BnetStrategy = require('passport-bnet').Strategy;
const BNET_ID = process.env.BNET_ID || "u99r2wbupxtcvr2hp2eds54cwhxdh25k";
const BNET_SECRET = process.env.BNET_SECRET || "HSFVJdwUFCjvtCbq6wCJBrzKTz9Kyd4n";
const User = mongoose.model("User");

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(obj, done) {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(new BnetStrategy({
  clientID: BNET_ID,
  clientSecret: BNET_SECRET,
  callbackURL: "/auth/bnet/callback",
  proxy: true
}, async (accessToken, refreshToken, profile, done) => {
  const existingUser = await User.findOne({bnetId: profile.id});
  if (existingUser) {
    return done(null, existingUser);
  }
  const user = await new User({ bnetId: profile.id }).save();
  done(null, user);
}));
