const Helpers = require('../helpers');

// ====

module.exports = [
  {
    type: 'list',
    name: 'jsFramework',
    message: 'Qual o Framework JS você quer utilizar?',
    choices: ['React', 'Vuejs', 'Angular'],
    validate(value) {
      Helpers.validateFields(value, 'Please, choose one framework!');
    },
    filter(val) {
      return val.toLowerCase();
    },
  },
];
