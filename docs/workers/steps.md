# Les étapes de la démonstration

Sur cette démonstration, nous verrons comment fonctionne la communication entre un processus enfant et le processus principal.

Voici les différents fichiers de la démo :

::: code-group

<<< @/../packages/workers/src/main.js

<<< @/../packages/workers/src/worker.js

:::

> Voir le [code complet](https://github.com/romakita/bbl-nodejs-2024/tree/main/packages/workers)

## Usage

```sh
cd packages/spawn
yarn start
```

::: tip Note
Cette démonstration tente d'utiliser au maximum les API Node.js et ne nécessite pas de dépendances externes. 
Vous verrez que le code est assez simple et facile à comprendre, mais qu'il manque de fonctionnalités pour être utilisé en production.
:::


  
