const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const argv = require('minimist')(process.argv.slice(2));

const getCommands = require('./commands');

// ====

const run = () => {
  clear();

  console.log(chalk.yellow(figlet.textSync('Labcodes', { horizontalLayout: 'full' })));

  const hasArguments = argv._ && argv._.length > 0;

  if (hasArguments) {
    getCommands(argv._[1]);
  }
};

// ====

module.exports = run;
