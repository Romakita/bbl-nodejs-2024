import log from 'fancylog'
import {URL} from 'node:url'
import {Buffer} from 'node:buffer'
import http from 'node:http'

export class LogForwarder {
  #url
  #pid

  constructor ({url, pid}) {
    this.#url = url
    this.#pid = pid
  }

  info (content) {
    log.info(content)

    this.send({
      level: 'info',
      pid: this.#pid,
      content,
      time: Date.now()
    }).catch(error => {
      log.warn({
        event: 'LOG_FORWARDER_ERROR',
        message: 'Failed to send log to server',
        url: this.#url
      })
    })
  }

  error (content) {
    log.error(content)

    this.send({
      level: 'error',
      pid: this.#pid,
      content,
      time: Date.now()
    }).catch(() => {})
  }

  send (body) {
    return new Promise((resolve, reject) => {
      const postData = JSON.stringify(body)
      const urlObject = new URL(this.#url)

      const options = {
        hostname: urlObject.hostname,
        port: urlObject.port,
        path: urlObject.pathname,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Content-Length': Buffer.byteLength(postData)
        }
      }

      const req = http.request(options, resolve)

      req.on('error', reject)

      req.write(postData)
      req.end()
    })
  }
}
