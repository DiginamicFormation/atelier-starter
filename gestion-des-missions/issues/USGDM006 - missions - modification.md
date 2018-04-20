En tant que collaborateur (employé, manager ou administrateur) j'ai la possibilité de modifier une demande d'absence.

* [ ] Une mission est constituée des attributs suivants:
  * Date de début
  * Date de fin
  * Nature (conseil, expertise technique, formation):
    * Un attribut indiquant si la mission est facturée ou non
    * Un attribut indiquant si la mission donne lieu au versement d'une prime au collaborateur
    * Un TJM en € si la mission est facturée
    * Un pourcentage (exemple : 10%) si la mission donne lieu au versement d'une prime
  * Ville de départ
  * Ville d'arrivée
  * Transport (Avion, Covoiturage, Train, Voiture de service)
  * un statut (INITIALE, EN_ATTENTE_VALIDATION, VALIDEE, REJETEE)

* [ ] Règles métier:
  * seules les missions au statut INITIALE ou REJETEE peuvent être modifiées
  * les dates sont saisies au format DD/MM/YYYY
  * une mission ne peut pas débuter le jour même, ni dans le passé
  * si le type de transport est l'avion, une anticipation de 7 jours est exigée:
    * date de début de mission >= date jour + 7 jours calendaires
  * la date de fin est supérieure ou égale à la date de début
  * il est interdit de valider une mission qui chevauche une autre mission ou un congé
  * il est interdit de valider une mission qui commence ou finit un jour non travaillé
  * une fois modifiée la mission passe au statut INITIALE

* [ ] Je peux effectuer les actions suivantes:
  * valider la mission à condition que toutes les règles métier soient validées
  * annuler la mission auquel cas je reviens à la visualisation des demandes
  
![](https://github.com/DiginamicFormation/ressources-atelier/raw/master/gestion-des-missions/Modification.mission.png)


