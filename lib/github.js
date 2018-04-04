const git = require('simple-git')();

// ====

module.exports = {
    gInit: ({owner, repo}) => {
        git
            .init()
            .addRemote('origin', `https://github.com/${owner}/${repo}.git`)
    }
};