/**
 * CONFIGURATION
 *
 * Pré-requis :
 *  Configurer une variable d'environnement GITHUB_TOKEN
 *
 */

var gh = new GitHub({
    // variable d'environnement GITHUB_TOKEN à configurer dans Travis
    token: process.env.GITHUB_TOKEN
});

const githubUser = 'DiginamicFormation';

const config = {
    "temp1" : 'gestion-du-transport',
    "temp2" : 'gestion-des-absences',
    "temp3" : 'gestion-des-missions',
};


/**
 * Scripting
 *
 * Génération des issues.
 *
 */
const fs = require('fs');
const GitHub = require('github-api');

Object.keys(config).forEach(repo => {
    fs.readdirSync(`${config[repo]}/issues`).forEach(file => {
        fs.readFile(`${config[repo]}/issues/${file}`, 'utf8', (err,message) => {
            if (err) {
                return console.log(err);
            } else {
                const title = file.replace('.md','');

                gh.getIssues(githubUser, repo).createIssue({
                    title : title,
                    body: message
                }).catch(console.log);

            }
        });
    })
});