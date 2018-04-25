
exports.genIssues = (gh, githubUser, config) => {

    const fs = require('fs');

    const allCalls = [];

    Object.keys(config).forEach(repo => {
        fs.readdirSync(`${config[repo]}/issues`).forEach(file => {
            const message = fs.readFileSync(`${config[repo]}/issues/${file}`, 'utf8');

            const title = file.replace('.md','');

            console.log(`** Création issue sur le dépôt ${repo}-front : ${title} `);

            allCalls.push(gh.getIssues(githubUser, `${repo}-front`).createIssue({
                title : title,
                body: message
            }));
        })
    });

    return allCalls.reduce((p, fn) => p.then(fn), Promise.resolve());
};
