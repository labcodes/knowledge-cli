'use strict';

let exec = require('child_process').exec;
let pkg = require('../package.json');
let labcodes = './labcodes.js';
let linkSpotify = 'https://open.spotify.com/user/renatosoliveira/playlist/4Vyd7nWCaxstnGUxlK3jhL';

require('should');

describe('Labcodes', function() {
  it('Should return a version of labcodes.', function(done) {
    exec(labcodes + ' --version', function(err, stdout, stderr) {
      if (err) throw err;

      stdout.replace('\n', '').should.be.equal(pkg.version);
      done();
    });
  });

  it('The command `knowledge <url>` should post a link', function(done) {
    let link = 'http://www.google.com.br';

    exec(labcodes + ' knowledge ' + link , function(err, stdout, stderr) {
      if (err) throw err;

      stdout.replace('\n', '').should.be.equal(link);
      done();
    })
  })

  it('The command `sum <1> <2>` should sum two numbers.', function(done) {
    exec(labcodes + ' sum 1 2 ', function(err, stdout, stderr) {
      if (err) throw err;

      Number(stdout).should.be.equal(3);
      done();
    });
  });

  it('The command `spotify` should return the spotify url.', function(done) {
    exec(labcodes + ' spotify', function(err, stdout, stderr) {
      if (err) throw err;

      stdout.replace('\n', '').should.be.equal(linkSpotify);
      done();
    });
  });

  it('The command `forks update` should return the update.', function(done) {
    let updateResult = 'Updating project..';

    exec(labcodes + ' forks update ', function(err, stdout, stderr) {
      if (err) throw err;

      stdout.replace('\n', '').should.be.equal(updateResult);
      done();
    });
  });

  it('The command `forks open` should return the open.', function(done) {
    let openResult = 'Click on: http://forksmealplanner.com';

    exec(labcodes + ' forks open ', function(err, stdout, stderr) {
      if (err) throw err;

      stdout.replace('\n', '').should.be.equal(openResult);
      done();
    });
  });
});