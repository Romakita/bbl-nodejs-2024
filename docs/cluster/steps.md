# Les étapes de la démonstration

Pour la réalisation de cette démonstration, nous allons suivre les étapes suivantes :

1) Créer un server HTTP qui va écouter un port fixé par variable d'env
2) Créer notre cluster qui devra créer et gérer les processus enfants
3) Lancer un scénario de test pour vérifier le comportement de notre cluster
4) Corriger notre Cluster pour améliorer sa résilience

Voici les différents fichiers pertinents de la démo :

::: code-group

<<< @/../packages/cluster/src/main.js

<<< @/../packages/cluster/src/master.js

<<< @/../packages/cluster/test/scenario.yml

:::

> Voir le [code complet](https://github.com/romakita/bbl-nodejs-workers/tree/main/packages/cluster)

## Usage

```sh
cd packages/cluster
yarn start
yarn test
```
