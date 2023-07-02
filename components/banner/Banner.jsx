import React from "react";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="relative w-full h-[95vh] z-10 overflow-hidden bg-[url('https://img.freepik.com/free-vector/realistic-marijuana-leaf-background_23-2148770966.jpg?w=1800&t=st=1688262790~exp=1688263390~hmac=659ae7777b698eecd0743ccbe0037cc31ef2646fa5d8152e4805c605445f7dc5')] bg-fixed bg-cover bg-center">
      <div className="absolute w-full h-full top-0 left-0 -z-20 bg-gray-900/50"></div>
      <div className="container max-w-7xl mx-auto flex flex-col justify-center items-center h-full px-4 md:px-8 space-y-8">
        <p className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold tracking-wide text-center">
          <span className="text-gray-100">A bud</span>{" "}
          <span className="text-green-400 italic font-normal">and</span>{" "}
          <span className="text-gray-100">beyond.</span>
        </p>
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
            <button className="banner-link border-green-600 bg-green-600 hover:bg-green-700 hover:border-green-700">
              Book A Demo
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
