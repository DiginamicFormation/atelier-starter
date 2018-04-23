const {gh, githubUser, config} = require('./issues');

exports.genRepos = (gh, githubUser, config) => {
    const allCalls = [];

    Object.keys(repoName => {
        allCalls.push(gh.getOrganization(githubUser).createRepo({ name:`${repoName}-front`}));
        allCalls.push(gh.getOrganization(githubUser).createRepo({ name:`${repoName}-back`}));
    });

    return Promise.all(allCalls);
};

