"use client";

import { useSearchParams } from "next/navigation";
import { ProductCard } from "@/components/ui/Product";
import { getProducts } from "@/db/lib/getProducts";
import Line from "@/components/ui/Line";
import React from "react";

const ShopGlob = () => {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");

  let products = getProducts();

  if (category) {
    products = products.filter((product) => product.category === category);
  }

  return (
    <div className="min-h-screen bg-background text-black">
      <div className="container mx-auto px-4">
        <Line href="/" title="Shop Page" />

        <h2 className="text-2xl font-bold mb-4">
          {category ? `Category: ${category}` : "All Products"}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-16">
          {products.length > 0 ? (
            products.map((course, index) => (
              <ProductCard
                key={index}
                product={course}
                href={`/shop/${course.slug.toLowerCase().replace(/\s+/g, "-")}`}
              />
            ))
          ) : (
            <p className="text-gray-500">No products found in this category.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShopGlob;
