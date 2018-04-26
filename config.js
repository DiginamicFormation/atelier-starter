const CONFIG = {
    // nom de l'organisation
    // l'utilisateur ghdiginamic doit avoir les droits suffisants sur l'organisation
    githubOrga: "DiginamicFormation",

    // les dépôts concernés
    repositories: {
        // NOM DU DEPOT SUR GITHUB : PROJET ASSOCIE
        //      Exemple : "gdt" : "gestion-des-transports" signifie
        //          * qu'il y aura 2 dépôts "gdt-back" et "gdt-front"
        //          * que les issues seront générés dans le projet "gdt-front"
        "gestion-des-transports" : "gestion-des-transports",
        //"gestion-des-absences" : 'gestion-des-absences',
        //"gestion-des-missions" : 'gestion-des-missions',
    },

    // activation de la génération des issues pour un projet
    // les issues sont générés uniquement dans le projet "front"
    generateIssues: true,

    // activation de la création du dépôt
    // positionner ce paramètre à true pour créer les dépôts
    createRepository: true
};

module.exports = CONFIG;