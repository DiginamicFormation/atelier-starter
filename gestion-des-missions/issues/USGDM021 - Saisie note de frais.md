* [ ] En tant que collaborateur, quel que soit mon profil, j'ai la possibilité de saisir une note de frais.

![](https://github.com/DiginamicFormation/ressources-atelier/raw/master/gestion-des-missions/Saisie.frais.png)

* [ ] Cette vue est accessible depuis la vue de gestion des notes de frais
  * dans la partie haute de la vue, l'ensemble des informations relatives à la mission sont récapitulées
    * le montant de la prime est celui calculé par le traitement de nuit
    * en revanche la déduction est calculée lors de la validation de la note de frais.
	* Modalités de calcul: Si le plafond de frais a été dépassé alors une déduction s'applique:
      * déduction = somme des frais - (plafond de frais)*(nombre de jours de la mission)
      * le montant de la prime final avec prise en compte de cette déduction est calculé par le traitement de nuit.	
  * Dans le partie basse, la liste des lignes de frais saisies par l'utilisateur sont affichées.
    * Date
	* Nature
	* Montant

Règles métier:
  * Si la nature de la mission interdit le dépassement, la note de frais ne peut pas être validée. Attention donc à ne pas stocker en base les lignes de frais tant que la note de frais n'est pas validée.
  * Si la nature de la mission autorise le dépassement, une déduction éventuelle est calculée
	
A partir de cette vue de je peux effectuer les actions suivantes:
* Valider la note de frais.
* Ajouter une ligne de frais.
* Modifier une ligne de frais.
* Supprimer une ligne de frais.

