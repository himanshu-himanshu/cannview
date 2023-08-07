"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import menuImage from "../../public/BV-white.png";
import Footer from "@/components/footer/Footer";
import Card from "@/components/blogCard/Card";

const Blog = () => {
  return (
    <div className="w-full h-full">
      <motion.div className="relative w-full h-[50vh] z-10 overflow-hidden bg-[url('https://images.unsplash.com/photo-1485988412941-77a35537dae4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1792&q=80')] bg-fixed bg-cover bg-bottom">
        <div className="absolute w-full h-full top-0 left-0 -z-20 bg-gray-900/70"></div>
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
            <a href="#" className="hover:text-gray-400 duration-150">
              Blog
            </a>
            <a href="#" className="hover:text-gray-400 duration-150">
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
            <span className="text-gray-100">Blogs</span>{" "}
          </motion.p>
        </motion.div>
      </motion.div>
      <div className="container max-w-7xl mx-auto px-8 py-20 md:px-16 lg:px-24 grid grid-cols-2 md:grid-cols-3 gap-8">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
