/**
 * CONFIGURATION
 *
 * Pré-requis :
 *  Configurer une variable d'environnement GITHUB_TOKEN
 *
 *  A cause à des problèmes de limite GITHUB, effectuer un dépôt à la fois.
 *
 */

exports.githubUser = 'DiginamicFormation';

// Mapping
// NOM DU DEPOT SUR GITHUB - PROJET ASSOCIE
exports.config = {
    "temp1" : 'gestion-des-transports',
    // "temp2" : 'gestion-des-absences',
    //"temp3" : 'gestion-des-missions',
};

const GitHub = require('github-api');
exports.gh = new GitHub({
    // variable d'environnement GITHUB_TOKEN à configurer dans Travis
    token: process.env.GITHUB_TOKEN
});