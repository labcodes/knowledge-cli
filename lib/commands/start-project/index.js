const PromptQuestions = require('../../prompt');
const SetupEnv = require('../../setup');
const LocalFiles = require('../../files');

const setup = new SetupEnv();
const questions = new PromptQuestions();
const files = new LocalFiles();

// ====

const hasDirectory = (dirName) => {
  if (files.directoryExists(dirName)) {
    return true;
  }

  return false;
};

const createFolder = (projectName) => {
  const isDirectory = hasDirectory(projectName);

  if (!isDirectory) {
    files.createPath(projectName);
  }
};

const setupGit = (projectName) => {
  setup.removeGitFolder(projectName);
  setup.initRepo(projectName);
};

const getFrontendStack = async (framework, projectName) => {
  createFolder(projectName);

  if (framework === 'react') {
    setup.react(projectName);
  }

  setupGit(projectName);
};

const getBackendStack = async (framework, projectName) => {
  createFolder(projectName);

  if (framework === 'django') {
    setup.django(projectName);
  } else {
    setup.nodejs(projectName);
  }

  setupGit(projectName);
};

const getProjectDetails = async () => {
  const projectDetails = await questions.askProjectDetails();

  if (projectDetails.projectType === 'front-end') {
    const jsFramework = await questions.askFrontendFramework();
    getFrontendStack(Object.values(jsFramework).toString(), projectDetails.projectName);
  } else {
    const backFramework = await questions.askBackendFramework();
    getBackendStack(Object.values(backFramework).toString(), projectDetails.projectName);
  }
};

// ====

const StartProject = () => {
  getProjectDetails();
};

// ====

module.exports = StartProject;
