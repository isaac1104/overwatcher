const express = require("express");
const cookieSession = require("cookie-session");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const cookieKey = process.env.COOKIE_KEY || "abcedfg";
const routes = require("./routes");
require("./models/user");
const User = mongoose.model("users");

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
app.get("/auth/bnet", passport.authenticate("bnet"));
app.get("/auth/bnet/callback", passport.authenticate("bnet", {failureRedirect: "/"}),
 function(req, res) {
  res.redirect("/user/search");
});

app.get("/api/current_user", (req, res, next) => {
  res.json(req.user);
});

app.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

app.post("/api/favorite", (req, res) => {
  User.update({ "bnetId": req.user.bnetId }, { $push: { favPlayer: "test" }});
  res.json(User);
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
