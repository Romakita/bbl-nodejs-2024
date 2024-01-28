#!/usr/bin/env node
import {spawn} from 'child_process'
import log from 'fancylog'
import {LogForwarder} from './utils/forwarder.js'

const [, , script, , url, ...args] = process.argv

const child = spawn('node', [script, args])

const logForwarder = new LogForwarder({
  url,
  pid: child.pid
})

child.stdout.on('data', data => {
  const content = data.toString().trim()

  if (content) {
    logForwarder.info(content)
  }
})

child.stderr.on('data', data => {
  const content = data.toString().trim()

  if (content) {
    logForwarder.error(content)
  }
})

child.on('exit', (code) => {
  if (code !== 0) {
    log.error(`Process exited with code ${code}`)
  }
})
