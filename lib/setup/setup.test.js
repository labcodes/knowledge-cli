const SetupClass = require('./index');

// ====

jest.mock('./index');

// ====

describe('Setup', () => {
  test('Should works!', () => {
    expect(SetupClass).toBeTruthy();
  });
});
