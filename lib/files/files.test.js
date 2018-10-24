const FilesClass = require('./index');

// ====

const mockDirectoryExists = jest.fn().mockImplementation(() => ({}));

const mockCreatePath = jest.fn().mockImplementation(() => ({}));

jest.mock('./index', () => (
  jest.fn().mockImplementation(() => ({
    getCurrentDirectoryBase: () => '/usr/path/file.js',
    directoryExists: () => mockDirectoryExists(),
    createPath: () => mockCreatePath(),
  }))
));

// ====

describe('Files', () => {
  beforeEach(() => {
    FilesClass.mockClear();
  });

  test('Should call getCurrentDirectoryBase once.', () => {
    const files = new FilesClass();
    files.getCurrentDirectoryBase();

    expect(FilesClass).toHaveBeenCalled();
    expect(FilesClass).toHaveBeenCalledTimes(1);
  });

  test('Should return the pathname from getCurrentDirectoryBase.', () => {
    const files = new FilesClass();
    const dir = files.getCurrentDirectoryBase();

    expect(dir).toBe('/usr/path/file.js');
  });

  test('Should call directoryExists once.', () => {
    const files = new FilesClass();
    files.directoryExists();

    expect(FilesClass).toHaveBeenCalled();
    expect(FilesClass).toHaveBeenCalledTimes(1);
  });

  test('Should call createPath once.', () => {
    const files = new FilesClass();
    files.createPath();

    expect(FilesClass).toHaveBeenCalled();
    expect(FilesClass).toHaveBeenCalledTimes(1);
  });
});
