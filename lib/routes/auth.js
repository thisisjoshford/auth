const { Router } = require('express');
const User = require('../models/User');

module.exports = Router ()
  .post('/signup', (req, res, next) => {
    //create a new user, JWT and send both
    User
      .create(req.body)
      .then(user => {
        //make that JWT!
        const token = user.authToken();
        //now send it!
        
        res.send(user);
      })
      .catch(next);
  

  })

  .post('/login', (req, res, next) => {
    //check users username/password (auth) => create JWT and send user & JWT

  })

  .get('verify', (req, res, next) => {
    // send the user is the person is logged in or send error if they are not
  });
