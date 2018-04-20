* [ ] L'application de gestion des missions permet à un collaborateur de gérer ses déplacements à l'extérieur de la société.

* [ ] Une mission a une nature. La nature de la mission détermine par exemple si cette dernière est facturée ou non au client. 

* [ ] Une IHM permet de gérer les différentes natures de mission et d'indiquer:
  * si la mission est facturée ou non,
  * le montant du TJM de la facturation,
  * si la mission fait l'objet du versement d'une prime ou non.

* [ ] Lorsqu'une mission est terminée, l'utilsateur a la possibilité de se faire rembourser ses frais en saisissant une note de frais.
Cette note de frais va permettre de rembourser des frais aussi divers que:
  * l'hôtel,
  * les transports,
  * la restauration, etc.

* [ ] Une vue permet également à l'utilisateur de consulter l'ensemble des primes qu'il a touché depuis le début de l'année.

* [ ] Lorsqu'un utilisateur veut saisir une future mission, il y a des règles d'anticipation qui s'appliquent. Ces règles sont rappelées dans la description des différentes user stories.

* [ ] Par ailleurs toute nouvelle mission doit être validée par le hiérarchique afin que cette mission puisse avoir lieue et notamment donner lieu à un remboursement de frais.

* [ ] Une vue spécifique réservée aux managers permet à ces derniers de valider les demandes en attente de validation.

* [ ] Enfin une vue réservée aux administrateurs permet de créer/modifier/supprimer de nouvelles natures de mission:
  * Attention, dans cette application, la nature de mission sera gérée de manière particulière avec des dates de début et de fin de validité.
  * Aucune nature de mission ne peut faire l'objet d'une suppression physique si cette dernière est utilisée. On aura recours aux suppressions dites logiques (date de fin de validité):
    * La date de début de validité est égale à la date du jour pour une nouvelle nature
    * La date de fin de validité est positionnée :
      * lorsqu'une nature est modifiée (dans ce cas une nouvelle nature est alors créée)
      * lorsqu'une nature utilisée est supprimée.
