"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import menuImage from "../../public/retail_4.png";

const PrintMenu = () => {
  return (
    <div className="w-full h-full py-12 md:py-18 lg:py-20 relative bg-[#ffffff]">
      <div className="container max-w-7xl mx-auto px-8 py-6 lg:px-0">
        <h1 className="font-Alata text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center font-extrabold p-4 tracking-wide text-gray-800">
          Print Menus
        </h1>
        <div className="mt-12 flex flex-row items-center space-x-8 p-4">
          <div className=" w-2/5 flex flex-col justify-start space-y-6 p-4">
            <h1 className="text-3xl font-Alata font-extrabold text-gray-800">
              Save time and energy and let Budvue take care of managing your
              paper menus.
            </h1>
            <p className="font-Raleway text-lg">
              We have you covered with our POS integrated print menus.
            </p>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="bg-green-500 w-1/2 px-4 py-3 text-gray-100 z-40"
            >
              Learn More &rarr;
            </motion.button>
          </div>
          <div className="w-3/5 h-full px-24 py-6">
            <Image src={menuImage} alt="Customer Image" className="w-[500px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrintMenu;
