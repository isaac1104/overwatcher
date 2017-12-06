const passport = require("passport");
const BnetStrategy = require('passport-bnet').Strategy;
const BNET_ID = process.env.BNET_ID || "u99r2wbupxtcvr2hp2eds54cwhxdh25k";
const BNET_SECRET = process.env.BNET_SECRET || "HSFVJdwUFCjvtCbq6wCJBrzKTz9Kyd4n";
const mongoose = require("mongoose");
const User = mongoose.model("users");

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((obj, done) => {
  User.findById().then(user => {
    done(null, user);
  });
});

passport.use(
  new BnetStrategy(
    {
      clientID: BNET_ID,
      clientSecret: BNET_SECRET,
      callbackURL: "https://powerful-wildwood-93073.herokuapp.com/auth/bnet/callback",
      proxy: true
    },
    async(accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ bnetId: profile.id, battletag: profile.battletag });
      if (existingUser) {
        return done(null, existingUser);
      }
      const user = await new User({ bnetId: profile.id, battletag: profile.battletag }).save();
      done(null, user);
      console.log(profile);
      console.log(user);
    }
  )
);
