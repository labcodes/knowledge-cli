const PromptClass = require('./prompt');

// ====

jest.mock('./prompt');

// ====

describe('Prompt', () => {
  let prompt;

  afterEach(() => {
    prompt = new PromptClass();
  });

  beforeEach(() => {
    PromptClass.mockClear();
  });

  test('Should call the constructor once.', () => {
    const prompt = new PromptClass();
    expect(PromptClass).toHaveBeenCalledTimes(1);
  });

  test('Should call the askProjectDetails once.', () => {
    prompt.askProjectDetails();

    expect(prompt.askProjectDetails).toHaveBeenCalled();
    expect(prompt.askProjectDetails).toHaveBeenCalledTimes(1);
  });

  test('Should call the askFrontendFramework once.', () => {
    prompt.askFrontendFramework();

    expect(prompt.askFrontendFramework).toHaveBeenCalled();
    expect(prompt.askFrontendFramework).toHaveBeenCalledTimes(1);
  });

  test('Should call the askBackendFramework once.', () => {
    prompt.askBackendFramework();

    expect(prompt.askBackendFramework).toHaveBeenCalled();
    expect(prompt.askBackendFramework).toHaveBeenCalledTimes(1);
  });

  test('Should call the askGithubCredentials once.', () => {
    prompt.askGithubCredentials();

    expect(prompt.askGithubCredentials).toHaveBeenCalled();
    expect(prompt.askGithubCredentials).toHaveBeenCalledTimes(1);
  });
});
