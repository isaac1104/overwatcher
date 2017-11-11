const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const passport = require("passport");

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(express.static("client/public"));

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});

//Bnet authentication

let BnetStrategy = require('passport-bnet').Strategy;
let BNET_ID = process.env.BNET_ID
let BNET_SECRET = process.env.BNET_SECRET

passport.use(new BnetStrategy({
    clientID: "isaac1104",
    clientSecret: "HSFVJdwUFCjvtCbq6wCJBrzKTz9Kyd4n",
    callbackURL: "https://localhost:3000/auth/bnet/callback",
    region: "us"
}, function(accessToken, refreshToken, profile, done) {
    return done(null, profile);
}));

app.get('/auth/bnet', passport.authenticate('bnet'));

app.get('/auth/bnet/callback', passport.authenticate('bnet', {failureRedirect: '/'}), function(req, res) {
  res.redirect('/');
});
