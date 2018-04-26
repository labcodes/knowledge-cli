const github = require('./github');

// ====

describe('Github Questions', () => {
  let validateSpyFirst;
  let validateSpySecond;
  let validateSpyThird;

  afterEach(() => {
    validateSpyFirst = jest.spyOn(github[0], 'validate');
    validateSpySecond = jest.spyOn(github[1], 'validate');
    validateSpyThird = jest.spyOn(github[2], 'validate');
  });

  test('Should have the length equal three.', () => {
    expect(github).toHaveLength(3);
  });

  describe('Github Questions - 0', () => {
    test('Should call the validate method once without arguments.', () => {
      github[0].validate('');

      expect(validateSpyFirst).toHaveBeenCalled();
      expect(validateSpyFirst).toHaveBeenCalledTimes(1);
      expect(validateSpyFirst).toHaveBeenCalledWith('');

      validateSpyFirst.mockReset();
      validateSpyFirst.mockRestore();
    });

    test('Should call the validate method once with arguments.', () => {
      github[0].validate('username');

      expect(validateSpyFirst).toHaveBeenCalled();
      expect(validateSpyFirst).toHaveBeenCalledTimes(1);
      expect(validateSpyFirst).toHaveBeenCalledWith('username');

      validateSpyFirst.mockReset();
      validateSpyFirst.mockRestore();
    });
  });

  describe('Github Questions - 1', () => {
    test('Should call the validate method once without arguments.', () => {
      github[1].validate('');

      expect(validateSpySecond).toHaveBeenCalled();
      expect(validateSpySecond).toHaveBeenCalledTimes(1);
      expect(validateSpySecond).toHaveBeenCalledWith('');

      validateSpySecond.mockReset();
      validateSpySecond.mockRestore();
    });

    test('Should call the validate method once with arguments.', () => {
      github[1].validate('email');

      expect(validateSpySecond).toHaveBeenCalled();
      expect(validateSpySecond).toHaveBeenCalledTimes(1);
      expect(validateSpySecond).toHaveBeenCalledWith('email');

      validateSpySecond.mockReset();
      validateSpySecond.mockRestore();
    });
  });

  describe('Github Questions - 2', () => {
    test('Should call the validate method once without arguments.', () => {
      github[2].validate('');

      expect(validateSpyThird).toHaveBeenCalled();
      expect(validateSpyThird).toHaveBeenCalledTimes(1);
      expect(validateSpyThird).toHaveBeenCalledWith('');

      validateSpyThird.mockReset();
      validateSpyThird.mockRestore();
    });

    test('Should call the validate method once with arguments.', () => {
      github[2].validate('password');

      expect(validateSpyThird).toHaveBeenCalled();
      expect(validateSpyThird).toHaveBeenCalledTimes(1);
      expect(validateSpyThird).toHaveBeenCalledWith('password');

      validateSpyThird.mockReset();
      validateSpyThird.mockRestore();
    });
  });
});
