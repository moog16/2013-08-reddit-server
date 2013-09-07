var mongoose    = require('mongoose'),
    Schema      = mongoose.Schema;


module.exports = function(app, config) {
  var db = mongoose.connect(config.db);

  var UserSchema = new Schema({
    email: String,
    password: String
    // date: { type: Date, default: Date.now }
  });
  var User = mongoose.model( 'User', UserSchema );
  // var ruben = new User({email: 'ruben', password: 'pass'});
  // ruben.save();
  // User.find({}, function(err, data) {
  //   if(err) throw err;
  //   console.log(data);
  // });

  return db;
};
