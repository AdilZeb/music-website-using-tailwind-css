import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <div className="bg-[url('/hero.jpg')] bg-no-repeat text-zinc-200 bg-fixed bg-cover bg-center h-[calc(100vh-200px)] min-h-[400px] flex flex-col justify-center items-center">
      <div className="flex justify-center  items-center flex-col rounded-lg bg-white/10 p-4 backdrop-blur-lg px-4 py-2">
        <Image src="/logo.png" width={165} height={165} alt="logo"></Image>
        <div className="relative text-5xl font-bold">
          tw:<span className="text-sky-900">mf</span>
        </div>
      </div>

      <div className="text-sm font-bold mt-3 ">
        Keep me updated with news and promotions
      </div>
      <div className="flex gap-2">
        <input
          type="email"
          className="text-sm font-bold mt-3 rounded-md border border-white/40 p-2 placeholder:text-zinc-200 caret-pink-400 backdrop-blur-lg bg-white/30 focus:white/50 outline-zinc-400"
        ></input>
        <button className="text-sm font-bold mt-3 rounded-md border border-white/40 p-2 hover:bg-sky-900 bg-pink-500 border-none">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
