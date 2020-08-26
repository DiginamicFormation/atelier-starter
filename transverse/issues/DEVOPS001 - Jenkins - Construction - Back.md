Créer une configuration Jenkins qui permet de vérifier que le projet `backend` se construit (`mvn clean package`).

# Critères d'acceptation

* [ ] Quelle que soit la branche, lorsque l'application ne compile pas, une notification est envoyée dans le système de communication du groupe (Slack, Discord, ...)
* [ ] Les messages envoyés dans le système de communication du groupe ont un code couleur (`rouge` pour les erreurs, `vert` pour les succès)
* [ ] Les messages envoyés dans le système de communication du groupe affichent le nom du job, l'identifiant du commit et le lien vers la construction.
* [ ] Les messages de succès ne sont envoyés uniquement pour la branche principale

