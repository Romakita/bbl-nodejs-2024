import http from 'node:http'
import jsonBody from 'body/json.js'
import {promisify} from 'node:util'

const getBody = promisify(jsonBody)

// Create a local server to receive data from
const server = http.createServer()

// Listen to the request event
server.on('request', async (request, response) => {
  if (request.method === 'POST') {
    const body = await getBody(request, response, {})

    if (body.level) {
      console.log(`[${body.level.toUpperCase()}] -`, JSON.stringify({
        time: Date.now(),
        headers: request.headers,
        content: body
      }))
    }

    response.writeHead(201, {'content-type': 'application/json'})
    response.end(JSON.stringify({status: 'Created'}))
    return
  }

  response.writeHead(404, {'content-type': 'application/json'})
  response.end(JSON.stringify({status: 'Created'}))
})

server.listen(8000, () => {
  console.log('Server listening on port 8000')
})
