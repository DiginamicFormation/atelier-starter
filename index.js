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
    "gestion-des-transports" : 'gestion-des-transports',
  //  "gestion-des-absences" : 'gestion-des-absences',
  //  "gestion-des-mission" : 'gestion-des-missions',
};

const GitHub = require('github-api');
const gh = new GitHub({
    // variable d'environnement GITHUB_TOKEN à configurer dans Travis
    token: process.env.GITHUB_TOKEN
});

/************************/
/** ACTION RECURRENTES **
 /***********************/

// pour générer les dépôts
//require('./repos').genRepos(gh, githubUser, config).catch(console.log);

// pour générer les issues
// ATTENTION: pour le moment, générer les issues pour un projet à la fois (variable config)
//require('./issues').genIssues(gh, githubUser, config).catch(console.log);


/********************/
/** ZONE DE DANGER **
/********************/

// pour supprimer des dépôts
// require('./repos').deleteRepos(gh, githubUser, config).catch(console.log);
