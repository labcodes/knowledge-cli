#!/usr/bin/env node

const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const argv = require('minimist')(process.argv.slice(2));

const files = require('./lib/files');
const inquirer = require('./lib/inquirer');

const setup = require('./lib/setup');

// ====

const welcomeScreen = () => {
    clear();

    console.log(
        chalk.yellow(
            figlet.textSync('Labcodes', { horizontalLayout: 'full' })
        )
    );
};

const getProjectDetails = async () => {
    const projectDetails = await inquirer.askProjectDetails();

    if (projectDetails.projectType === 'front-end') {
        const jsFramework = await inquirer.askFrontendFramework();
        getFrontendStack(Object.values(jsFramework).toString(), projectDetails.projectName);
    } else {
        const backendStack = await inquirer.askBackendFramework();
        setup.backendEnv(backendStack);
    }
};

const getFrontendStack = async (framework, projectName) => {
    let stack = null;
    let addons = null;

    if (framework === 'vuejs') {
        // const jsStack = await inquirer.askFrontendStack();
        // stack = Object.values(jsStack).toString().split(',');
    } else if (framework === 'angular') {
        // const jsStack = await inquirer.askFrontendStack();
        // stack = Object.values(jsStack).toString().split(',');
    } else {
        const jsStack = await inquirer.askFrontendStack();
        stack = Object.values(jsStack.stack).toString().split(',');
        addons = Object.values(jsStack.addons).toString().split(',');
    }

    setup.frontendEnv({ framework, stack, addons, projectName });
};

const startEmptyRepo = () => {
    if (!hasAGitDirectory()) {
        setup.initRepo(projectDetails.projectName);
    } else {
        console.log(
            chalk.red('Already a git repository!')
        )
    }
}

const hasAGitDirectory = () => {
    if (files.directoryExists('.git')) {
        return true;
    } else {
        return false;
    }
};

const setupNewMember = () => {
    console.warn('Setup a new member!');
};

const displayTeamInformation = () => {
    console.warn('Display team information!');
};

const displayCompanyProjects = () => {
    console.warn('Display company projects!');
};

const displayCompanyAbout = () => {
    console.warn('Display text about the company!');
};

// ====

const getCommands = (argv) => {
    if (argv === 'start-project') {
        getProjectDetails();
    } else if (argv === 'new-member') {
        setupNewMember();
    } else if (argv === 'team') {
        displayTeamInformation();
    } else if (argv === 'list-projects') {
        displayCompanyProjects();
    } else {
        displayCompanyAbout();
    }
};

// ====

const run = async () => {
    welcomeScreen();

    if (argv._ && argv._.length > 0) {
        getCommands(argv._[1]);
    }
};

run();