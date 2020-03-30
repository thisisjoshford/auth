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

//statics are used when something needs to be done BEFORE a user exists
//methods work on things that already exist

userSchema.statics.authorize = function({ username, password}) {
  // check that a user exists w/ username and that the password matches... if both conditions are true return user otherwise error
};

userSchema.statics.findByToken = function(token) {
  // take a token and return a user who owns said token
};

userSchema.methods.authToken = function(){
  // user JWT to create a token for user and return it
};

module.exports = mongoose.model ('User', userSchema)