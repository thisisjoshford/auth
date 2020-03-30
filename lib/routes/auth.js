const { Router } = require('express');

module.exports = Router ()
  .post('/signup', (req, res, next) => {
    //create a new user, JWT and send both

  })

  .post('/login', (req, res, next) => {
    //check users username/password (auth) => create JWT and send user & JWT

  })

  .get('verify', (req, res, next) => {
    // send the user is the person is logged in or send error if they are not
  });
