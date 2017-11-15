const express = require("express");
const cookieSession = require("cookie-session");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const cookieKey = process.env.COOKIE_KEY || "abcedfg";
const routes = require("./routes");

// Connect to the Mongo DB
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/overwatch", {useMongoClient: true});

//Passport
require("./services/passport");
const PORT = process.env.PORT || 5000;
const app = express();

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cookieSession({
  maxAge: 30 * 24 * 60 * 60 * 1000,
  keys: [cookieKey]
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(routes);
app.get('/auth/bnet', passport.authenticate('bnet'));
app.get('/auth/bnet/callback', passport.authenticate('bnet', {failureRedirect: '/'}), function(req, res) {
  res.redirect('/log');
});


app.get("/log", (req, res) => {
  res.jseon(req.user);
});

if (process.env.NODE_ENV === "production") {
  const path = require("path");
  app.use(express.static("client/build"));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
} else {
  app.use(express.static("client/public"));
}

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
