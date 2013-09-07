var mongoose        = require('mongoose'),
// db = mongoose.createConnection('mongodb://localhost/myapp-dev'),
User = mongoose.model('User');

module.exports = function(app, config, req, res) {
  // User.find({}, function(err, data) {
  //   if(err) throw err;
  //   console.log(data);
  // });
  User.find({email: req.body.email}, function(err, data) {
    // console.log(data);
    if(data.length === 0){
      console.log('first email');
      var newUser = new User({email: req.body.email, password: req.body.password});
      newUser.save();
      res.send();
    } else {
      console.log('second email', data);
      res.redirect('/signup');
    }
  });
};
