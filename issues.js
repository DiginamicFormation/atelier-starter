const fs = require('fs');

async function call(fns) {

    for(let f of fns) {
        await f();
    }
}

exports.genIssues = (gh, githubUser, config) => {

    const allPromiseIssuesFn$ = [];


    // generate project issues
    Object.keys(config).forEach(repo => {
        fs.readdirSync(`${config[repo]}/issues`).forEach(file => {
            const body = fs.readFileSync(`${config[repo]}/issues/${file}`, 'utf8');
            const title = file.replace('.md','');

            allPromiseIssuesFn$.push(() => {
                console.log(`** Création issue sur le dépôt ${repo}-front : ${title} `);
                return gh.getIssues(githubUser, `${repo}-front`).createIssue({title , body})
            });
        });

    });

    // generate common issue
    Object.keys(config).forEach(repo => {
        fs.readdirSync(`transverse/issues`).forEach(file => {
            const body = fs.readFileSync(`transverse/issues/${file}`, 'utf8');
            const title = file.replace('.md', '');

            allPromiseIssuesFn$.push(() => {
                console.log(`** Création issue sur le dépôt ${repo}-front : ${title} `);
                return gh.getIssues(githubUser, `${repo}-front`).createIssue({title, body})
            });
        });
    });





    return call(allPromiseIssuesFn$);
};
