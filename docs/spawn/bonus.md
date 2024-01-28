# Bonus

Cette démonstration vous donne aussi un exemple de script qui peut être utilisé en tant pipe unix.

```shell
node src/app.js | log-p http://localhost:8000
```

Voici le code source de ce script :

<<< @/../packages/spawn/bin/log-pipe.js

::: info Info
Cette approche n'utilise pas le spawn Node.js mais est intéressante à étudier pour également transférer des logs vers un serveur.
:::

::: tip Question ?

Quelle est l'instruction qui permet de récupérer les informations envoyées par notre application Node.js ?

<details>
  <summary>Click me</summary>

```ts
#!/usr/bin/env node
const stdin = process.openStdin() // [!code focus]
import {LogForwarder} from './utils/forwarder.js'
```

`process.openStdin()` ouvre le flux d'entrée standard de Node.js et maintient le processus en vie tant que le flux est ouvert.

</details>
:::

::: warning Attention !

Cette technique a aussi une limite ! À vous de la trouver ;).

<details>
  <summary>Click me</summary>

  La limite de cette technique est que le Pipe Unix ne redirige que la sortie `stdout` et pas `stderr`. 
  Il faut donc utiliser un autre moyen pour rediriger les erreurs afin de les transférer vers le serveur de log.
</details>

:::

## Sources

- Spawn: [https://nodejs.org/api/child_process.html](https://nodejs.org/api/child_process.html)
- Send request: [https://nodejs.org/api/http.html#class-httpclientrequest](https://nodejs.org/api/http.html#class-httpclientrequest)
- Create Server: [https://nodejs.org/api/http.html#httpcreateserveroptions-requestlistener](https://nodejs.org/api/http.html#httpcreateserveroptions-requestlistener)
- Pipe unix Node.js: [https://stackoverflow.com/questions/16349706/how-to-pipe-node-js-scripts-together-using-the-unix-pipe-on-the-command-line](https://stackoverflow.com/questions/16349706/how-to-pipe-node-js-scripts-together-using-the-unix-pipe-on-the-command-line)

