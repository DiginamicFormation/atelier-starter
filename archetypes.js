const sh = require('shelljs');
const REPO_TEMP_DIR = 'target';
const lg = console.log;
const pushArchetype = (repoUser, repoName, archetypeName) => {

    const PUSH_URL = `https://${process.env.GH_TOKEN}@github.com:${repoUser}/${repoName}`

    lg(`** Génération archetype ${archetypeName} pour le dépôt ${repoUser}/${repoName}` );

    shell.rm('-rf', REPO_TEMP_DIR);

    const repoDir = `${REPO_TEMP_DIR}/${repoName}`;

    shell.mkdir('-p', repoDir);

    shell.echo(`** Copie des sources de l'archetype vers ${repoDir}`);
    shell.cp('-R', `archetypes/${archetypeName}`, repoDir);

    shell.echo(`** Commit & Push Github`);
    shell.cd(repoDir);
    const gitCmds = [
        'git config user.email diginamic.github@gmail.com',
        'git config user.name diginamic',
        'git add .',
        'git commit -m "init archetype"',
        `git push --force ${PUSH_URL} master`];

    gitCmds.forEach(shell.exec);
};


exports.pushArchetype = pushArchetype;