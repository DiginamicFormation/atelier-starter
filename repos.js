const {gh, githubUser, config} = require('./issues');

const allCalls = [];

Object.keys(repoName => {
    allCalls.push(gh.getOrganization(githubUser).createRepo({ name:`${repoName}-front`}));
    allCalls.push(gh.getOrganization(githubUser).createRepo({ name:`${repoName}-back`}));
});

Promise.all(allCalls).catch(console.log);