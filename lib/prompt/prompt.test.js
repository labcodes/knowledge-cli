const PromptClass = require('./index');

// ====

jest.mock('./index');

// ====

describe('Prompt', () => {
  beforeEach(() => {
    PromptClass.mockClear();
  });

  test('Should call the askProjectDetails once.', () => {
    const prompt = new PromptClass();
    prompt.askProjectDetails();

    expect(prompt.askProjectDetails).toHaveBeenCalled();
    expect(prompt.askProjectDetails).toHaveBeenCalledTimes(1);
  });

  test('Should call the askFrontendFramework once.', () => {
    const prompt = new PromptClass();
    prompt.askFrontendFramework();

    expect(prompt.askFrontendFramework).toHaveBeenCalled();
    expect(prompt.askFrontendFramework).toHaveBeenCalledTimes(1);
  });

  test('Should call the askBackendFramework once.', () => {
    const prompt = new PromptClass();
    prompt.askBackendFramework();

    expect(prompt.askBackendFramework).toHaveBeenCalled();
    expect(prompt.askBackendFramework).toHaveBeenCalledTimes(1);
  });

  test('Should call the askGithubCredentials once.', () => {
    const prompt = new PromptClass();
    prompt.askGithubCredentials();

    expect(prompt.askGithubCredentials).toHaveBeenCalled();
    expect(prompt.askGithubCredentials).toHaveBeenCalledTimes(1);
  });
});
