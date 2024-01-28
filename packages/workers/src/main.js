import {isMainThread, Worker} from 'worker_threads'
import * as url from 'url'
import log from 'fancylog'

const __filename = url.fileURLToPath(import.meta.url)

if (isMainThread) {
  const worker = new Worker(__filename)
  worker.on('message', (msg) => {
    log.info({
      event: 'main.message',
      message: `Main received message`,
      type: msg.type,
      data: msg.chunk
    })
  })

  worker.on('error', (error) => {
    log.error({
      event: 'main.error',
      message: `Main received error`,
      error: error.message,
    })
  })

  worker.on('exit', (code) => {
    log.info(code)
  })

  worker.postMessage({
    hello: 'world'
  })
} else {
  import('./worker.js')
}
