# Bonus

J'ai ajouté quelques loaders bonus histoire de vous montrer ce qu'il est possible de faire avec les loaders:

## Loader CommonJs & ESM GraphQL

Exemple de loader qui fonctionne à la fois avec CommonJs et ESM.

::: code-group

<<< @/../packages/loaders/graphql-loader/cjs/register.js [CommonJs]

<<< @/../packages/loaders/graphql-loader/esm/register.js [ESM]

<<< @/../packages/loaders/graphql-loader/esm/graphql.hook.js [ESM Hook]

:::

L'astuce est d'utiliser le `package.json` pour définir quoi utiliser en fonction de l'environnement :

```json
{
  "name": "@bbl/graphql-loader",
  "version": "1.0.0",
  "description": "GraphQL loader for Node.js",
  "exports": {
    "./register": {
      "import": "./esm/register.js",
      "default": "./cjs/register.js"
    }
  }
}

```

## La version GraphQL avancée

Ce loader parse les fichiers `.graphql` en utilisant cette fois la library `graphql`. 
Il transforme ensuite le code et exporte les fonctions nommées. En complément, il génère le typage des fonctions pour TypeScript.

::: code-group

<<< @/../packages/loaders/graphql-loader-advanced/graphql.hook.js

<<< @/../packages/loaders/graphql-loader-advanced/register.js

:::

## Loader SWC

Ce loader permet de transformer le code TypeScript en JavaScript en utilisant SWC.

<<< @/../packages/loaders/ts-loader/register.js

::: info Note
~~Actuellement, SWC support la version `--loader` mais pas encore la version `--import`.~~ (Résolue : https://github.com/swc-project/swc-node/pull/748/files)
:::

::: details Différence entre `--loader` et `--import` ?
Le flag `--import` impose le passage par la function `register` de `node:module`.
Là où le flag `--loader` utilise directement le fichier avec nos hooks. Cependant,
cette version ne permet pas le chainage de loader.
:::
