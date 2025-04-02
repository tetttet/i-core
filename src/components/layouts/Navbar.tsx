"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Store,
  Mac,
  Phone,
  Support,
  Watch,
  Pad,
  AirPods,
  Galaxy,
  Xiaomi,
} from "@/components/hooks/menuItem";
import { Menu, CircleX, Trash } from "lucide-react";

const Navbar = () => {
  type CartItem = {
    quantity: number;
    title: string;
    selectedPrice: number; // Ensure this property exists for the price calculation
  };

  const [activeItem, setActiveItem] = useState<
    | "Store"
    | "Mac"
    | "iPhone"
    | "Watch"
    | "iPad"
    | "AirPods"
    | "Galaxy"
    | "Xiaomi"
    | "Support"
    | null
  >(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]); // Указываем тип CartItem[] для начального состояния
  const [cartCount, setCartCount] = useState<number>(0);

  const logo = "/logo-removebg.png";
  const search = "/images/search.svg";
  const bag = "/images/bag.svg";

  const navLists: { name: "Store" | "Mac" | "iPhone" | "Watch" | "iPad" | "AirPods" | "Galaxy" | "Xiaomi" | "Support"; link: string }[] = [
      { name: "Store", link: "/shop" },
      { name: "Mac", link: "/shop?category=mac" },
      { name: "iPhone", link: "/shop?category=iphone" },
      { name: "Watch", link: "/shop?category=apple-watch" },
      { name: "iPad", link: "/shop?category=ipad" },
      { name: "AirPods", link: "/shop?category=airpods" },
      { name: "Galaxy", link: "/shop?category=galaxy" },
      { name: "Xiaomi", link: "/shop?category=xiaomi" },
      { name: "Support", link: "/shop?category=support" },
  ];

  useEffect(() => {
    const cartData = localStorage.getItem("cart");
    const cart: CartItem[] = cartData ? JSON.parse(cartData) : [];
    const totalItems = cart.reduce(
      (total: number, item: CartItem) => total + item.quantity,
      0
    );
    setCartCount(totalItems);
  }, []);

  useEffect(() => {
    const cartData = localStorage.getItem("cart");
    const cart: CartItem[] = cartData ? JSON.parse(cartData) : [];
    setCartItems(cart);
  }, []);

  const removeItem = (index: number) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };
  
  return (
    <div className="sticky top-0 z-50">
      <header
        className="w-full primary-bg-black py-5 sm:px-10 px-5 flex justify-between items-center relative"
        onMouseLeave={() => setActiveItem(null)}
      >
        <nav className="flex w-full max-w-screen-xl mx-auto">
          <Link href="/">
            <Image src={logo} priority alt="Apple" width={100} height={28} />
          </Link>

          <div className="flex-1 flex justify-center items-center max-sm:hidden">
            {navLists.map(({ name, link }) => (
              <Link key={name} href={link}>
                <div
                  className="px-5 text-sm cursor-pointer primary-tx-gray transition-all relative"
                  onMouseEnter={() => setActiveItem(name)}
                >
                  {name}
                </div>
              </Link>
            ))}
          </div>

          {/* Иконки справа */}
          <div className="flex items-center gap-7 max-sm:justify-end max-sm:flex-1">
            <Image src={search} alt="search" width={18} height={18} />
            <div className="relative" onClick={() => setCartOpen(true)}>
              <Image src={bag} alt="bag" width={18} height={18} />
              {cartCount > 0 && (
                <span className="ml-2 mt-2 absolute top-0 text-xs text-white bg-red-600 rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </div>
            <Menu
              onClick={() => setSidebarOpen(true)}
              width={24}
              height={24}
              className="hidden max-sm:block"
            />
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {activeItem && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute top-[100%] left-0 w-full shadow-lg backdrop-blur-3xl bg-opacity-50"
            onMouseEnter={() => setActiveItem(activeItem)}
            onMouseLeave={() => setActiveItem(null)}
          >
            {activeItem === "Store" && <Store />}
            {activeItem === "Mac" && <Mac />}
            {activeItem === "iPhone" && <Phone />}
            {activeItem === "Watch" && <Watch />}
            {activeItem === "iPad" && <Pad />}
            {activeItem === "AirPods" && <AirPods />}
            {activeItem === "Galaxy" && <Galaxy />}
            {activeItem === "Xiaomi" && <Xiaomi />}
            {activeItem === "Support" && <Support />}
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {cartOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed top-0 right-0 w-full lg:w-1/4 h-full primary-bg-black shadow-lg z-50 p-5"
          >
            <div className="flex justify-between items-center mb-5">
              <span className="text-lg font-bold text-white">Корзина</span>
              <CircleX
                onClick={() => setCartOpen(false)}
                width={24}
                height={24}
                className="cursor-pointer text-white"
              />
            </div>

            {cartItems.length === 0 ? (
              <p className="text-white">Корзина пуста</p>
            ) : (
              <div className="text-white">
                <ul className="space-y-4">
                  {cartItems.map((item, index) => (
                    <li
                      key={index}
                      className="flex justify-between items-center"
                    >
                      <div className="flex-1">
                        <p className="font-semibold">{item.title}</p>
                        <p>
                          {item.selectedPrice.toLocaleString("kz-KZ", {
                            minimumFractionDigits: 2,
                          })}
                          ₸
                        </p>
                      </div>
                      <div className="text-gray-400 border-gray-500 border-2 w-10 h-8 items-center justify-center flex">
                        <p>{item.quantity}</p>
                      </div>
                      <button
                        onClick={() => removeItem(index)}
                        className="text-red-500 hover:text-red-700 border-red-500 border-2 ml-4 w-10 h-8 items-center justify-center flex"
                      >
                        <Trash width={16} height={16} />
                      </button>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 border-t border-gray-400 pt-3 flex justify-between">
                  <span className="font-semibold">Итого: </span>
                  <span className="font-semibold">
                    {cartItems
                      .reduce(
                        (total, item) =>
                          total + item.selectedPrice * item.quantity,
                        0
                      )
                      .toLocaleString("kz-KZ", { minimumFractionDigits: 2 })}
                    ₸
                  </span>
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed top-0 right-0 w-3/4 h-full bg-black shadow-lg z-50 p-5"
          >
            <div className="flex justify-between items-center mb-5">
              <span className="text-lg font-bold">Меню</span>
              <CircleX
                onClick={() => setSidebarOpen(false)}
                width={24}
                height={24}
                className="cursor-pointer"
              />
            </div>
            <ul className="space-y-4">
              {navLists.map(({ name, link }) => (
                <li key={name} className="text-base text-white cursor-pointer">
                  <Link href={link} onClick={() => setSidebarOpen(false)}>
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
