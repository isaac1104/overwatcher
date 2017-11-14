const express = require("express");
const path = require("path");
const app = express();
const cookieSession = require("cookie-session");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const routes = require("./routes");
const passport = require("passport");
const PORT = process.env.PORT || 5000;
const cookieKey = process.env.COOKIE_KEY;
require("./services/passport");
require("./routes/authRoutes")(app);

// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/overwatch", {useMongoClient: true});

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Passport
app.use(passport.initialize());
app.use(passport.session());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [cookieKey]
  })
);

app.use(routes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}



app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
