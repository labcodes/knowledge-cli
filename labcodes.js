#!/usr/bin/env node
'use strict';

let program = require('commander');
let pkg = require('./package.json');
let linkSpotify = 'https://open.spotify.com/user/renatosoliveira/playlist/4Vyd7nWCaxstnGUxlK3jhL';

program.version(pkg.version);

program
  .command('knowledge <url>')
  .description('Posting one URL on knowledge.')
  .action(function knowledge(link) {
    console.log(link);
  });


program
  .command('forks [action]')
  .description('Update the Forks Meal Planner.')
  .action(function forks(action) {
    switch(action) {
      case 'update':
        console.log('Updating project..');
      break;

      case 'open':
        console.log('Click on: http://forksmealplanner.com');
      break;
    }
  });

program
  .command('sum <number1> <number2>')
  .description('Sum two numbers.')
  .action(function sum(number1, number2) {
    console.log(Number(number1) + Number(number2));
  });

program
  .command('spotify')
  .description('Our playlist on Spotify :)')
  .action(function spotify() {
    console.log(linkSpotify);
  });

program.parse(process.argv);