const chalk = require('chalk');

const PromptQuestions = require('../../prompt');
const SetupEnv = require('../../setup');
const LocalFiles = require('../../files');

const setup = new SetupEnv();
const questions = new PromptQuestions();
const files = new LocalFiles();

// ====

const hasAGitDirectory = () => {
  if (files.directoryExists('.git')) {
    return true;
  }

  return false;
};

const hasDirectory = (dirName) => {
  if (files.directoryExists(dirName)) {
    return true;
  }

  return false;
};

const displayLog = (msg, logType) => {
  if (logType === 'success') {
    console.log(chalk.green(msg));
  } else {
    console.log(chalk.red(msg));
  }
};

const createFolder = (projectName) => {
  const isDirectory = hasDirectory(projectName);
  const isGitDirectory = hasAGitDirectory();

  if (!isDirectory) {
    displayLog('Não existe diretório com esse nome!', 'error');
    files.createPath(projectName);
    // setup.initRepo(projectName);
  }

  if (!isGitDirectory) {
    displayLog('Iniciando um repositório Git!', 'success');
    // setup.initRepo(projectName);
  }
};

const getFrontendStack = async (framework, projectName) => {
  createFolder(projectName);

  if (framework === 'react') {
    setup.react(projectName);
  }
};

const getBackendStack = async (framework, projectName) => {
  startEmptyRepo(projectName);

  if (framework === 'django') {
    setup.django();
  } else {
    setup.nodejs();
  }
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
