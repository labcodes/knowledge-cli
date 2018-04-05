module.exports = [
  {
    name: 'projectName',
    type: 'input',
    message: 'Qual o nome do projeto?',
    validate(value) {
      if (value.length) {
        return true;
      }

      return 'Por favor, digite um nome para o projeto!';
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
