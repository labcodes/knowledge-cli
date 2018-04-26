const Helpers = require('../helpers');

// ====

module.exports = [
  {
    name: 'projectName',
    type: 'input',
    message: 'Qual o nome do projeto?',
    validate(value) {
      Helpers.validateFields(value, 'Please, type the name of your project!');
    },
  },

  {
    type: 'list',
    name: 'projectType',
    message: 'Qual o tipo de projeto você está iniciando?',
    choices: ['Front-end', 'Back-end'],
    filter(val) {
      return val.toLowerCase();
    },
  },
];
