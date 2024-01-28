---
next:
  text: 'Les spawn Node.js'
  link: '/spawn/index'
---

# Introduction


Node.js propose énormément de fonctionnalités pour gérer les processus et les threads.
Dans cette présentation, nous allons nous intéresser à 3 d'entre elles :

- [Spawn](./docs/spawn/index.md): Créons notre propre log forwarder.
- [Cluster](./docs/cluster/index.md): Parallélisons nos instances Node.js
- [Workers](./docs/workers/index.md): Optimisons nos traitements coûteux !

Nous allons voir comment les utiliser et dans quels cas les utiliser.

En complément, nous allons voir comment utiliser les `Loaders` (import depuis Node.js 20) pour
charger des modules Node.js ne reposant pas sur du code JavaScript natif.

- [Les Loaders](./docs/loaders/index.md)
  - [Le require vs le loader?]()
  - [Le loader qui charge du graphql](./docs/loaders/graphql.md)

