"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import menuImage from "../../public/BV-white.png";
import menuImage2 from "../../public/retail_3.png";
import menuImage3 from "../../public/retail_4.png";
import Footer from "@/components/footer/Footer";

const MenuTV = () => {
  return (
    <div className="w-full h-full">
      <motion.div className="relative w-full h-[50vh] z-10 overflow-hidden bg-[url('https://images.unsplash.com/photo-1560264280-88b68371db39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80')] bg-fixed bg-cover bg-bottom">
        <div className="absolute w-full h-full top-0 left-0 -z-20 bg-gray-900/70"></div>
        <div className="container max-w-8xl mx-auto py-6 px-12 flex flex-row justify-between">
          <div>
            <Image src={menuImage} alt="Logo Image" className="w-[140px]" />
          </div>
          <div className="text-gray-200 flex flex-row space-x-6 font-Montserrat items-center">
            <a href="/menu-tv" className="hover:text-gray-400 duration-150">
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
        <motion.div className="container max-w-7xl mx-auto flex flex-col justify-center items-center py-20 px-4 md:px-8 space-y-8">
          <motion.p
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.75 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-wide text-center"
          >
            <span className="text-gray-100">Menu TVs</span>
          </motion.p>
        </motion.div>
      </motion.div>
      <div className="w-full h-full py-12 px-4 md:px-8">
        <div className="container max-w-6xl mx-auto ">
          <div className="flex flex-col space-y-20 justify-center items-center mb-12">
            <p className="text-center text-xl font-Raleway px-6 font-bold">
              Our easy, efficient, and cost-effective dispensary menus are fully
              integrated with your POS and are 100% automated so inventory is
              reflected on-screen in real-time. Our cannabis menus are
              customized based on your sales strategy and configured to help you
              sell better.
            </p>
            <Image
              src={menuImage2}
              alt="Customer Image"
              className="w-[600px]"
            />
            <p className="text-center text-xl font-Raleway px-6 font-bold">
              Our digital menus automate the sales process so budtenders have
              more time to develop relationships with your customers and provide
              better service.
            </p>
          </div>
          <hr />
          <div className="flex flex-row my-12 px-6 py-12 space-x-12 items-center">
            <div className="w-2/3 flex flex-col space-y-6">
              <h1 className="font-Alata text-3xl">
                Showcase Your Unique Brand.
              </h1>
              <p className="text-xl font-Raleway font-bold">
                Our easy, efficient, and cost-effective dispensary menus are
                fully integrated with your POS and are 100% automated so
                inventory is reflected on-screen in real-time. Our cannabis
                menus are customized based on your sales strategy and configured
                to help you sell better.
              </p>
            </div>
            <Image
              src={menuImage2}
              alt="Customer Image"
              className="w-[600px]"
            />
          </div>
          <hr />
          <div className="flex flex-row my-12 px-6 py-12 space-x-12 items-center">
            <Image
              src={menuImage3}
              alt="Customer Image"
              className="w-[600px]"
            />
            <div className="w-2/3 flex flex-col space-y-6">
              <h1 className="font-Alata text-3xl">Full or Focused Menus.</h1>
              <p className="text-xl font-Raleway font-bold">
                Our custom layouts allow you to choose either full or focused
                menus and categorize items such as Top 10 THC, Bud Picks to get
                inventory off your shelves.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MenuTV;
