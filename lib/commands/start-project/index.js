const chalk = require('chalk');

const PromptQuestions = require('../../prompt');
const SetupEnv = require('../../setup');
const LocalFiles = require('../../files');

const setup = new SetupEnv();
const questions = new PromptQuestions();
const files = new LocalFiles();

// ====

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

const getFrontendStack = async (framework, projectName) => {
    startEmptyRepo(projectName);

    if (framework === 'react') {
        setup.react();
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

const startEmptyRepo = (projectName) => {
    if (!hasAGitDirectory()) {
        setup.initRepo(projectName);
    } else {
        console.log(
            chalk.red('Already a git repository!')
        )
    }
};

const hasAGitDirectory = () => {
    if (files.directoryExists('.git')) {
        return true;
    } else {
        return false;
    }
};

// ====

const StartProject = () => {
    getProjectDetails();
};

// ====

module.exports = StartProject;