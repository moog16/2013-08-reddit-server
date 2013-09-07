var passport      = require('passport');

module.exports = function(app, config) {
  // Setup API blockade
  app.all('/api/*', function(req, res, next) {
    // passport gives us a 'isAuthenticated' method
    // we'll check this method
    if (req.isAuthenticated()) return next();

    return res.send(401, 'Unauthorized');
  });

  // Auth
  app.post('/login', function(req, res, next) {
    // console.log('got post request');
    // console.log('got data', req.body);
    console.log(passport.authenticate);
    passport.authenticate('local', function(err, data, info) {
      console.log("e", err, data, info);
    })(req, res, next);
  });

  app.post('/signup', function(req, res, next) {
    // if(getUserInfo() === false) {
    //   //username is take
    //   //redirect('/signup');
    // } else {
    //   //instantiate the user model
    //   //redirect(...login page)
    // }
  });

  app.get('/api/news', function(req, res, next) {
    // Implement news api
  });

  app.get('/api/rate', function(req, res, next) {
    // Implement news rating
  });
};

// curl -X POST -d "email=ruben&password=pass" http://localhost:3000/login