const hello = `
   ********* ATELIER STARTER *********
`;

console.log(hello)

/**
 * CONFIGURATION
 *
 * Pré-requis :
 *  Configurer une variable d'environnement GITHUB_TOKEN
 *
 *  A cause à des problèmes de limite GITHUB, effectuer un dépôt à la fois.
 *
 */

const githubUser = 'DiginamicFormation';

// Mapping
// NOM DU DEPOT SUR GITHUB - PROJET ASSOCIE
const config = {
    "temp1" : 'gestion-des-transports',
    // "temp2" : 'gestion-des-absences',
    //"temp3" : 'gestion-des-missions',
};

const GitHub = require('github-api');
const gh = new GitHub({
    // variable d'environnement GITHUB_TOKEN à configurer dans Travis
    token: process.env.GITHUB_TOKEN
});

// pour générer les dépôts
// require('./repos').genRepos(gh, githubUser, config).catch(console.log);

// pour générer les issues
// require('./repos').genRepos(gh, githubUser, config).catch(console.log);