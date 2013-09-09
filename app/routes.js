var passport      = require('passport'),
    signup        = require('../config/signup');

module.exports = function(app, config) {
  // Setup API blockade
  app.all('/api/*', function(req, res, next) {
    // passport gives us a 'isAuthenticated' method
    // we'll check this method
    if (req.isAuthenticated()) return next();

    return res.send(401, 'Unauthorized');
  });

  // Auth
  app.post('/login',
      passport.authenticate('local', { successRedirect: '#/',
                                       failureRedirect: '#/login'})
  );

  app.post('/signup', function(req, res) {
    signup(req,res);
  });

  app.get('/api/news', function(req, res, next) {
    // res.send('../api/news');
  });

  app.get('/api/rate', function(req, res, next) {
    // Implement news rating
  });
};

// curl -X POST -d "email=ruben&password=pass" http://localhost:3000/login