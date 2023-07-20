"use client";

import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="w-full">
      <div className="bg-[#1B262C] py-12 px-6 flex flex-col w-full items-center space-y-12">
        <h1 className="text-gray-100 text-2xl font-Montserrat font-light">
          Reach out to us to learn more.
        </h1>
        <div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="bg-gray-100 px-6 py-3 text-[#06283D] rounded-sm shadow-md uppercase tracking-wide font-Alata"
          >
            Contact Us
          </motion.button>
        </div>
        <div>
          <FontAwesomeIcon icon={faFacebook} />
        </div>
      </div>
      <div className="bg-gray-900 py-6 px-6 flex flex-row justify-between text-gray-400 font-Raleway">
        <div>
          <h1>All rights reserved @2023</h1>
        </div>
        <div>
          <h1>Cannview</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
