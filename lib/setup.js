const git = require('simple-git/promise');
const simpleGit = require('simple-git')();

// ====

class Setup {
    constructor() {
        this.remote = `git@github.com:labcodes`;
    }

    react() {
        const remote = `${this.remote}/react-boilerplate.git`;
        this.cloneRepo(remote);
    }
    
    django() {
        const remote = `${this.remote}/django-react-webpack.git`;
        this.cloneRepo(remote);
    }
    
    nodejs() {
        const remote = `git@github.com:balderdashy/sails.git`;
        this.cloneRepo(remote);
    }
    
    initRepo(name) {
        const obj = {
            owner: 'labcodes',
            repo: name.replace(' ', '-')
        };

        simpleGit
            .init()
            .addRemote('origin', `https://github.com/${obj.owner}/${obj.repo}.git`);
    }
    
    cloneRepo(remote) {
        git()
            .silent(true)
            .clone(remote)
            .then(() => console.warn('Finished!'))
            .catch((err) => console.warn('Error', err));
    }
}

// ====

module.exports = Setup;