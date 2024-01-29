import {parse} from 'graphql'
import fs from 'node:fs/promises'
import {basename, dirname, join} from 'node:path'

const extensionsRegex = /\.(graphql|gql|graphqls|gqls)$/

/**
 * Emit typings file to allow importing graphql in a typescript project
 * @param url
 * @param typings
 */
function emitTypings (url, typings) {
  const filename = basename(url)
  const dir = dirname(url)
  const dest = join(dir, filename.replace(extensionsRegex, '.d.ts')).split('file:')[1]

  const content = `
declare module '*/${filename}' {
  ${typings}
}`

  return fs.writeFile(dest, content, {encoding: 'utf-8'})
}

function transformSource (parsedSource) {
  const {exports, typings} = parsedSource.definitions.reduce(({exports, typings}, definition) => {
    const def = `export const ${definition.name.value}`

    return {
      exports: exports.concat(`${def} = \`${definition.name.loc.source.body}\``),
      typings: typings.concat(`${def}: string`)
    }
  }, {
    typings: [],
    exports: []
  })

  return {
    typings: typings.join('\n\t'),
    exports: exports.join('\n')
  }
}

export async function load (url, context, nextLoad) {
  if (extensionsRegex.test(url)) {
    const {source: rawSource} = await nextLoad(url, {...context, format: 'module'})

    // 1 - Parse graphql source code using graphql parser
    const parsedSource = parse(rawSource.toString())

    // 2 - Transform graphql source code into javascript source code and returns typings also
    const {typings, exports} = transformSource(parsedSource)

    // 3 - Emit typings file on the fly
    emitTypings(url, typings).catch((er) => console.warn(er))

    // 4 - Return transformed source code
    return {
      format: 'module',
      shortCircuit: true,
      source: exports
    }
  }

  // Let Node.js handle all other URLs.
  return nextLoad(url)
}
