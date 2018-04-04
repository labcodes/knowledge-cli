module.exports = [
    {
        type: 'checkbox',
        name: 'stack',
        message: 'Qual stack você quer utilizar?',
        choices: [
            { name: 'redux' },
            { name: 'router' },
        ],
        validate(value) {
            if (value.length) {
                return true;
            }
        }
    },
    
    {
        type: 'checkbox',
        name: 'addons',
        message: 'Gostaria de adicionar alguma lib?',
        choices: [
            { name: 'husky' },
            { name: 'raven-js' },
            { name: 'redux-logger' },
            { name: 'redux-form' },
            { name: 'redux-form-validators' },
            { name: 'react-router-redux' },
            { name: 'moment' },
        ],
        validate(value) {
            if (value.length) {
                return true;
            }
        }
    },
];