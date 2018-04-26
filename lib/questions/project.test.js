const project = require('./project');

// ====

describe('Project Questions', () => {
  let validateSpy;
  let filterSpy;

  afterEach(() => {
    validateSpy = jest.spyOn(project[0], 'validate');
    filterSpy = jest.spyOn(project[1], 'filter');
  });

  test('Should have the length equal one.', () => {
    expect(project).toHaveLength(2);
  });

  test('Should call the filter method once with arguments.', () => {
    project[1].filter('front-end');

    expect(filterSpy).toHaveBeenCalled();
    expect(filterSpy).toHaveBeenCalledTimes(1);
    expect(filterSpy).toHaveBeenCalledWith('front-end');

    filterSpy.mockReset();
    filterSpy.mockRestore();
  });

  test('Should convert the value to lowercase.', () => {
    const value = project[1].filter('Front-End');
    expect(value).toEqual('front-end');

    const value2 = project[1].filter('Back-End');
    expect(value2).toEqual('back-end');
  });

  test('Should call the validate method once without arguments.', () => {
    project[0].validate('');

    expect(validateSpy).toHaveBeenCalled();
    expect(validateSpy).toHaveBeenCalledTimes(1);
    expect(validateSpy).toHaveBeenCalledWith('');

    validateSpy.mockReset();
    validateSpy.mockRestore();
  });

  test('Should call the validate method once with arguments.', () => {
    project[0].validate('project-name');

    expect(validateSpy).toHaveBeenCalled();
    expect(validateSpy).toHaveBeenCalledTimes(1);
    expect(validateSpy).toHaveBeenCalledWith('project-name');

    validateSpy.mockReset();
    validateSpy.mockRestore();
  });
});
