const inquirer = require('inquirer');

const projectQuestions = require('./questions/project');
const githubQuestions = require('./questions/github');

const frontQuestions = require('./questions/frontend');
const backQuestions = require('./questions/backend');

// ====

class Prompt {
    askProjectDetails() {
        return this.askQuestions(projectQuestions);
    }
    
    askFrontendFramework() {
        return this.askQuestions(frontQuestions);
    }
    
    askBackendFramework() {
        return this.askQuestions(backQuestions);
    }
    
    askGithubCredentials() {
        return this.askQuestions(githubQuestions);
    }

    askQuestions(questions) {
        return inquirer.prompt(questions);
    }
}

// ====

module.exports = Prompt;