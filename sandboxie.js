const User = require('./lib/models/User');

const user = new User({
  username: 'j0shf0rd',
  password: 'sup3rs3cr3t'
});

console.log(user);

console.log(user.authToken());

