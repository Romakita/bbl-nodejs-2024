# Les étapes de la démonstration

Sur cette démonstration, nous verrons comment charger un fichier GraphQL en tant que module Node.js.

Voici les différents fichiers de la démo :

::: code-group

<<< @/../packages/loaders/graphql-loader/esm/register.js

<<< @/../packages/loaders/graphql-loader/esm/graphql.hook.js

<<< @/../packages/loaders/example/src/index.js

<<< @/../packages/loaders/example/src/queries/getProducts.graphql

:::

> Voir le code complet:
> - [le loader](https://github.com/romakita/bbl-nodejs-2024/tree/main/packages/loaders/graphql-loader)
> - [le code d'exemple](https://github.com/romakita/bbl-nodejs-2024/tree/main/packages/loaders/example)

## Usage

```sh
cd packages/loaders/example
yarn start:esm
```



  
