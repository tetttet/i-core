"use client";

import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const Video = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const v1 = "/videos/v1.mp4";
  const v2 = "/videos/v2.mp4";
  const v3 = "/videos/v3.mp4";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
      transition={{ duration: 1 }}
      className=""
    >
      <video className="w-full h-full object-cover" autoPlay muted loop>
        <source src={v2} type="video/mp4" />
      </video>
      <div className="grid grid-cols-2 h-screen w-full relative">
        <div className="max-h-screen">
          <video className="w-full h-full object-cover" autoPlay muted loop>
            <source src={v1} type="video/mp4" />
          </video>
        </div>

        <div className="">
          <div className="absolute h-full">
            <video className="w-full h-full object-cover" autoPlay muted loop>
              <source src={v3} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Video;
