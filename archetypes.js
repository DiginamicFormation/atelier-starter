const sh = require('shelljs');
const replace = require("replace");
const REPO_TEMP_DIR = 'target';
const lg = console.log;


const pushArchetype = (repoUser, repoName, archetypeName, jenkinsfileCfg, projectName) => {

    const PUSH_URL = `git@github.com:${repoUser}/${repoName}`

    lg(`** Génération archetype ${archetypeName} pour le dépôt ${repoUser}/${repoName}` );

    sh.rm('-rf', REPO_TEMP_DIR);

    const repoDir = `${REPO_TEMP_DIR}/${repoName}`;

    sh.mkdir('-p', repoDir);

    lg(`** Copie des sources de l'archetype vers ${repoDir}`);
    sh.cp('-R', `archetypes/${archetypeName}/*`, repoDir);

    lg('** mise à jour du Jenkinsfile');

    if(archetypeName === 'back') {

        replace({
            regex: "____PROD_GIT____",
            replacement: `${jenkinsfileCfg.back.jenkinsfileUrlCleverCloud[projectName]}`,
            paths: [`${repoDir}/Jenkinsfile`],
            recursive: true,
            silent: true,
        });

        replace({
            regex: "____GIT_CREDENTIAL_ID____",
            replacement: `${jenkinsfileCfg.back.jenkinsfileGitCredentialId}`,
            paths: [`${repoDir}/Jenkinsfile`],
            recursive: true,
            silent: true,
        });

        replace({
            regex: "____ARTIFACT_ID____",
            replacement: `${repoName}-back`,
            paths: [`${repoDir}/pom.xml`],
            recursive: true,
            silent: true,
        });

    }

    if(archetypeName === 'front') {

        replace({
            regex: "____GH_ORG____",
            replacement: `${repoUser}`,
            paths: [`${repoDir}/Jenkinsfile`],
            recursive: true,
            silent: true,
        });

        replace({
            regex: "____APP_REPO____",
            replacement: `${repoName}`,
            paths: [`${repoDir}/Jenkinsfile`],
            recursive: true,
            silent: true,
        });

        replace({
            regex: "____BACKEND_PROD____",
            replacement: `${jenkinsfileCfg.front.backendProdUrlMapping[projectName]}`,
            paths: [`${repoDir}/Jenkinsfile`],
            recursive: true,
            silent: true,
        });
    }

    lg(`** Commit & Push Github`);
    const gitCmds = [
        `cd ${repoDir} && git init`,
        `cd ${repoDir} && git add .`,
        `cd ${repoDir} && git commit -m "init archetype"`,
        `cd ${repoDir} && git push --force ${PUSH_URL} master`];

    gitCmds.forEach(sh.exec);
};

const push = (repoUser, config, jenkinsfileCfg) => {
    Object.keys(config).forEach(repoName => {
        pushArchetype(repoUser, `${repoName}-front`, 'front', jenkinsfileCfg, config[repoName]);
        pushArchetype(repoUser, `${repoName}-back`, 'back', jenkinsfileCfg, config[repoName]);
    })
};

exports.push = push;
exports.pushArchetype = pushArchetype;