import Link from "next/link";
import React from "react";

const footerLinks = [
  {
    title: "Shop and Learn",
    links: [
      "Mac",
      "iPad",
      "iPhone",
      "Watch",
      "TV",
      "Music",
      "AirPods",
      "HomePod",
      "iPod touch",
      "Accessories",
      "Gift Card",
    ],
  },
  {
    title: "Services",
    links: [
      "Apple Music",
      "Apple TV+",
      "Apple Fitness+",
      "Apple News+",
      "Apple Arcade",
      "iCloud",
      "Apple One",
      "Apple Card",
      "Apple Books",
      "App Store",
    ],
  },
  {
    title: "Apple Store",
    links: [
      "Find a Store",
      "Shop Online",
      "Genius Bar",
      "Today at Apple",
      "Apple Camp",
      "Apple store App",
      "Refurbished and Clearance",
      "Apple Trade In",
      "Order Status",
      "Shopping Help",
    ],
  },
  {
    title: "For Business",
    links: [
      "Apple and Business",
      "Shop and Business",
      "Apple and Education",
      "Shop for K-12",
      "Shop College",
      "Apple in Healthcare",
      "Health on Apple Watch",
      "Health Records on iPhone",
      "Shop for Government",
      "Shop for Veterans and Military",
    ],
  },
  {
    title: "Apple Values",
    links: [
      "Accessibility",
      "Education",
      "Environment",
      "Inclusion and Diversity",
      "Privacy",
      "Supplier Responsibility",
    ],
  },
];

const Footer = () => {
  return (
    <footer className="w-full bg-gray-100 p-6 md:p-10">
      <div className="max-w-7xl mx-auto flex flex-col gap-6">
        <p className="text-gray-600 text-sm text-center md:text-left">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h3 className="font-semibold text-gray-800">{column.title}</h3>
              <ul className="mt-2 space-y-1">
                {column.links.map((link, index) => (
                  <li key={index}>
                    <Link
                      href="/about"
                      className="text-gray-600 text-sm hover:underline"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-gray-600">
          More ways to shop:{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Find an Apple Store
          </a>{" "}
          or{" "}
          <a href="#" className="text-blue-600 hover:underline">
            other retailer
          </a>{" "}
          near you. Or call 1-800-MY-APPLE.
        </p>

        <div className="flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm border-t pt-4">
          <p>
            Copyright © 2025{" "}
            <span className="font-bold text-black">i`Core</span> All rights
            reserved.
          </p>
          <a href="#" className="hover:underline">
            Kazakhstan
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
