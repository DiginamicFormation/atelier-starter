* [ ] En tant qu'administrateur j'ai accès à la liste des natures. 

![](https://github.com/DiginamicFormation/ressources-atelier/raw/master/gestion-des-missions/Natures.mission.png)

Le tableau affiche indistinctement les natures en cours de validité et échues. Une mission échue est une mission dont la date de fin de validité est positionnée et dont la valeur est inférieure à la date du jour. Notons par ailleurs que le système rend impossible le positionnement d'une date de fin de validité dans le futur.

Une nature de mission est constituée des attributs suivants:
  * Un attribut indiquant si la mission est facturée ou non
  * Un attribut indiquant si la mission donne lieu au versement d'une prime au collaborateur
  * Un TJM en € si la mission est facturée
  * Un pourcentage (exemple : 10%) si la mission donne lieu au versement d'une prime
  * Un attribut indiquant le plafond quotidien en € pour la note de frais (exemple: 150€/jour)
  * Un attribut indiquant si le plafond quotidien est dépassable ou non
    * Si un plafond est dépassable, cela signifie que l'employé peut dépasser le plafond de la note de frais mais que l'excédent sera prélevé sur le montant de sa prime
	* Si un plafond n'est pas dépassable, cela signifie que l'employé ne peut pas saisir de note de frais dont le montant excèderai le plafond. Ce sera le cas notamment pour les missions de type formation.
  * Une date de début de validité, obligatoire
  * Une date de fin de validité, facultative

Le calcul des primes et des dépassements de prime est effectué par le traitement de nuit, pour les missions terminées uniquement.
	
Le tableau affiche les informations suivantes:
* Nature 
* Facturée (OUI/NON)
* Prime (OUI/NON)
* TJM (en €)
* %Prime
* Plafond frais
* Dépt. frais (OUI/NON)
* Une colonne Actions

A partir de cette liste l'administrateur peut effectuer les actions suivantes:
* ajouter une nature de mission
* modifier une nature de mission
* supprimer une nature de mission non utilisée
