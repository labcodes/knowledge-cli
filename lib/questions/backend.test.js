const backend = require('./backend');

// ====

describe('Backend Questions', () => {
  let validateSpy;

  afterEach(() => {
    validateSpy = jest.spyOn(backend[0], 'validate');
  });

  test('Should have the length equal one.', () => {
    expect(backend).toHaveLength(1);
  });

  test('Should convert the value to lowercase.', () => {
    const value = backend[0].filter('NODEJS');
    expect(value).toEqual('nodejs');

    const value2 = backend[0].filter('Django');
    expect(value2).toEqual('django');
  });

  test('Should call the validate method once without arguments.', () => {
    backend[0].validate('');

    expect(validateSpy).toHaveBeenCalled();
    expect(validateSpy).toHaveBeenCalledTimes(1);
    expect(validateSpy).toHaveBeenCalledWith('');

    validateSpy.mockReset();
    validateSpy.mockRestore();
  });

  test('Should call the validate method once with arguments.', () => {
    backend[0].validate('Django');

    expect(validateSpy).toHaveBeenCalled();
    expect(validateSpy).toHaveBeenCalledTimes(1);
    expect(validateSpy).toHaveBeenCalledWith('Django');

    validateSpy.mockReset();
    validateSpy.mockRestore();
  });

  test('Should call the validate method with more than one argument.', () => {
    backend[0].validate(['Django', 'Nodejs']);

    expect(validateSpy).toHaveBeenCalled();
    expect(validateSpy).toHaveBeenCalledTimes(1);
    expect(validateSpy).toHaveBeenCalledWith(['Django', 'Nodejs']);

    validateSpy.mockReset();
    validateSpy.mockRestore();
  });
});
