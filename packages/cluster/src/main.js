import process from 'node:process'
import {Server} from './utils/Server.js'
import {logger} from './utils/logger.js'

function random () {
  return Math.floor(Math.random() * 50)
}

const numbers = [
  random(),
  random(),
  random(),
  random()
]
export default new Server()
  .get('/', async (ctx) => {

    if (numbers.includes(random())) {
      process.exit(-1)
    }

    return {
      id: ctx.id,
      message: 'Hello World',
      pid: process.pid
    }
  })
  .listen(process.env.PORT)
  .then((address) => {
    logger.info(`Server started and listening on http://${address.address}:${address.port}`)
  })
