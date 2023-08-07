"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import menuImage from "../../public/BV-white.png";
import Footer from "@/components/footer/Footer";

const Contact = () => {
  return (
    <div className="w-full h-full">
      <motion.div className="relative w-full h-[50vh] z-10 overflow-hidden bg-[url('https://images.unsplash.com/photo-1560264280-88b68371db39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80')] bg-fixed bg-cover bg-bottom">
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
            <a href="/blog" className="hover:text-gray-400 duration-150">
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
            <span className="text-gray-100">Contact Us</span>{" "}
          </motion.p>
        </motion.div>
      </motion.div>
      <div className="w-full h-full py-12 px-4 md:px-8">
        <div className="container max-w-6xl mx-auto ">
          <h1 className="text-6xl text-center font-Alata py-24 font-extrabold bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% bg-clip-text text-transparent uppercase">
            Lets Start A Conversation
          </h1>

          <form action="#" className="py-6 px-4 flex flex-col space-y-4">
            <div className="flex flex-row space-x-4">
              <div className="flex flex-col space-y-2 w-1/2">
                <span className="text-gray-900 font-Raleway px-1 font-bold text-xl ">
                  First Name
                </span>
                <input
                  type="text"
                  id="firstname"
                  className="px-2 py-3 rounded-sm outline-none focus:outline-none active:outline-none border-[1px] border-gray-300 focus:border-green-500"
                />
              </div>
              <div className="flex flex-col space-y-2 w-1/2">
                <span className="text-gray-900 font-Raleway px-1 font-bold text-xl ">
                  Last Name
                </span>
                <input
                  type="text"
                  id="firstname"
                  className="px-2 py-3 rounded-sm outline-none focus:outline-none active:outline-none border-[1px] border-gray-300 focus:border-green-500"
                />
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <span className="text-gray-900 font-Raleway px-1 font-bold text-xl ">
                Company Name
              </span>
              <input
                type="text"
                id="company"
                className="px-2 py-3 rounded-sm outline-none focus:outline-none active:outline-none border-[1px] border-gray-300 focus:border-green-500"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <span className="text-gray-900 font-Raleway px-1 font-bold text-xl ">
                Phone
              </span>
              <input
                type="text"
                id="phone"
                className="px-2 py-3 rounded-sm outline-none focus:outline-none active:outline-none border-[1px] border-gray-300 focus:border-green-500"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <span className="text-gray-900 font-Raleway px-1 font-bold text-xl ">
                Email
              </span>
              <input
                type="text"
                id="email"
                className="px-2 py-3 rounded-sm outline-none focus:outline-none active:outline-none border-[1px] border-gray-300 focus:border-green-500"
              />
            </div>
            <div className="flex flex-col space-y-1">
              <span className="text-gray-900 font-Raleway px-1 font-bold text-xl pb-2">
                Business Type
              </span>
              <div className="flex flex-row space-x-2 justify-start items-center">
                <input type="radio" value="Regular" id="cr" />
                <label htmlFor="cr" className="text-gray-900 font-Raleway px-1">
                  Cannabis Retailer
                </label>
              </div>
              <div className="flex flex-row space-x-2 justify-start items-center">
                <input type="radio" value="Medium" id="lp" />
                <label htmlFor="lp" className="text-gray-900 font-Raleway px-1">
                  Licensed Producer
                </label>
              </div>
            </div>
            <div className="flex flex-col space-y-1">
              <span className="text-gray-900 font-Raleway px-1 font-bold text-xl pb-2">
                Preferred Method of Communication
              </span>
              <div className="flex flex-row space-x-2 justify-start items-center">
                <input type="radio" value="Regular" id="email" />
                <label
                  htmlFor="email"
                  className="text-gray-900 font-Raleway px-1"
                >
                  Email
                </label>
              </div>
              <div className="flex flex-row space-x-2 justify-start items-center">
                <input type="radio" value="Medium" id="text" />
                <label
                  htmlFor="text"
                  className="text-gray-900 font-Raleway px-1"
                >
                  Text
                </label>
              </div>
              <div className="flex flex-row space-x-2 justify-start items-center">
                <input type="radio" value="Medium" id="phone" />
                <label
                  htmlFor="phone"
                  className="text-gray-900 font-Raleway px-1"
                >
                  Phone
                </label>
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <span className="text-gray-900 font-Raleway px-1 font-bold text-xl ">
                Message
              </span>
              <textarea
                rows="3"
                cols="50"
                className="px-2 py-3 rounded-sm outline-none focus:outline-none active:outline-none border-[1px] border-gray-300 focus:border-green-500"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <span className="text-gray-900 font-Raleway px-1 font-bold text-xl ">
                How did you hear about us?
              </span>
              <select
                id="hear"
                className="px-2 py-3 rounded-sm outline-none focus:outline-none active:outline-none border-[1px] border-gray-300"
              >
                <option value="Google">Google</option>
                <option value="Social Media">Social Media</option>
                <option value="Newsletter">Newsletter</option>
                <option value="Others">Others</option>
              </select>
            </div>
            <div className="pt-4 pb-12">
              <button
                type="submit"
                className="px-2 py-3 bg-green-500 w-[20%] text-gray-100 uppercase text-md font-Alata tracking-wide hover:-translate-y-1 duration-200 hover:shadow-md"
              >
                Send &rarr;
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="border-[1.5px] border-green-100/70 my-12 mx-12" />
      <h1 className="text-center py-6 text-xl font-Raleway text-green-500">
        For weekend support please email: urgent@clickspace.com
      </h1>
      <div className="border-[1.5px] border-green-100/70 my-12 mx-12" />
      <div className="px-12 pb-12 text-center">
        <h1 className="text-4xl text-gray-600 p-6 font-Alata">Hours</h1>
        <p className="text-xl text-gray-600 p-6 font-Raleway">
          Monday-Friday: 8:00am - 4:30pm MT
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
