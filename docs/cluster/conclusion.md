# Avantage & inconvénients

![cluster](assets/cluster.png)

## Avantages

::: tip Sympa !
- Permet la scalabilité d'une application HTTP,
- Node.js gère automatiquement le load balancing,
- Permet de définir les workers dédiés à des tâches spécifiques ou protocoles spécifiques (Http, Https, etc.),
- Permet de monitorer les processus enfants,
- Meilleure résilience de l'application, si correctement managé !
- Permet de communiquer entre les processus enfants et le processus principal via IPC (Inter Process Communication)
:::

## Inconvénients

::: warning Moins sympa !
- Le cluster s'arrête s'il n'y a plus de processus enfants,
- Le démarrage d'un processus enfant est lent et impact temporairement les performances de l'application
:::

Il est très important de bien gérer les exceptions au niveau de notre application HTTP afin d'éviter que le cluster s'arrête inutilement.

## Modules NPM

- [PM2](https://www.npmjs.com/package/pm2)
