const fs = require('fs');

exports.genIssues = (gh, githubUser, config) => {

    const allPromiseIssues = [];

    Object.keys(config).forEach(repo => {
        const repoIssues = [];
        fs.readdirSync(`${config[repo]}/issues`).forEach(file => {
            const body = fs.readFileSync(`${config[repo]}/issues/${file}`, 'utf8');
            const title = file.replace('.md','');


            repoIssues.push(() => {
                console.log(`** Création issue sur le dépôt ${repo}-front : ${title} `);
                return gh.getIssues(githubUser, `${repo}-front`).createIssue({title , body})
            });


        });

        const promiseRepo$ =  repoIssues.reduce((isFn1, isFn2) => {
            console.log("isFn1", isFn1, "isFn2", isFn2);
            return () => isFn1.then(() => isFn2());
        }, Promise.resolve());
        allPromiseIssues.push(promiseRepo$);

    });

    return Promise.all(allPromiseIssues);
};
