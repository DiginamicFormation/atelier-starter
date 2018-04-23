const actionRepo =(actionFn, gh, githubUser, config) => {

    const allCalls = [];

    Object.keys(config).forEach(repoName => {

        console.log(`** dépôts : ${repoName}-front et ${repoName}-back`);

        const orga = gh.getOrganization(githubUser);

        allCalls.push(actionFn(orga)({ name:`${repoName}-front`}));
        allCalls.push(actionFn(orga)({ name:`${repoName}-back`}));
    });

    return Promise.all(allCalls);



};

exports.genRepos = (gh, githubUser, config) => {
    return actionRepo((orga) => orga.createRepo, gh, githubUser, config);
};

exports.deleteRepos = (gh, githubUser, config) => {

    return actionRepo((orga) => orga.deleteRepo, gh, githubUser, config);
};



