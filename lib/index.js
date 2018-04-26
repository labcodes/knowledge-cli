const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const argv = require('minimist')(process.argv.slice(2));
const Raven = require('raven');

const getCommands = require('./commands');

// ====

const RavenStart = () => {
  Raven.config('https://542ca9bbea044a30aa071f6e3afdf973@sentry.io/1197070').install();
};

// ====

const run = () => {
  RavenStart();

  clear();

  console.log(chalk.yellow(figlet.textSync('Labcodes', { horizontalLayout: 'full' })));

  const hasArguments = argv._ && argv._.length > 0;

  if (hasArguments) {
    getCommands(argv._[0]);
  }
};

// ====

module.exports = run;
