En tant qu'administrateur j'ai la possibilité de créer une nouvelle nature de mission.

![](https://github.com/DiginamicFormation/ressources-atelier/raw/master/gestion-des-missions/modification.nature.png)

Règles métier:
* Les dates sont saisies au format DD/MM/YYYY
* On ne peut pas saisir 2 natures avec le même code et toutes les 2 en cours de validité
* On ne peut pas saisir 2 natures avec les mêmes attributs
* Tous les attributs sont obligatoires
* Si "Facturée" vaut NON alors les champs "Versement prime" et "TJM (en €)" sont masqués
* Si "Versement prime" vaut OUI :
  * alors un nouveau champ de saisie appelé %Prime permet de saisir le %.
  * dans ce cas, la valeur du % doit être inférieure à 10
* Le plafond de frais quotidien doit être strictement positif
* Lors de la validation, il y a 2 possibilités:
  * Si la nature est utilisée:
    * On souhaite conserver les valeurs précédentes de la nature. Pour se faire on va positionner une date de fin de validité = date du jour -1 pour la nature courante.
	* Les modifications seront portées par une nouvelle version de la nature avec une date de début de validité = date du jour.
  * Si la nature n'est pas utilisée:
    * On écrase la nature courante sans altérer sa date de début de validité.
  

Je peux effectuer les actions suivantes:
* valider la nouvelle nature à condition que toutes les règles métier soient validées
* annuler la création auquel cas je reviens à la visualisation des natures
