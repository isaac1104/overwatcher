const express = require("express");
const path = require("path");
const app = express();
const cookieParser = require("cookie-parser");
const session = require("express-session");
const util = require("util");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const routes = require("./routes");
const passport = require("passport");
const PORT = process.env.PORT || 5000;
require("./services/passport");

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(cookieParser());
app.use(session({secret: 'blizzard', saveUninitialized: true, resave: true}));

app.use(passport.initialize());
app.use(passport.session());
require("./routes/authRoutes")(app);

app.get("*", function(req, res) {
  if (process.env.NODE_ENV === "production") {
    res.sendFile(path.join(__dirname, "./client/build"));
  } else {
    res.sendFile(path.join(__dirname, "./client/public"));
  }
});

app.use(routes);

// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/overwatch", {useMongoClient: true});

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
