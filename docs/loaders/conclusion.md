# Avantage & inconvénients
## Avantages

::: tip Sympa !
- On peut enfin charger des fichiers en tant que module Node.js, et donc on est sûr qu'il s'agit d'un singleton,
- Ce fait au chargement de Node.js dans des processus séparés,
- Permet d'étendre les fonctionnalités de Node.js,
- Plus besoin de transpiler notre code sur le disque dur en mode développement (et peut-être en production ?).
:::

## Inconvénients

::: warning Hé voué !
- C'est pour l'instant en **Release Candidate**, mais est-ce un vrai problème ?
- Il manque encore quelques fonctionnalités :
  - chargement en fonction de fichier d'environnement `.env`
  - quelques utilitaires pour simplifier la résolution des modules
  - La gestion des REPL

Voir la [Roadmap](https://github.com/nodejs/loaders#milestone-3-usability-improvements) pour plus d'informations.
::: 

## Points d'attentions

- Il faut être vigilant sur la performance de nos loaders custom au risque de ralentir le démarrage de notre application.
- L'ordre des loaders est très important.
- Chaque loader peut impacter le comportement de l'application. Il faut donc :
  - Bien tester vos hooks !
  - Gérer toutes erreurs.
  - Et surtout bien documenter son usage !

