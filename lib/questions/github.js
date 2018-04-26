const Helpers = require('../helpers');

// ====

module.exports = [
  {
    name: 'username',
    type: 'input',
    message: 'Enter a valid Github username',
    validate(value) {
      Helpers.validateFields(value, 'Please, enter your Github username!');
    },
  },

  {
    name: 'email',
    type: 'input',
    message: 'Enter your Github e-mail',
    validate(value) {
      Helpers.validateFields(value, 'Please, enter your Github e-mail!');
    },
  },

  {
    name: 'password',
    type: 'password',
    message: 'Enter your Github password',
    validate(value) {
      Helpers.validateFields(value, 'Please, enter your Gihub password!');
    },
  },
];
