
const recursiveIssueInsert = (issue) =

exports.genIssues = (gh, githubUser, config) => {

    const fs = require('fs');

    const allCalls = [];

    const allIssues = [];

    const ci = gh.getIssues(githubUser, `${repo}-front`).createIssue;

    Object.keys(config).forEach(repo => {
        fs.readdirSync(`${config[repo]}/issues`).forEach(file => {
            const message = fs.readFileSync(`${config[repo]}/issues/${file}`, 'utf8');

            const title = file.replace('.md','');

            console.log(`** Création issue sur le dépôt ${repo}-front : ${title} `);

            allIssues.push({
                title : title,
                body: message
            });


        })
    });



    return allIssues.reduce((is1, is2) => {
        return ci(is1).then(() => ci(is2));
    });
};
