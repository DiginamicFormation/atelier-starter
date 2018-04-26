const cfg = require('./config');

const welcome = `
   ********************* ATELIER STARTER *********************
   Organisation Github : ${cfg.githubOrga}
   Nom du dépôt : ${cfg.repositoryName}
   Nom du projet : ${cfg.projectName}
   Générer les dépôts : ${cfg.createRepository ? 'Oui' : 'Non'}
   Générer les issues : ${cfg.generateIssues ? 'Oui' : 'Non'}
   ***********************************************************
`;

console.log(welcome);

const config = {};
config[`${cfg.repositoryName}`] = cfg.projectName;

const GitHub = require('github-api');
const gh = new GitHub({
    // variable d'environnement GITHUB_TOKEN à configurer dans Travis
    token: process.env.GITHUB_TOKEN
});

const promise$ = cfg.createRepository ? require('./repos').genRepos(gh, cfg.githubOrga, config).then ((data) => {
    console.log(data);
    require('./archetypes').push(cfg.githubOrga, config, cfg.jenkinsfile);
}) : Promise.resolve();

promise$.then(() => cfg.generateIssues ? require('./issues').genIssues(gh, cfg.githubOrga, config) : Promise.resolve())
    .catch(console.log);
