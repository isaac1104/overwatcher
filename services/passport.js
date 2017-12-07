const passport = require("passport");
const BnetStrategy = require('passport-bnet').Strategy;
const keys = require("./../config/keys");
const mongoose = require("mongoose");
const User = mongoose.model("users");

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new BnetStrategy(
    {
      clientID: keys.bnetClientId,
      clientSecret: keys.bnetClientSecret,
      callbackURL: "https://powerful-wildwood-93073.herokuapp.com/auth/bnet/callback",
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ bnetId: profile.id, battletag: profile.battletag });
      if (existingUser) {
        return done(null, existingUser);
      }
      const user = await new User({ bnetId: profile.id, battletag: profile.battletag }).save();
      done(null, user);
    }
  )
);
