"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import menuImage from "../../public/retail_3.png";

const MenuTV = () => {
  return (
    <div className="w-full h-full py-12 md:py-18 lg:py-20 bg-gray-100">
      <div className="container max-w-7xl mx-auto px-8 lg:px-0">
        <h1 className="text-center font-Montserrat text-md md:text-lg lg:text-xl font-bold p-2">
          Offering premium digital signage to cannabis retailers for over 7+
          years.
        </h1>
        <h1 className="font-Alata text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center font-extrabold mt-12 p-4 tracking-wide">
          Menu TVs
        </h1>
        <div className="mt-12 flex flex-row space-x-8 p-4">
          <div className=" w-2/5 flex flex-col justify-start space-y-6 p-4">
            <h1 className="text-3xl font-Alata font-extrabold">
              Custom menu boards designed uniquely for your store.
            </h1>
            <p className="font-Raleway text-lg">
              Take your sales to the next level with our custom designs and
              configurations based on your sales strategy. Highlight your
              cannabis product with ease, 100% automated with your POS in
              real-time.
            </p>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="bg-green-500 w-1/2 px-4 py-3 text-gray-100"
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

export default MenuTV;
