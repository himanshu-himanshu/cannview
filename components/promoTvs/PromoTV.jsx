"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import menuImage from "../../public/solution_2.png";

const PromoTV = () => {
  return (
    <div className="w-full h-full py-12 relative bg-gray-100/70">
      <div className="absolute top-0 left-0 w-full h-[25px] bg-gradient-to-b from-[#ffffff]"></div>
      <div className="absolute bottom-0 left-0 w-full h-[300px] bg-gradient-to-t from-[#ffffff]"></div>
      <div className="absolute top-0 left-0 h-full w-full -z-40 bg-[url('https://images.unsplash.com/photo-1614854262318-831574f15f1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center" />
      <div className="container max-w-7xl mx-auto px-8 py-6 lg:px-0">
        <h1 className="font-Alata text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center font-extrabold p-4 tracking-wide text-gray-800">
          Promo TVs
        </h1>
        <div className="mt-12 flex flex-row-reverse items-center space-x-8 p-4">
          <div className=" w-2/5 flex flex-col justify-start space-y-6 p-4">
            <h1 className="text-3xl font-Alata font-extrabold text-gray-800">
              Highlight specific products with eye-catching promotions.
            </h1>
            <p className="font-Raleway text-lg">
              In-store TV channels inform and entertain your customers using
              dynamic advertisements.
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

export default PromoTV;
