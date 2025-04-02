import { motion } from "framer-motion";
import {
  sections,
  Macsections,
  IphoneSections,
  WatchSections,
  IpadSection,
  AirPodsSections,
  GalaxySections,
  XiaomiSections,
} from "@/constant/products";

const Store = () => {
  return (
    <div className="w-full primary-bg-black py-5 sm:px-10 px-5 flex justify-between items-center relative">
      <div className="container flex w-full screen-max-width mb-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-3/6">
          {sections.map(({ title, items }, sectionIndex) => (
            <div
              key={title}
              className={`${
                sectionIndex === 0
                  ? "col-span-1"
                  : "col-span-1 md:col-span-1 md:ml-4"
              }`}
            >
              <h3 className="text-gray-400 text-[12px] uppercase mb-2">
                {title}
              </h3>
              <ul className="space-y-2">
                {items.map(({ name, link }, index) => (
                  <motion.li
                    key={name}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className={`${
                      name === "Shop the Latest" ? "font-semibold" : ""
                    } ${sectionIndex === 0 ? "text-xl" : "text-sm"}`}
                  >
                    <a
                      href={link}
                      className="hover:text-white primary-tx-white"
                    >
                      {name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Mac = () => {
  return (
    <div className="w-full primary-bg-black py-5 sm:px-10 px-5 flex justify-between items-center relative">
      <div className="container flex w-full screen-max-width mb-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {Macsections.map(({ title, items }, sectionIndex) => (
            <div
              key={title}
              className={`${
                sectionIndex === 0
                  ? "col-span-1"
                  : "col-span-1 md:col-span-1 md:ml-4"
              }`}
            >
              <h3 className="text-gray-400 text-[12px] uppercase mb-2">
                {title}
              </h3>
              <ul className="space-y-2">
                {items.map(({ name, link }, index) => (
                  <motion.li
                    key={name}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className={`${
                      name === "Shop the Latest" ? "font-semibold" : ""
                    } ${sectionIndex === 0 ? "text-xl" : "text-sm"}`}
                  >
                    <a
                      href={link}
                      className="hover:text-white primary-tx-white"
                    >
                      {name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Phone = () => {
  return (
    <div className="w-full primary-bg-black py-5 sm:px-10 px-5 flex justify-between items-center relative">
      <div className="container flex w-full screen-max-width mb-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {IphoneSections.map(({ title, items }, sectionIndex) => (
            <div
              key={title}
              className={`${
                sectionIndex === 0
                  ? "col-span-1"
                  : "col-span-1 md:col-span-1 md:ml-4"
              }`}
            >
              <h3 className="text-gray-400 text-[12px] uppercase mb-2">
                {title}
              </h3>
              <ul className="space-y-2">
                {items.map(({ name, link }, index) => (
                  <motion.li
                    key={name}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className={`${
                      name === "Shop the Latest" ? "font-semibold" : ""
                    } ${sectionIndex === 0 ? "text-xl" : "text-sm"}`}
                  >
                    <a
                      href={link}
                      className="hover:text-white primary-tx-white"
                    >
                      {name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Watch = () => {
  return (
    <div className="w-full primary-bg-black py-5 sm:px-10 px-5 flex justify-between items-center relative">
      <div className="container flex w-full screen-max-width mb-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {WatchSections.map(({ title, items }, sectionIndex) => (
            <div
              key={title}
              className={`${
                sectionIndex === 0
                  ? "col-span-1"
                  : "col-span-1 md:col-span-1 md:ml-4"
              }`}
            >
              <h3 className="text-gray-400 text-[12px] uppercase mb-2">
                {title}
              </h3>
              <ul className="space-y-2">
                {items.map(({ name, link }, index) => (
                  <motion.li
                    key={name}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className={`${
                      name === "Shop the Latest" ? "font-semibold" : ""
                    } ${sectionIndex === 0 ? "text-xl" : "text-sm"}`}
                  >
                    <a
                      href={link}
                      className="hover:text-white primary-tx-white"
                    >
                      {name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Pad = () => {
  return (
    <div className="w-full primary-bg-black py-5 sm:px-10 px-5 flex justify-between items-center relative">
      <div className="container flex w-full screen-max-width mb-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {IpadSection.map(({ title, items }, sectionIndex) => (
            <div
              key={title}
              className={`${
                sectionIndex === 0
                  ? "col-span-1"
                  : "col-span-1 md:col-span-1 md:ml-4"
              }`}
            >
              <h3 className="text-gray-400 text-[12px] uppercase mb-2">
                {title}
              </h3>
              <ul className="space-y-2">
                {items.map(({ name, link }, index) => (
                  <motion.li
                    key={name}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className={`${
                      name === "Shop the Latest" ? "font-semibold" : ""
                    } ${sectionIndex === 0 ? "text-xl" : "text-sm"}`}
                  >
                    <a
                      href={link}
                      className="hover:text-white primary-tx-white"
                    >
                      {name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const AirPods = () => {
  return (
    <div className="w-full primary-bg-black py-5 sm:px-10 px-5 flex justify-between items-center relative">
      <div className="container flex w-full screen-max-width mb-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {AirPodsSections.map(({ title, items }, sectionIndex) => (
            <div
              key={title}
              className={`${
                sectionIndex === 0
                  ? "col-span-1"
                  : "col-span-1 md:col-span-1 md:ml-4"
              }`}
            >
              <h3 className="text-gray-400 text-[12px] uppercase mb-2">
                {title}
              </h3>
              <ul className="space-y-2">
                {items.map(({ name, link }, index) => (
                  <motion.li
                    key={name}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className={`${
                      name === "Shop the Latest" ? "font-semibold" : ""
                    } ${sectionIndex === 0 ? "text-xl" : "text-sm"}`}
                  >
                    <a
                      href={link}
                      className="hover:text-white primary-tx-white"
                    >
                      {name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Support = () => {
  return (
    <div>
      <div></div>
    </div>
  );
};

const Galaxy = () => {
  return (
    <div className="w-full primary-bg-black py-5 sm:px-10 px-5 flex justify-between items-center relative">
      <div className="container flex w-full screen-max-width mb-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {GalaxySections.map(({ title, items }, sectionIndex) => (
            <div
              key={title}
              className={`${
                sectionIndex === 0
                  ? "col-span-1"
                  : "col-span-1 md:col-span-1 md:ml-4"
              }`}
            >
              <h3 className="text-gray-400 text-[12px] uppercase mb-2">
                {title}
              </h3>
              <ul className="space-y-2">
                {items.map(({ name, link }, index) => (
                  <motion.li
                    key={name}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className={`${
                      name === "Shop the Latest" ? "font-semibold" : ""
                    } ${sectionIndex === 0 ? "text-xl" : "text-sm"}`}
                  >
                    <a
                      href={link}
                      className="hover:text-white primary-tx-white"
                    >
                      {name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Xiomi = () => {
  return (
    <div className="w-full primary-bg-black py-5 sm:px-10 px-5 flex justify-between items-center relative">
      <div className="container flex w-full screen-max-width mb-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {XiaomiSections.map(({ title, items }, sectionIndex) => (
            <div
              key={title}
              className={`${
                sectionIndex === 0
                  ? "col-span-1"
                  : "col-span-1 md:col-span-1 md:ml-4"
              }`}
            >
              <h3 className="text-gray-400 text-[12px] uppercase mb-2">
                {title}
              </h3>
              <ul className="space-y-2">
                {items.map(({ name, link }, index) => (
                  <motion.li
                    key={name}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className={`${
                      name === "Shop the Latest" ? "font-semibold" : ""
                    } ${sectionIndex === 0 ? "text-xl" : "text-sm"}`}
                  >
                    <a
                      href={link}
                      className="hover:text-white primary-tx-white"
                    >
                      {name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export { Store, Mac, Phone, Support, Watch, Pad, AirPods, Galaxy, Xiomi };
