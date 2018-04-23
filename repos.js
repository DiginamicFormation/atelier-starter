const {gh, githubUser, config} = require('./issues');

exports.genRepos = (gh, githubUser, config) => {
    const allCalls = [];

    Object.keys(config).forEach(repoName => {

        console.log(`** Création dépôts : ${repoName}-front et ${repoName}-back`);

        allCalls.push(gh.getOrganization(githubUser).createRepo({ name:`${repoName}-front`}));
        allCalls.push(gh.getOrganization(githubUser).createRepo({ name:`${repoName}-back`}));
    });

    return Promise.all(allCalls);
};

