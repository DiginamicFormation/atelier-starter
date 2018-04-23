
[![Build Status](https://travis-ci.org/DevInstitut/atelier-spring-angular.svg?branch=master)](https://travis-ci.org/DevInstitut/atelier-spring-angular)

# Prérequis

* Configurer une variable d'environnement `GITHUB_TOKEN`.

* Installer les dépendances.
```
npm i
```

* Configurer le fichier `config.js`.

* Personnaliser l'exécution via `.travis.yml`

```yaml
script:
  - npm run repos
  - npm run issues
```