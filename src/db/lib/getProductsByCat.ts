import { getProducts } from "./getProducts";

export function getProductsByCat(cat, slug, length = 0) {
  const products = getProducts();

  const filteredProducts = products.filter(
    (c) =>
      c.category.toLowerCase().replace(/\s+/g, "-") === cat && c.slug !== slug
  );

  const shuffledProducts = filteredProducts.sort(() => Math.random() - 0.5);

  return length > 0 ? shuffledProducts.slice(0, length) : shuffledProducts;
}
