const passport = require("passport");

module.exports = app => {
  app.get('/auth/bnet', passport.authenticate('bnet'));

  app.get('/auth/bnet/callback', passport.authenticate('bnet', {failureRedirect: '/'}), function(req, res) {
    res.redirect('/log');
  });
}
