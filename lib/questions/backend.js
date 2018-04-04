module.exports = [
    {
        type: 'list',
        name: 'backLanguage',
        message: 'Qual o framework do backend?',
        choices: ['Django', 'Nodejs'],
        validate(value) {
            if (value.length) {
                return true;
            } else {
                return 'Por favor, escolha um framework!'
            }
        },
        filter(val) {
            return val.toLowerCase();
        }
    },
];