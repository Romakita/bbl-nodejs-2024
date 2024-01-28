import {join} from 'node:path'
import cluster from 'node:cluster'
import {availableParallelism} from 'node:os'
import {logger} from './utils/logger.js'

const numCPUs = availableParallelism()
const [, , script] = process.argv

if (cluster.isPrimary) {
  // master process
  // Init workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork()
  }

  cluster.on('exit', (worker, code, signal) => {
    logger.fatal({
      event: 'worker.exit',
      pid: worker.process.pid,
      code,
      signal,
      message: `Worker ${worker.process.pid} died`
    })
  })

  logger.info({
    event: 'cluster.master.start',
    message: `Master is running`,
    available_cpu: numCPUs
  })
} else {
  import(join(process.cwd(), script))
}
