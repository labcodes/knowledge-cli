const frontend = require('./frontend');

// ====

describe('Frontend Questions', () => {
  let validateSpy;

  afterEach(() => {
    validateSpy = jest.spyOn(frontend[0], 'validate');
  });

  beforeEach(() => {
    validateSpy.mockReset();
    validateSpy.mockRestore();
  });

  test('Should have the length equal one.', () => {
    expect(frontend).toHaveLength(1);
  });

  test('Should convert the value to lowercase.', () => {
    const value = frontend[0].filter('REACT');
    expect(value).toEqual('react');

    const value2 = frontend[0].filter('Vue');
    expect(value2).toEqual('vue');

    const value3 = frontend[0].filter('AngularJS');
    expect(value3).toEqual('angularjs');
  });

  test('Should call the validate method once without arguments.', () => {
    frontend[0].validate('');

    expect(validateSpy).toHaveBeenCalled();
    expect(validateSpy).toHaveBeenCalledTimes(1);
    expect(validateSpy).toHaveBeenCalledWith('');
  });

  test('Should call the validate method once with arguments.', () => {
    frontend[0].validate('React');

    expect(validateSpy).toHaveBeenCalled();
    expect(validateSpy).toHaveBeenCalledTimes(1);
    expect(validateSpy).toHaveBeenCalledWith('React');
  });

  test('Should call the validate method with more than one argument.', () => {
    frontend[0].validate(['React', 'Angular', 'Vue']);

    expect(validateSpy).toHaveBeenCalled();
    expect(validateSpy).toHaveBeenCalledTimes(1);
    expect(validateSpy).toHaveBeenCalledWith(['React', 'Angular', 'Vue']);
  });
});
