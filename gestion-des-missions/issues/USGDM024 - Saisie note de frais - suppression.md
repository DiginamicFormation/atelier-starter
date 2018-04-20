* [ ] En tant que collaborateur, quel que soit mon profil, j'ai la possibilité de supprimer une ligne de frais dans une note de frais.

![](https://github.com/DiginamicFormation/ressources-atelier/raw/master/gestion-des-missions/Saisie.frais.suppression.png)

* une ligne de frais est constituée des attributs suivants:
  * Date
  * Nature
  * Montant

Règles métier:
  * On ne peut pas saisir 2 lignes de frais identifiques (même couple date/nature)  
  * La date de la ligne de frais doit être comprise entre la date de début et la date de fin de mission
  * Le montant de la ligne de frais est strictement positif
  
A partir de cette vue de je peux effectuer les actions suivantes:
* Valider la suppression.
* Annuler la suppression.

