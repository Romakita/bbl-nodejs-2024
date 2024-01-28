import http from 'node:http'
import {v4} from 'uuid'
import {logger} from './logger.js'

export class Server {
  #layers = new Map()
  #raw

  constructor () {
    this.#raw = http.createServer(this.onRequest)
  }

  onRequest = async (req, res) => {
    const context = this.createContext(req, res)

    try {
      logger.info({
        event: 'request.start',
        id: context.id,
        pid: process.pid,
        method: context.request.method,
        url: context.request.url
      })

      const handler = this.#layers.get(`${context.request.method}:${context.request.url}`)

      if (!handler) {
        context.response.status(404).body({
          name: 'Not Found',
          message: `Resource ${context.request.method} ${context.request.url} not found`
        })
      }

      const result = await handler(context)

      context.response.body(result)
      context.response.end()

      logger.info({
        event: 'request.end',
        id: context.id,
        method: context.request.method,
        url: context.request.url,
        body: result,
        statusCode: context.response.statusCode,
        headers: context.response.headers
      })
    } catch (er) {
      logger.error({
        message: er.message,
        stack: er.stack
      })

      context.response.status(500).body({
        name: 'Internal Server Error',
        message: er.message
      })
    }
  }

  createContext (req, res) {
    let body = null
    const id = v4()
    let statusCode = 200

    return {
      get id () {
        return id
      },
      request: {
        get raw () {
          return req
        },
        method: req.method,
        url: req.url
      },
      response: {
        get raw () {
          return res
        },
        get statusCode () {
          return statusCode
        },
        headers: {
          'Content-Type': 'application/json'
        },
        type (type) {
          this.headers['Content-Type'] = type
          return this
        },
        status (s) {
          statusCode = s
          return this
        },
        body (result) {
          body = result
          return this
        },
        end () {
          res.writeHead(this.statusCode, this.headers)
          res.end(JSON.stringify(body))
          return this
        }
      }
    }
  }

  get (path, handler) {
    this.#layers.set(`GET:${path}`, handler)
    return this
  }

  listen (port) {
    return new Promise((resolve) => {
      this.#raw.listen(port, () => {
        resolve(this.#raw.address())
      })
    })
  }
}
