import {getAllProducts} from "./queries/getProducts.graphql";
import {createDirectus, graphql, staticToken} from "@directus/sdk";

const client = createDirectus(process.env.CMS_DIRECTUS_URL!)
  .with(staticToken(process.env.CMS_DIRECTUS_TOKEN!))
  .with(graphql());

function getProducts() {
  console.log("Loading products from CMS...");
  return client.query(getAllProducts);
}

const products = await getProducts();

console.log(products);
