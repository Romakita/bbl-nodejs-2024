import {register} from 'node:module'
import {pathToFileURL} from 'node:url'

register(pathToFileURL(`${import.meta.dirname}/graphql.hook.js`))
