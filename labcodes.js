#!/usr/bin/env node
'use strict';

let commander = require('commander');
let pkg = require('./package.json');
let linkSpotify = 'https://open.spotify.com/user/renatosoliveira/playlist/4Vyd7nWCaxstnGUxlK3jhL';

commander.version(pkg.version);

commander
  .command('knowledge <url>')
  .description('Posting one URL on knowledge.')
  .action(function knowledge(link) {
    console.log(link);
  });

commander
  .command('sum <number1> <number2>')
  .description('Sum two numbers.')
  .action(function sum(number1, number2) {
    console.log(Number(number1) + Number(number2));
  });

commander
  .command('spotify')
  .description('Our playlist on Spotify :)')
  .action(function spotify() {
    console.log(linkSpotify);
  });

commander.parse(process.argv);