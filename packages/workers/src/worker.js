import {parentPort} from 'worker_threads'
import log from 'fancylog'

parentPort.on('message', (data) => {
  log.info({
    event: 'worker.message',
    message: `Worker received message ${data.hello}`,
    data
  })

  let i = 0
  setInterval(() => {
    parentPort.postMessage({type: 'chunk', chunk: `hello ${i++}`})
  }, 1000)
})
