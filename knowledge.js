#!/usr/bin/env node
'use strict';

let program = require('commander');
let pkg = require('./package.json');

program.version(pkg.version);

program
  .command('sum <number1> <number2>')
  .description('Soma dois números.')
  .action(function sum(number1, number2) {
    console.log(Number(number1) + Number(number2));
  });

program
  .command('addLink <link>')
  .description('Adiciona um novo link.')
  .action(function addLink(link) {
    console.log(link);
  });

program.parse(process.argv);