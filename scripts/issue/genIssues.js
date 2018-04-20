const config = require('../config');
const sh = require('shelljs');
const fs = require('fs');

config.repos.forEach(repo => {
    fs.readdirSync(`${repo.projectName}/issues`).forEach(file => {
        fs.readFile(`${repo.projectName}/issues/${file}`, 'utf8', (err,message) => {
            if (err) {
                return console.log(err);
            } else {
                const title = file.replace('.md','');
                // gestion des sauts de ligne
                // les expression "EXP" sont transformées en _EXP_
                const msg = message.split('\n').join('<br>').split('"').join('_');
                const cmdCreateIssue = `gh is --new --title "${title}" --repo ${repo.repoName} --user ${config.orgaGithub} --browser false --message "${msg}"`;
                // const cmdCreateIssue = `gh is --new --title "${title}" --repo ${repo.repoName} --user ${config.orgaGithub} --browser false --message ` + "`"+msg+"`";
                console.log(cmdCreateIssue)
                 
                 if (sh.exec(cmdCreateIssue).code !== 0) {
                    sh.echo('********* ERREUR *********');
                    sh.echo(`Ooops erreur lors de la création de l'issue ${title}`);
                    sh.echo('**************************');
                    sh.exit(1);
                }
            }
        });
    })
});