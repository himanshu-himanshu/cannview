"use client";

import React from "react";
import Image from "next/image";

import cardImage from "../../public/card.jpg";

const Card = () => {
  return (
    <div class="flex flex-col shadow-md rounded-b-lg">
      <Image
        src={cardImage}
        alt="Customer Image"
        className="w-[400px] rounded-t-lg"
      />
      <div className="py-6 px-2 text-center">
        <h1 className="text-sm md:text-md lg:text-lg font-Alata">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae fugiat
          placeat qui voluptates quia sapiente aspernatur.
        </h1>
        <div className="mt-6 py-6">
          <a
            href="#"
            className="bg-[#5e9892] hover:bg-[#4a716d] duration-200 hover:shadow-lg px-4 md:px-6 py-2 md:py-3 font-Montserrat text-sm md:text-md text-gray-100 captialize tracking-wide"
          >
            Read More &rarr;
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
