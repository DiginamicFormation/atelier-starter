En tant que collaborateur (employé, manager ou administrateur) j'ai accès à la liste de mes missions. 

* [ ] Une mission est constituée des attributs suivants:
  * Date de début
  * Date de fin
  * Nature (conseil, expertise technique, formation); il est possible d'ajouter de nouvelles natures :
    * Un attribut indiquant si la mission est facturée ou non
    * Un attribut indiquant si la mission donne lieu au versement d'une prime au collaborateur
    * Un TJM en € si la mission est facturée
    * Un pourcentage (exemple : 10%) si la mission donne lieu au versement d'une prime
  * Ville de départ
  * Ville d'arrivée
  * Transport (Avion, Covoiturage, Train, Voiture de service)
  * un statut (INITIALE, EN_ATTENTE_VALIDATION, VALIDEE, REJETEE)
  * montant prime en € (différent de 0 uniquement pour les missions avec versement de prime)

* [ ] Important: les primes sont calculées par le traitement de nuit uniquement pour les missions échues.
* [ ] Important: les collaborateurs peuvent saisir une note de frais uniquement pour les missions échues.

* [ ] Le tableau des missions affichent :
  * la liste des missions de l'utilisateur
  * la liste des absences fournie par l'application "Gestion des absences"
  
* [ ] A partir de cette liste de missions je peux effectuer les actions suivantes:
  * ajouter une nouvelle mission
  * modifier une mission au statut INITIALE ou REJETEE
  * supprimer une mission
  * visualiser une absence qui n'est pas une mission. Il s'agit d'un lien vers l'application Gestion des absences.
  
* [ ] Workflow d'une mission
  * INITIALE: une mission qui vient d'être créée est au statut INITIALE
  * EN_ATTENTE_VALIDATION: le traitement de nuit passent toutes les missions du statut INITIALE au statut EN_ATTENTE_VALIDATION
  * VALIDEE: si le manager a validé la mission
  * REJETEE: si le manager a rejeté la mission
  
![](https://github.com/DiginamicFormation/ressources-atelier/raw/master/gestion-des-missions/Gestion.des.missions.png)




