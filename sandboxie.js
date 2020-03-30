const User = require('./lib/models/User');

const user = new User({
  username: 'J0shF0rd',
  password: 'sup3rs3cr3t'
});

console.log(user);