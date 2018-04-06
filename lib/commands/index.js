const startProject = require('./start-project');
const newMember = require('./new-member');
const listProjects = require('./list-projects');

// ====

const getCommands = (argv) => {
  if (argv === 'start-project') {
    startProject();
  } else if (argv === 'new-member') {
    newMember();
  } else if (argv === 'list-projects') {
    listProjects();
  } else {
    console.warn('DALE!');
  }
};

// ====

module.exports = getCommands;
