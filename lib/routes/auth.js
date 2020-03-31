const { Router } = require('express');
const User = require('../models/User');
const ensureAuth = require('../middleware/ensure-auth');

// one day in miliseconds (24hrs)
const one_day = 1000 * 60 * 60 * 24;

module.exports = Router ()
  .post('/signup', (req, res, next) => {
    //create a new user, JWT and send both
    User
      .create(req.body)
      .then(user => {
        //make that JWT!
        const token = user.authToken();
        //now send it!
        res.cookie('session', token, {
          maxAge: one_day,
          //only server will be able to see the token /
          httpOnly: true
        });
        res.send(user);
      })
      .catch(next);
  

  })

  .post('/login', (req, res, next) => {
    //check users username/password (auth) => create JWT and send user & JWT
    User
      .authorize(req.body)
      .then(user => {
        //make that JWT!
        const token = user.authToken();
        //add a cookie
        res.cookie('session', token, {
          maxAge: one_day,
          httpOnly: true
        });
        //send it!
        res.send(user);
      })
      .catch(next);

  })

  .get('/verify', ensureAuth, (req, res) => {
    // send the user is the person is logged in or send error if they are not
    res.send(req.user);

  });
