const sh = require('shelljs');
const REPO_TEMP_DIR = 'target';
const lg = console.log;
const pushArchetype = (repoUser, repoName, archetypeName) => {

    const PUSH_URL = `git@github.com:${repoUser}/${repoName}`

    lg(`** Génération archetype ${archetypeName} pour le dépôt ${repoUser}/${repoName}` );

    sh.rm('-rf', REPO_TEMP_DIR);

    const repoDir = `${REPO_TEMP_DIR}/${repoName}`;

    sh.mkdir('-p', repoDir);

    sh.echo(`** Copie des sources de l'archetype vers ${repoDir}`);
    sh.cp('-R', `archetypes/${archetypeName}/*`, repoDir);

    sh.echo(`** Commit & Push Github`);
    const gitCmds = [
        //'git config user.email diginamic.github@gmail.com',
        //'git config user.name diginamic',
        `cd ${repoDir} && git init`,
        `cd ${repoDir} && git add .`,
        `cd ${repoDir} && git commit -m "init archetype"`,
        `cd ${repoDir} && git push --force ${PUSH_URL} master`];

    gitCmds.forEach(sh.exec);
};


exports.pushArchetype = pushArchetype;