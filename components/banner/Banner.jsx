"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import menuImage from "../../public/BV-white.png";

const Banner = () => {
  return (
    <motion.div className="relative w-full h-[95vh] z-10 overflow-hidden bg-[url('https://images.unsplash.com/photo-1536964310528-e47dd655ecf3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2143&q=80')] bg-fixed bg-cover bg-center">
      <div className="absolute w-full h-full top-0 left-0 -z-20 bg-gray-900/60"></div>
      <div className="container max-w-8xl mx-auto py-6 px-12 flex flex-row justify-between">
        <div>
          <Image src={menuImage} alt="Logo Image" className="w-[140px]" />
        </div>
        <div className="text-gray-200 flex flex-row space-x-6 font-Montserrat items-center">
          <a href="#" className="hover:text-gray-400 duration-150">
            Products
          </a>
          <a href="#" className="hover:text-gray-400 duration-150">
            Integration
          </a>
          <a href="/blog" className="hover:text-gray-400 duration-150">
            Blog
          </a>
          <a href="/help" className="hover:text-gray-400 duration-150">
            Help
          </a>
          <a href="/contact" className="hover:text-gray-400 duration-150">
            Contact
          </a>
        </div>
      </div>
      <motion.div className="container max-w-7xl mx-auto flex flex-col justify-center items-center py-24 px-4 md:px-8 space-y-8">
        <motion.p
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.75 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold tracking-wide text-center"
        >
          <span className="text-gray-100">A bud</span>{" "}
          <span className="text-green-400 italic font-normal">and</span>{" "}
          <span className="text-gray-100">beyond.</span>
        </motion.p>
        <p className="text-gray-200 font-Montserrat text-center text-md sm:text-xl max-w-2xl py-4 mb-8 tracking-wide">
          We enhance your in-store experience by offering branded and automated
          solutions that are integrated with your POS.
        </p>
        <p className="text-gray-200 text-4xl sm:text-5xl md:text-6xl font-bold tracking-wide text-center">
          Starting <span className="text-green-400 italic font-normal">at</span>{" "}
          $89/month.
        </p>
        <div className="flex items-center space-x-6 md:space-x-8 tracking-wider text-sm md:text-md py-8">
          <Link href="#">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.1 }}
              className="banner-link border-green-600 bg-green-600 hover:bg-green-700 hover:border-green-700 rounded-sm"
            >
              Book A Demo
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Banner;
