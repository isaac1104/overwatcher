const express = require("express");
const cookieSession = require("cookie-session");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const PORT = process.env.PORT || 5000;
const keys = require('./config/keys');
require("./models/user");
require("./services/passport");
// Connect to the Mongo DB
mongoose.Promise = global.Promise;
mongoose.connect(keys.mongodbURI);

const app = express();
//Passport

// Configure body parser for AJAX requests
app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  const path = require("path");
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
