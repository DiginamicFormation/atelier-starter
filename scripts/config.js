require('./verify').verifyGH();

//exports.repos = ['gestion-des-absences','gestion-des-missions', 'gestion-du-transport']; // 'test'

exports.repos = [{
    repoName : 'temp',
    projectName : 'gestion-du-transport'
}];

exports.orgaGithub = 'DevInstitut';
exports.protocolGithub = 'git@github.com:'; // git@github.com: ou https://github.com/