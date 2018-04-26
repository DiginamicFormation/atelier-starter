const CONFIG = {

    // nom de l'organisation
    // l'utilisateur ghdiginamic doit avoir les droits suffisants sur l'organisation
    githubOrga: "digitemp",

    // Nom du dépôt dans l'organisation Github SANS SUFFIXE (-front ou -back)
    // Exemple : "gdm", "gestion-des-missions"
    // Dans le cas d'une génération de dépôt, 2 dépôts sont générés :
    // Exemple : "gdm-front" et "gdm-back"
    repositoryName: "gdm-3",

    /*
    Le nom du projet.
    Il correspond techniquement au nom d'un répertoire situé à la racine du projet
    Les choix possibles :
        * "gestion-des-transports"
        * "gestion-des-absences"
        * "gestion-des-missions"
    */
    projectName : "gestion-des-missions",

    // activation de la génération des issues pour un projet
    // les issues sont générés uniquement dans le projet "front"
    generateIssues: true,

    // activation de la création du dépôt
    // positionner ce paramètre à true pour créer les dépôts
    createRepository: true,

    // configuration du fichier Jenkinsfile
    jenkinsfile : {
        front: {
            // Jenkinsfile : BACKEND_PROD
            // Url du backend de production vue par l'application front
            // Ne pas modifier pour le Jenkins Diginamic Nantes
            backendProdUrlMapping: {
                "gestion-des-transports": "https://transports-back.cleverapps.io",
                "gestion-des-missions": "https://missions-back.cleverapps.io",
                "gestion-des-absences": "https://absences-back.cleverapps.io"
            }
        },
        back: {
            // Jenkinsfile : GIT_CREDENTIAL_ID
            // Ne pas modifier pour le Jenkins Diginamic Nantes
            jenkinsfileGitCredentialId: '498f56ad-08cc-4ce4-a8dc-d21027509ca5',

            // Jenkinsfile : PROD_GIT
            // mapping application <> git clevercloud
            // Ne pas modifier pour le CleverCloud Diginamic Nantes
            jenkinsfileUrlCleverCloud: {
                'gestion-des-transports': 'git+ssh://git@push-par-clevercloud-customers.services.clever-cloud.com/app_1facdb98-c6f7-4a67-b4a5-991bfa2e7755.git',
                'gestion-des-missions': 'git+ssh://git@push-par-clevercloud-customers.services.clever-cloud.com/app_0f86d9b9-269b-40f5-a502-8f9d9bf6f9e2.git',
                'gestion-des-absences': 'git+ssh://git@push-par-clevercloud-customers.services.clever-cloud.com/app_c61ace01-afe7-4099-b6c4-c6db68dbd2f5.git'
            }
        }
    }
};

module.exports = CONFIG;