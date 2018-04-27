const SetupClass = require('./index');

// ====

jest.mock('./index');

// ====

describe('Setup', () => {
  test('Should works!', () => {
    console.warn(SetupClass.mock);
  });
});
