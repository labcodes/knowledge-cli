const childProcess = require('child_process');
const git = require('simple-git/promise');
const simpleGit = require('simple-git');
const shell = require('shelljs');

// ====

class Setup {
  constructor() {
    this.remote = 'git@github.com:labcodes';

    this.simpleGit = simpleGit;
    this.git = git;
    this.child_process = childProcess;
    this.shell = shell;

    this.cloneRepo = this.cloneRepo.bind(this);
    this.nodeInstall = this.nodeInstall.bind(this);
    this.removeGitFolder = this.removeGitFolder.bind(this);
  }

  nodeInstall(projectName) {
    return this.child_process.spawn('npm', ['install'], {
      stdio: 'inherit',
      shell: true,
      cwd: projectName,
    });
  }

  react(projectName) {
    const remote = `${this.remote}/react-boilerplate.git`;
    this.cloneRepo(remote, projectName)
      .then(() => this.nodeInstall(projectName))
      .catch(err => console.error('Error:', err));
  }

  django() {
    const remote = `${this.remote}/django-react-webpack.git`;
    this.cloneRepo(remote);
  }

  nodejs(projectName) {
    const remote = 'git@github.com:balderdashy/sails.git';
    this.cloneRepo(remote, projectName)
      .then(() => this.nodeInstall(projectName))
      .catch(err => console.error('Error', err));
  }

  initRepo(name) {
    const obj = {
      owner: 'labcodes',
      repo: name.replace(' ', '-'),
    };

    const newGit = this.simpleGit(name);
    newGit.init().addRemote('origin', `https://github.com/${obj.owner}/${obj.repo}.git`);
  }

  removeGitFolder(path) {
    this.shell.rm('-rf', `${path}/.git`);
  }

  cloneRepo(remote, projectPath) {
    return new Promise((resolve, reject) => {
      this.git().silent(true).clone(remote, projectPath)
        .then(() => resolve())
        .catch(err => reject(err));
    });
  }
}

// ====

module.exports = Setup;
