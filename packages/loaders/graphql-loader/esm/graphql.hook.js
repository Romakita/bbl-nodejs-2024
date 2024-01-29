const extensionsRegex = /\.(graphql|gql|graphqls|gqls)$/

export async function load (url, context, nextLoad) {
  if (extensionsRegex.test(url)) {
    // Load the raw source code.
    const {source: rawSource} = await nextLoad(url, {...context, format: 'module'})

    // Then transform it into a JavaScript module.
    const transformedSource = `export default \`${rawSource.toString()}\``

    return {
      format: 'module',
      shortCircuit: true,
      source: transformedSource
    }
  }

  // Let Node.js handle all other URLs.
  return nextLoad(url)
}
