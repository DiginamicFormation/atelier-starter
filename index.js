const cfg = require('./config');

const welcome = `
   ********************* ATELIER STARTER *********************
   Organisation Github : ${cfg.githubOrga}
   Dépôts : ${cfg.repositories}
   Générer les dépôts : ${cfg.createRepository ? 'Oui' : 'Non'}
   Générer les issues : ${cfg.generateIssues ? 'Oui' : 'Non'}
   ***********************************************************
`;

console.log(welcome)

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
//    "gestion-des-absences" : 'gestion-des-absences',
//    "gestion-des-missions" : 'gestion-des-missions',
};

const GitHub = require('github-api');
const gh = new GitHub({
    // variable d'environnement GITHUB_TOKEN à configurer dans Travis
    token: process.env.GITHUB_TOKEN
});

/**********************************/
/** GENERER ATELIER COMPLET      **/
/** EFFECTUER 1 PROJET A LA FOIS **/
/**********************************/
/*
const arch = require('./archetypes');
const is = require('./issues');

require('./repos').genRepos(gh, githubUser, config)
    .then((data) => {
        // fix ? tempo qui
        console.log(data);
        arch.push(githubUser, config);
    })
    .then(is.genIssues(gh, githubUser, config))
    .catch(console.log);
*/
/************************/
/** ACTIONS UNITAIRES **/
/***********************/
// pour générer les dépôts
//require('./repos').genRepos(gh, githubUser, config).catch(console.log);

// pour générer les issues
// ATTENTION: pour le moment, générer les issues pour un projet à la fois (variable config)
// require('./issues').genIssues(gh, githubUser, config).catch(console.log);

// pour générer un archetype sur un dépôt
// attention git push --force inside
// require('./archetypes').pushArchetype('DiginamicFormation', 'atelier-back', 'front');


/********************/
/** ZONE DE DANGER **
/********************/

// pour supprimer des dépôts
// require('./repos').deleteRepos(gh, githubUser, config).catch(console.log);
