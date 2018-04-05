const fs = require('fs');
const path = require('path');

// ====

class Files {
  constructor() {
    this.path = path;
    this.fs = fs;
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
}

// ====

module.exports = Files;
