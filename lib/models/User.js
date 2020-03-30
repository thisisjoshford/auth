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

module.exports = mongoose.model ('User', userSchema)