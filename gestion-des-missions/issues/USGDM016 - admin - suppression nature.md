En tant qu'administrateur j'ai la possibilité de supprimer une nature de mission.

![](https://github.com/DiginamicFormation/ressources-atelier/raw/master/gestion-des-missions/suppression.nature.png)

Règles métier:
* Une suppression de nature n'est possible que si aucune mission n'est en cours avec cette nature au moment de la suppression
* Si la nature n'est pas utilisée, elle est supprimée physiquement.
* Si la nature est utilisée mais est supprimable, la suppression a pour effet de positionner une date de fin de validité sur la nature

Je peux effectuer les actions suivantes:
* valider la demande de suppression à condition que toutes les règles métier soient validées
* annuler la demande de suppression auquel cas je reviens à la visualisation des natures
