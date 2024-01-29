# Les loaders

Les loaders sont des scripts qui permettent de charger des modules en Node.js. 
Ils vont nous permettre de charger des modules qui ne sont pas des fichiers JavaScript, 
comme le font déjà les loaders de nos bons vieux bundlers (Webpack, Rollup, Vite, etc.).

## Le legacy

En commonjs, il n'y a évidement pas de notion de loader. Mais nous pouvions tout de
même tout transpiler à la volée des fichiers CoffeeScript, TypeScript, etc. en utilisant
le `require.extensions`.

Example :
```js
const fs = require('fs')
const ts = require('typescript')

require.extensions['.ts'] = function handle (m, filename) {
  const content = fs.readFileSync(filename, 'utf8')
  
  // vraiment basique mais c'est l'idée !
  return ts.transpileModule(content, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS
    }
  })
}
```
C'est ce que fait `ts-node` lors que l'on utilise le flag `--required`:

```shell
node --require ts-node/register --require tsconfig-paths/register src/index.ts
```


::: warning Il y a tout même des inconvénients

- C'est synchrone ! Donc lent !
- Ça ne fonctionne qu'avec les modules CommonJs.
- Ce n'est pas très propre ! Les dépendances tel TypeScript sont chargées dans le contexte global.


Donc à éviter en production !
:::

## Le principe

La version pour les modules ESM fournit un mécanisme beaucoup plus élégant basé sur les hooks, et présentes beaucoup
d'avantages :

- C'est asynchrone !
- Les modules sont chargés dans un contexte isolé (worker threads).
- Ils peuvent communiquer entre eux. (je veux bien voir le cas d'usage !)
- Ils peuvent être chainés.

::: tip Note
Depuis la version 20, l'api est passées en Release Candidate. Vous pouvez suivre la roadmap ici :

https://github.com/nodejs/loaders
:::

Voici un exemple de ligne de commande avec un enchainement de loaders :

```shell
node --import babel --import coffeescript --import https ./index.coffee
```

On pourrait le traduire en Js par :

```js
babel(coffeescript(https(input)))
```

### La phase register

La phase register permet de s'abonner à un loader. Elle est appelée avant la phase de résolution. 
Si on reprenait notre exemple précédent, on pourrait avoir cette séquence d'appel :

```js
import { register } from 'node:module';

register('https', import.meta.url);
register('coffescript', import.meta.url);
register('babel', import.meta.url);

await import("./index.coffee")
```

### Les hooks

Un loader peut s'abonner à 3 hooks :

```js
export async function initialize({ number, port }) {
  // Receives data from `register`.
}

export async function resolve(specifier, context, nextResolve) {
  // Take an `import` or `require` specifier and resolve it to a URL.
}

export async function load(url, context, nextLoad) {
  // Take a resolved URL and return the source code to be evaluated.
} 
```

Le deux plus important sont `resolve` et `load`. Le premier permet de résoudre l'URL d'un module, et le second de le charger.
Mais le plus simple pour comprendre c'est une démo !
