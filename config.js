const CONFIG = {

    // nom de l'organisation
    // l'utilisateur ghdiginamic doit avoir les droits suffisants sur l'organisation
    githubOrga: "digitemp",

    // Nom du dépôt dans l'organisation Github
    // Exemple : "gdm", "gestion-des-missions"
    repositoryName: "gdm",

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
    createRepository: true
};

module.exports = CONFIG;