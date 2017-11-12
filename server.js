const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 5000;
const app = express();
const cookieParser = require("cookie-parser");
const session = require("express-session");
const util = require("util");
require("./services/passport");

app.use(cookieParser());
app.use(session({secret: 'blizzard', saveUninitialized: true, resave: true}));

app.use(passport.initialize());
app.use(passport.session());
require("./routes/authRoutes")(app);

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(express.static("client/public"));

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
