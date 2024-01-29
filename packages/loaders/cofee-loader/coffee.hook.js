// coffeescript-hooks.mjs
import {readFile} from 'node:fs/promises'
import {dirname, extname, resolve as resolvePath} from 'node:path'
import {fileURLToPath} from 'node:url'
import coffeescript from 'coffeescript'

const extensionsRegex = /\.(coffee|litcoffee|coffee\.md)$/

export async function load (url, context, nextLoad) {
  if (extensionsRegex.test(url)) {
    // CoffeeScript files can be either CommonJS or ES modules, so we want any
    // CoffeeScript file to be treated by Node.js the same as a .js file at the
    // same location. To determine how Node.js would interpret an arbitrary .js
    // file, search up the file system for the nearest parent package.json file
    // and read its "type" field.
    const format = await getPackageType(url)

    const {source: rawSource} = await nextLoad(url, {...context, format})
    // This hook converts CoffeeScript source code into JavaScript source code
    // for all imported CoffeeScript files.
    const transformedSource = coffeescript.compile(rawSource.toString(), url)

    return {
      format,
      shortCircuit: true,
      source: transformedSource
    }
  }

  // Let Node.js handle all other URLs.
  return nextLoad(url)
}

async function getPackageType (url) {
  // `url` is only a file path during the first iteration when passed the
  // resolved url from the load() hook
  // an actual file path from load() will contain a file extension as it's
  // required by the spec
  // this simple truthy check for whether `url` contains a file extension will
  // work for most projects but does not cover some edge-cases (such as
  // extensionless files or a url ending in a trailing space)
  const isFilePath = !!extname(url)
  // If it is a file path, get the directory it's in
  const dir = isFilePath ?
    dirname(fileURLToPath(url)) :
    url
  // Compose a file path to a package.json in the same directory,
  // which may or may not exist
  const packagePath = resolvePath(dir, 'package.json')

  // Try to read the possibly nonexistent package.json
  const type = await readFile(packagePath, {encoding: 'utf8'})
    .then((filestring) => JSON.parse(filestring).type)
    .catch((err) => {
      if (err?.code !== 'ENOENT') console.error(err)
    })

  // Ff package.json existed and contained a `type` field with a value, voila
  if (type) return type

  // Otherwise, (if not at the root) continue checking the next directory up
  // If at the root, stop and return false
  return dir.length > 1 && getPackageType(resolvePath(dir, '..'))
}

