const Helpers = require('./index');

// ====

describe('Helpers', () => {
  let message = '';

  afterEach(() => {
    message = 'Please, you need to insert one value.';
  });

  test('Should return true if the length is equal one.', () => {
    const fields = Helpers.validateFields(['value'], null);
    expect(fields).toBe(true);
  });

  test('Should return true if the length is more than one.', () => {
    const fields = Helpers.validateFields(['value 01', 'value 02'], null);
    expect(fields).toBe(true);
  });

  test('Should return the message if the length is equal zero.', () => {
    const fields = Helpers.validateFields([], message);
    expect(fields).toBe(message);
  });

  test('Should return the message if the value is null.', () => {
    const fields = Helpers.validateFields(null, message);
    expect(fields).toBe(message);
  });

  test('Should return an empty string if nothing is passed.', () => {
    const fields = Helpers.validateFields();
    expect(fields).toBe('');
  });
});
