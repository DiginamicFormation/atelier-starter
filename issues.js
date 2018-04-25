const fs = require('fs');

exports.genIssues = (gh, githubUser, config) => {

    const allPromiseIssues$ = [];

    Object.keys(config).forEach(repo => {
        fs.readdirSync(`${config[repo]}/issues`).forEach(file => {
            const body = fs.readFileSync(`${config[repo]}/issues/${file}`, 'utf8');
            const title = file.replace('.md','');
            allPromiseIssues$.push(gh.getIssues(githubUser, `${repo}-front`).createIssue({title , body}));
        });

    });

    return Promise.all(allPromiseIssues$);
};
