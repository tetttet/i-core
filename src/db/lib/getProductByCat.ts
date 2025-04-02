import { getProducts } from "./getProducts";

export function getProductByCat(cat) {
  const products = getProducts();

  return products.find(
    (c) => c.category.toLowerCase().replace(/\s+/g, "-") === cat
  );
}
