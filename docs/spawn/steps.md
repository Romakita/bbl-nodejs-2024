# Les étapes de la démonstration

Pour la réalisation de cette démonstration, nous allons suivre les étapes suivantes :

1) Créer une application Node.js qui va émettre des logs sur la sortie `stdout` et `stderr`,
2) Créer un serveur pour recevoir nos logs et les afficher dans la console (on peut aussi les stocker dans une base de données),
3) Créer un script node.js executable qui va wrapper notre application et la lancer en arrière-plan via la fonction spawn Node.js

Voici les différents fichiers de la démo :

::: code-group

<<< @/../packages/spawn/src/app.js

<<< @/../packages/spawn/src/server.js

<<< @/../packages/spawn/bin/log-forwarder.js

:::

> Voir le [code complet](https://github.com/romakita/bbl-nodejs-2024/tree/main/packages/spawn)

## Usage

```sh
cd packages/spawn
yarn start:client:forward
yarn start:server
```

::: tip Note
Cette démonstration tente d'utiliser au maximum les API Node.js et ne nécessite pas de dépendances externes. 
Vous verrez que le code est assez simple et facile à comprendre, mais qu'il manque de fonctionnalités pour être utilisé en production.
:::


  
