var mongoose        = require('mongoose'),
User = mongoose.model('User');

module.exports = function(req, res) {
  User.find({email: req.body.email}, function(err, data) {
    if(data.length === 0){
      var newUser = new User({email: req.body.email, password: req.body.password});
      newUser.save();
      res.send();
    } else {
      res.redirect('/signup');
    }
  });
};
