import React from "react";
import { ProductCard } from "../ui/Product";
import { getProductsByCat } from "@/db/lib/getProductsByCat";
import Line from "../ui/Line";

interface RelatedProductsProps {
  cat: string;
  slug: string;
  length: number;
}

const RelatedProducts = ({ cat, slug, length }: RelatedProductsProps) => {
  const related = getProductsByCat(cat, slug, length);

  if (!related || related.length === 0) {
    return <></>;
  }

  return (
    <div className="min-h-screen bg-background text-black">
      <div className="container mx-auto px-4">
        <Line href="/" title="Related Products" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-16">
          {related.map((course, index) => (
            <ProductCard
              key={index}
              product={course}
              href={`/shop/${course.slug.toLowerCase().replace(/\s+/g, "-")}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RelatedProducts;
