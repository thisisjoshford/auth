const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  passwordHash: {
    type: String,
    required: true
  }
});

userSchema.virtual('password').set(function(password){
  // has the password w/ bcrypt and then set this.passwordHash to the hash pw

});

userSchema.statics.authorize = function({ username, password}) {
  // check that a user exists w/ username and that the password matches... if both conditions are true return user otherwise error
};

module.exports = mongoose.model ('User', userSchema)