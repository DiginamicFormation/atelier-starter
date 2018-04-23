exports.genRepos = (gh, githubUser, config) => {
    const allCalls = [];

    Object.keys(config).forEach(repoName => {

        console.log(`** création dépôts : ${repoName}-front et ${repoName}-back`);

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
        .then(response => {
            return response.data.filter(r => Object.keys(config).some(c => r.name.includes(c)));
        })
        .then(reposToDelete => {
            reposToDelete.forEach(r => {
                console.log('** Suppression du dépôt', r.name)
                allCalls.push(orga.deleteRepo({ name:`${r.name}-front`}));
                allCalls.push(orga.deleteRepo({ name:`${r.name}-back`}));
            })

        });

    return Promise.all(allCalls);

};



