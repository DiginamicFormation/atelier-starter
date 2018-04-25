const fs = require('fs');

exports.genIssues = (gh, githubUser, config) => {

    const allIssues = [];

    Object.keys(config).forEach(repo => {
        fs.readdirSync(`${config[repo]}/issues`).forEach(file => {
            const body = fs.readFileSync(`${config[repo]}/issues/${file}`, 'utf8');
            const title = file.replace('.md','');

            console.log(`** Création issue sur le dépôt ${repo}-front : ${title} `);

            allIssues.push(() => gh.getIssues(githubUser, `${repo}-front`).createIssue({title , body}));
        })
    });

    return allIssues.reduce((isFn1, isFn2) => {
        return isFn1().then(() => isFn2());
    });
};
