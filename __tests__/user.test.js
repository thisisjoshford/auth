const User = require('../lib/models/User');

describe('User Model', () => {

  it('hashes password', () => {
    const user = new User({
      username: 'joshford',
      password: 'superSecretPassword'
    });

    expect(user.toJSON().passwordHash).toEqual(expect.any(String));
    expect(user.toJSON().password).toBeUndefined();
  });

  it('creates a JWT', () => {
    const user = new User({
      username: 'joshford',
      password: 'superSecurePassword'
    });

    const token = user.authToken();
    expect(token).not.toBeUndefined();
  })
});

