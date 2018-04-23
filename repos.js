const {gh, githubUser, config} = require('./issues');

const actionRepo =(action, gh, githubUser, config) => {

    const allCalls = [];

    Object.keys(config).forEach(repoName => {

        console.log(`** Création dépôts : ${repoName}-front et ${repoName}-back`);

        allCalls.push(gh.getOrganization(githubUser)[action]({ name:`${repoName}-front`}));
        allCalls.push(gh.getOrganization(githubUser)[action]({ name:`${repoName}-back`}));
    });

    return Promise.all(allCalls);



};

exports.genRepos = (gh, githubUser, config) => {
    return actionRepo('createRepo')
};

exports.deleteRepos = (gh, githubUser, config) => {
    return actionRepo('deleteRepo')
};



