'use strict';

let exec = require('child_process').exec;
let pkg = require('../package.json');
let labKnowledge = './knowledge.js';

require('should');

describe('Knowledge', function() {
  it('Should return a version of labKnowledge.', function(done) {
    exec(labKnowledge + ' --version', function(err, stdout, stderr) {
      if (err) throw err;

      stdout.replace('\n', '').should.be.equal(pkg.version);
      done();
    });
  });

  it('The command "sum 1 2" should return 3', function(done) {
    exec(labKnowledge + ' sum 1 2 ', function(err, stdout, stderr) {
      if (err) throw err;

      Number(stdout).should.be.equal(3);
      done();
    });
  });

  it('The command "addLink link" should return a link', function(done) {
    exec(labKnowledge + ' addLink link ', function(err, stdout, stderr) {
      if (err) throw err;

      stdout.replace('\n', '').should.be.equal('link');
      done();
    });
  });
});