"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { useEffect, useState } from "react";
import RelatedProducts from "@/components/sections/RelatedProducts";
import { name } from "@/constant/products";
import { getProductSlug } from "@/db/lib/getProductBySlug";

export default function ProductPage() {
  const { slug } = useParams();

  const product = getProductSlug(slug);

  useEffect(() => {
    if (product) {
      document.title = `${product.title} - ${name}`;
    }
  }, [product]);

  if (!product) {
    return <div className="container mx-auto px-4 py-8">Продукт не найден</div>;
  }

  const productMenu = product.menu || [];
  const [selectedPrice, setSelectedPrice] = useState(product.price);
  const [selectedImage, setSelectedImage] = useState(product.image[0]);

  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingProduct = cart.find(
      (item) =>
        item.slug === product.slug && item.selectedPrice === selectedPrice
    );

    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      cart.push({
        ...product,
        selectedPrice,
        quantity: 1,
      });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    // Показать кастомное уведомление с анимацией появления
    const alertBox = document.getElementById("custom-alert");
    alertBox.classList.remove("hidden", "opacity-0", "scale-95");
    alertBox.classList.add("opacity-100", "scale-100", "transition-transform");

    // Скрыть уведомление через 3 секунды
    setTimeout(() => {
      alertBox.classList.remove("opacity-100", "scale-100");
      alertBox.classList.add("opacity-0", "scale-95");
    }, 3000);
  };

  return (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100 container mx-auto px-4 py-8 text-white">
      <div className="flex gap-12 flex-col sm:flex-row">
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="lg:block flex gap-3 overflow-x-auto sm:overflow-hidden">
            {product.image.map((img, index) => (
              <Image
                width={100}
                height={100}
                key={index}
                src={`/images/${img}`}
                alt={`${product.title} Image ${index + 1}`}
                onClick={() => setSelectedImage(img)}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <Image
              width={10000}
              height={10000}
              src={`/images/${selectedImage}`}
              alt="Product"
            />
          </div>
        </div>

        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{product.title}</h1>
          <p className="mt-5 text-3xl font-medium">
            〒
            {selectedPrice.toLocaleString("kz-KZ", {
              minimumFractionDigits: 2,
            })}
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5">{product.description}</p>

          {productMenu.length > 0 && (
            <div className="flex flex-col gap-4 my-8">
              <p>Выберите конфигурацию</p>
              <div className="flex gap-2">
                {productMenu.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedPrice(option.price)}
                    className={`border py-2 px-4 ${
                      option.price === selectedPrice
                        ? "bg-black text-white"
                        : "bg-gray-100 text-black"
                    }`}
                  >
                    {option.name}
                  </button>
                ))}
              </div>
            </div>
          )}

          <button
            onClick={addToCart}
            className="bg-gray-50 text-black px-8 py-3 text-sm active:bg-gray-800 transition-all duration-300 ease-in-out rounded-md mt-5"
          >
            Добавить в корзину
          </button>
          <hr className="mt-8 sm:w-4/5" />
          <div className="text-sm text-gray-400 mt-5 flex flex-col gap-1">
            <p>Оригинальный продукт</p>
            <p>Бесплатная доставка</p>
            <p>30 дней на возврат</p>
          </div>
        </div>
      </div>

      {product.text && (
        <div className="mt-20">
          <div className="flex">
            <b className="border px-5 py-3 text-sm">Описание</b>
          </div>
          <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
            <p>{product.text}</p>
          </div>
        </div>
      )}

      <div
        id="custom-alert"
        className="rounded-xl hidden fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 text-lg shadow-md opacity-0 transition-all duration-500 scale-95"
      >
        Продукт добавлен в корзину!
      </div>

      <RelatedProducts cat={product.category} slug={product.slug} length={4} />
    </div>
  );
}
