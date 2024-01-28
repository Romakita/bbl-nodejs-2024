# Avantage & inconvénients

![worker threads](./assets/worker-threads.png)

## Avantages

::: tip Sympa !
- Permet de traiter des tâches lourdes sans bloquer le processus principal,
- Permet de communiquer entre les threads et le processus principal via post message,
- Mémoire partagée entre le processus principal et les workers,
- On peut créer les workers à la demande,
- On peut splitter le traitement sur plusieurs threads (forcément !).
:::

## Inconvénients

::: warning Hé voué !
- La consommation mémoire fortement augmente avec le nombre de threads,
- L'usage des `SharedArrayBuffer` et `ArrayBuffer` n'est pas simple à aborder,
- La création d'un worker est relativement lent.
::: 

## Point d'attention

Les worker threads peuvent sembler être une solution miracle à un script lent. Mais il ne sera
pas ne sera pas la solution dans le cas d'un script massivement asynchrone.

## Alternatives ?

Il est possible d'utiliser les extensions natives de Node.js pour créer du code plus performant
en C++ ou Rust. Mais cela nécessite de connaître ces langages.
