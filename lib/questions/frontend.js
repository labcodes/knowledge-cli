module.exports = [
  {
    type: 'list',
    name: 'jsFramework',
    message: 'Qual o Framework JS você quer utilizar?',
    choices: ['React', 'Vuejs', 'Angular'],
    validate(value) {
      if (value.length) {
        return true;
      }

      return 'Por favor, escolha um framework!';
    },
    filter(val) {
      return val.toLowerCase();
    },
  },
];
