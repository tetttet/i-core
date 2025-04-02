"use client";

import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  product: {
    image: string[];
    title: string;
    category: string;
    price: number;
    description: string;
  };
  progress?: number;
  href: string;
}

export function ProductCard({ product, href }: ProductCardProps) {
  return (
    <Link
      href={href}
      prefetch={false}
      className="group hover:no-underline flex"
    >
      <div className="bg-card rounded-xl overflow-hidden shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl hover:translate-y-[-4px] border border-border flex flex-col flex-1">
        <div className="relative w-full h-80 overflow-hidden">
          {product.image.length > 0 ? (
            <Image
              src={`/images/${product.image[0] || ""}`}
              alt={product.title || "Product Image"}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
          ) : (
            <div className="h-full w-full flex items-center justify-center bg-muted">
              <span className="text-muted-foreground">No Image Available</span>
            </div>
          )}
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
            <span className="text-sm font-medium px-3 py-1 bg-black/50 text-white rounded-full backdrop-blur-xs">
              {product.category || "Uncategorized"}
            </span>
            {product.price && typeof product.price === "number" && (
              <span className="text-white font-bold px-3 py-1 bg-black/50 dark:bg-white/20 rounded-full backdrop-blur-xs">
                {product.price === 0
                  ? "Free"
                  : `〒${product.price.toLocaleString("kz-KZ", {
                      minimumFractionDigits: 2,
                    })}`}
              </span>
            )}
          </div>
        </div>
        <div className="p-6 flex flex-col flex-1">
          <h3 className="text-xl text-white font-bold mb-2 group-hover:text-primary transition-colors duration-300">
            {product.title}
          </h3>
          <p className="text-muted-foreground mb-4 line-clamp-2 flex-1">
            {product.description}
          </p>
        </div>
      </div>
    </Link>
  );
}
