---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Node.js"
  text: "Spawn, Cluster, Workers et Loaders"
  tagline: "Découvrons ensemble ces fonctionnalités parfois obscures 🫣"
  image:
    src: /screen.png
    alt: Node.js
  actions:
    - theme: brand
      text: Introduction
      link: /introduction

features:
  - title: Child Process (Spawn)
    details: Créons notre propre log forwarder.
    link: /spawn/index.md
  - title: Cluster
    details: Parallélisons nos instances Node.js
    link: /cluster/index.md
  - title: Workers
    details: Optimisons nos traitements coûteux !
    link: /workers/index.md
  - title: Loaders
    details: La solution pour le chargement de module non Js !
    link: /loaders/index.md
---



