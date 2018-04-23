exports.genRepos = (gh, githubUser, config) => {
    const allCalls = [];

    Object.keys(config).forEach(repoName => {

        console.log(`** dépôts : ${repoName}-front et ${repoName}-back`);

        const orga = gh.getOrganization(githubUser);

        allCalls.push(orga.createRepo({ name:`${repoName}-front`}));
        allCalls.push(orga.createRepo({ name:`${repoName}-back`}));
    });

    return Promise.all(allCalls);

};
exports.deleteRepos = (gh, githubUser, config) => {

    const allCalls = [];

    Object.keys(config).forEach(repoName => {

        console.log(`** dépôts : ${repoName}-front et ${repoName}-back`);

        const orga = gh.getOrganization(githubUser);

        allCalls.push(orga.deleteRepo({ name:`${repoName}-front`}));
        allCalls.push(orga.deleteRepo({ name:`${repoName}-back`}));
    });

    return Promise.all(allCalls);

};



