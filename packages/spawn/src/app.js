import {setInterval} from 'node:timers'

let AUTO_INC = 0

setInterval(() => {
  if (AUTO_INC % 10) {
    console.log(`Hello World from ${AUTO_INC++}`)
  } else {
    console.error(`Error World from ${AUTO_INC++}`)
  }
}, 500)

console.log('Starting interval...')
