const inquirer = require('inquirer');

const files = require('./files');

const projectQuestions = require('./questions/project');
const githubQuestions = require('./questions/github');

const frontFrameworkQuestions = require('./questions/frontend-framework');
const backFrameworkQuestions = require('./questions/backend-framework');

const frontStackQuestions = require('./questions/frontend-stack');
// const backFrameworkQuestions = require('./questions/backend-framework');

// ====

module.exports = {
    askProjectDetails:() => {
        return inquirer.prompt(projectQuestions);
    },
    
    askFrontendFramework:() => {
        return inquirer.prompt(frontFrameworkQuestions);
    },
    
    askFrontendStack:() => {
        return inquirer.prompt(frontStackQuestions);
    },
    
    askBackendFramework:() => {
        return inquirer.prompt(backFrameworkQuestions);
    },

    askGithubCredentials:() => {        
        return inquirer.prompt(githubQuestions);
    }
};