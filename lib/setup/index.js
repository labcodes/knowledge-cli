const backend = require('./backend');
const frontend = require('./frontend');

const github = require('../github');

// ====

module.exports = {
    frontendEnv: ({ framework, stack, addons, projectName }) => {
        if (framework === 'vuejs') {
            frontend.useVue(stack, addons, projectName);
        } else if (framework === 'angular') {
            frontend.useAngular(stack, addons, projectName);
        } else {
            frontend.useReact(stack, addons, projectName);
        }
    },
    
    backendEnv: ({ backLanguage }) => {
        if (backLanguage === 'nodejs') {
            backend.useNode();
        } else {
            backend.useDjango();
        }
    },

    initRepo: (name) => {
        const obj = {
            owner: 'labcodes',
            repo: name.replace(' ', '-')
        };

        github.gInit(obj);
    }
};