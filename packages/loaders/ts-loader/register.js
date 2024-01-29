import {register} from 'node:module'

register('@swc-node/register/esm', {
  parentURL: import.meta.url
})
