const fs = require('fs');
const path = require('path');

// ====

class Files {
    getCurrentDirectoryBase() {
        return path.basename(process.cwd());
    }
    
    directoryExists(filePath) {
        try {
            return fs.statSync(filePath).isDirectory();
        } catch (error) {
            return false;
        }
    }
}

// ====

module.exports = Files;