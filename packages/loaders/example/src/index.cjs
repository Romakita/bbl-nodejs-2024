const {createDirectus, staticToken, graphql} = require('@directus/sdk')
const getProductsQuery = require('./queries/getProducts.graphql')

const client = createDirectus(process.env.CMS_DIRECTUS_URL).with(staticToken(process.env.CMS_DIRECTUS_TOKEN)).with(graphql())

function getProducts () {
  console.log('Loading products from CMS...')
  return client.query(getProductsQuery)
}

const products = await getProducts()

console.log(products)
