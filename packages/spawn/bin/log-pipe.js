#!/usr/bin/env node
const stdin = process.openStdin()
import {LogForwarder} from './utils/forwarder.js'

const [,, url] = process.argv

const logForwarder = new LogForwarder({
  url,
  pid: ""
});

stdin.on('data',  (chunk)  => {
  logForwarder.info(chunk.toString().trim())
})
