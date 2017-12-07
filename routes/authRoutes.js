const passport = require('passport');

module.exports = app => {
  app.get("/auth/bnet", passport.authenticate("bnet"));

  app.get("/auth/bnet/callback", passport.authenticate("bnet", { failureRedirect: "/" }), function (req, res) {
    res.redirect("/api/isAuth");
  });

  app.get("/api/isAuth", (req, res) => {
    console.log("reck: ", req.user.id);
    if(req.isAuthenticated()) {
      console.log("yes");
      res.redirect("/user/search");
    }
  } )
  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });

  app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/")
  });
}
