import { getProducts } from "./getProducts";

export function getProductSlug(slug: string) {
  const products = getProducts();

  return products.find(
    (c) => c.slug.toLowerCase().replace(/\s+/g, "-") === slug
  );
}
