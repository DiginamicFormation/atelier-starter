const actionRepo =(action, gh, githubUser, config) => {

    const allCalls = [];

    Object.keys(config).forEach(repoName => {

        console.log(`** ${action} dépôts : ${repoName}-front et ${repoName}-back`);

        const orga = gh.getOrganization(githubUser);

        // debug
        console.log('DEBUG','orga', orga);

        allCalls.push(orga[`${action}`]({ name:`${repoName}-front`}));
        allCalls.push(orga[`${action}`]({ name:`${repoName}-back`}));
    });

    return Promise.all(allCalls);



};

exports.genRepos = (gh, githubUser, config) => {
    return actionRepo('createRepo', gh, githubUser, config);
};

exports.deleteRepos = (gh, githubUser, config) => {
    return actionRepo('deleteRepo', gh, githubUser, config);
};



