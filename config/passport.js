var mongoose        = require('mongoose'),
    User            = mongoose.model('User'),
    LocalStrategy   = require('passport-local').Strategy;


module.exports = function(app, config) {
  var passport = app.get('passport');
  passport.use(new LocalStrategy({
      usernameField: 'email'
    },
    function(username, password, done) {
      User.findOne({ email: username }, function(err, user) {
        console.log(user);
        if (err) { return done(err); }
        if (!user) {
          return done(null, false, { message: 'Incorrect username.' });
        }
        if (user.password !== password) {
          return done(null, false, { message: 'Incorrect password.' });
        }
        return done(null, user);
      });
    }
  ));

  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });
};
