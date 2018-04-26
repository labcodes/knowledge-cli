const Helpers = require('../helpers');

// ====

module.exports = [
  {
    type: 'list',
    name: 'backLanguage',
    message: 'Qual o framework do backend?',
    choices: ['Django', 'Nodejs'],
    validate(value) {
      Helpers.validateFields(value, 'Please, choose one framework!');
    },
    filter(val) {
      return val.toLowerCase();
    },
  },
];
