const User = require('../models/User');

module.exports = (req, res, next) => {
  // read the session cookie
  // check the JWT and set user if valid or send an error if not
  const token = req.cookies.session;

  User
    .findByToken(token)
    .then(user => {
      // set user if the JWT is legit
      req.user = user;
    })
    .catch(next);

};
