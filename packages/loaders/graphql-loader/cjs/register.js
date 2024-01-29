const {readFileSync} = require('fs')

const VALID_EXTENSIONS = ['graphql', 'graphqls', 'gql', 'gqls']

function handleModule (m, filename) {
  m.exports = readFileSync(filename, 'utf-8')
}

VALID_EXTENSIONS.forEach((ext) => {
  require.extensions[`.${ext}`] = handleModule
})
