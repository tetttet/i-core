import React, { Suspense } from "react";
import { Metadata } from "next";
import ShopGlob from "./glob";
import { description, name } from "@/constant/products";

export const metadata: Metadata = {
  title: name,
  description: description,
};

const Shop = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ShopGlob />
    </Suspense>
  );
};

export default Shop;
