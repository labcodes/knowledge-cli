const fs = require('fs');
const path = require('path');
const shell = require('shelljs');

// ====

class Files {
  constructor() {
    this.path = path;
    this.fs = fs;
    this.shell = shell;
  }

  getCurrentDirectoryBase() {
    return this.path.basename(process.cwd());
  }

  directoryExists(filePath) {
    try {
      return this.fs.statSync(filePath).isDirectory();
    } catch (error) {
      return false;
    }
  }

  createPath(dirName) {
    return this.shell.mkdir('-p', `${dirName}`);
  }
}

// ====

module.exports = Files;
