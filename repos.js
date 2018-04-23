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

    const orga = gh.getOrganization(githubUser);

    orga.getRepos()
        .then(repositories => {
            console.log("list repos", repositories);
            return repositories.filter(r => Object.keys(config).some(c => r.name.includes(c)));
        })
        .then(reposToDelete => {
           /* reposToDelete.forEach(r => {
                allCalls.push(orga.deleteRepo({ name:`${r}-front`}));
                allCalls.push(orga.deleteRepo({ name:`${r}-back`}));
            })
            */
        });

    return Promise.all(allCalls);

};



