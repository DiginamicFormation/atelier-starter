En tant qu'employé j'ai la possibilité de visualiser l'ensemble de mes missions et congés dans un composant de type calendrier.

* Les absences sont consultables:
![](https://github.com/DiginamicFormation/ressources-atelier/raw/master/gestion-des-missions/Planning.missions.png)

* Les missions sont consultables:
![](https://github.com/DiginamicFormation/ressources-atelier/raw/master/gestion-des-missions/Planning.missions.janvier.png)

Règles métier:
* Le planning affiche les missions et absences pour un couple mois/année
* les jours feriés apparaissent dans une couleur différente des absences et missions

Je peux effectuer les actions suivantes:
* changer d'année en cliquant sur une double flêche (gauche: -1, droite: +1)
* changer de mois en cliquant sur une flêche simple (gauche: -1, droite: +1).
  * si l'utilisateur clique sur la flêche droite alors que le mois affiché est décembre alors il passe en janvier de l'année suivante
  * si l'utilisateur clique sur la flêche gauche alors que le mois affiché est janvier alors il passe en décembre de l'année précédente
