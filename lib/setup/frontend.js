const shell = require('shelljs');

// ====

module.exports = {
    useVue: (stack, addons) => {
        shell.exec(`${process.cwd()}/scripts/vue.sh`);
    },

    useAngular: (stack, addons) => {
        shell.exec(`${process.cwd()}/scripts/angular.sh`);
    },
    
    useReact: (stack, addons, appname) => {
        shell.exec(`${process.cwd()}/scripts/react.sh ${stack} ${addons} ${appname}`);
    },
};