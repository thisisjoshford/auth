const mongoose = require('mongoose');
const { hashSync } = require('bcryptjs');
const { sign } = require('jsonwebtoken');
require('dotenv').config();

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

// virtuals are used so we dont save a plain text pw in database
userSchema.virtual('password').set(function(password){
  // has the password w/ bcrypt and then set this.passwordHash to the newly hashed pw
  const hash = hashSync(password, 4);
  this.passwordHash = hash;
});

//statics are used when something needs to be done BEFORE a user exists
//methods work on things that already exist

// for login
userSchema.statics.authorize = function({ username, password }) {
  // check that a user exists w/ username and that the password matches... if both conditions are true return user otherwise error
};

// ensure auth middleware
userSchema.statics.findByToken = function(token) {
  // take a token and return a user who owns said token
};

// for sign up and login
userSchema.methods.authToken = function(){
  // user JWT to create a token for user and return it
  //moved this.toJSON() from the payload: value so we can remove the pw hash
  const jsonCreatedUser = this.toJSON();
  delete jsonCreatedUser.passwordHash;
  const token = sign({ payload: jsonCreatedUser }, process.env.APP_SECRET);
  return token;
};

module.exports = mongoose.model ('User', userSchema);
