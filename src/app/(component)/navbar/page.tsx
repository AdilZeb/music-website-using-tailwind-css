"use client";
import Image from "next/image";
import React from "react";
import { FiX } from "react-icons/fi";
import { IoMdMenu } from "react-icons/io";
import { IoManOutline } from "react-icons/io5";

const NavBar = () => {
  const [open, setOpen] = React.useState(false);
  const [isopen, setisOpen] = React.useState(false);
  return (
    <header className="text-zinc-200">
      <nav className=" sticky z-10 flex top-0 bg-gradient-to-r to-rose-500 from-pink-500">
        <div className="flex items-center p-2 gap-2">
          <Image
            src={"/logo-inverted.png"}
            width={50}
            height={50}
            alt="logo"
          ></Image>
          <div className="text-2xl font-bold">
            tw:<span className="text-sky-900">mf</span>
          </div>
        </div>
        <div className="flex md:hidden ml-auto justify-end items-center mx-2">
          {open ? (
            <FiX
              className="text-3xl cursor-pointer"
              onClick={() => setOpen(!open)}
            />
          ) : (
            <IoMdMenu
              className="text-3xl cursor-pointer"
              onClick={() => setOpen(!open)}
            />
          )}
          {open ? (
            <div className="absolute top-[62px] w-full left-0 bg-gradient-to-r to-rose-500 from-pink-500">
              <div className="relative flex justify-center items-center p-4 text-300 hover:text-zinc-200 hover:bg-white/5 transition-colors ease-in-out">
                <span>Home</span>
              </div>
              <div className="relative flex justify-center items-center p-4 text-300 hover:text-zinc-200 hover:bg-white/5 transition-colors ease-in-out">
                <span> Lineup</span>
              </div>
              <div className="group relative  justify-center items-center  text-300 hover:text-zinc-200 hover:bg-white/5 transition-colors ease-in-out">
                <div
                  className="p-4 text-bold text-center"
                  onClick={() => setisOpen(!isopen)}
                >
                  Tickets
                </div>
                {isopen && (
                  <>
                    <div className="relative  p-4 h-full flex justify-center items-center text-pink-300 hover:text-zinc-200 group-hover:bgwhite/5 transition-colors ease-in-out">
                      single Day Tickets
                    </div>
                    <div className="relative p-4  h-full flex justify-center items-center text-pink-300 hover:text-zinc-200 group-hover:bgwhite/5 transition-colors ease-in-out">
                      7 Days Tickets
                    </div>
                  </>
                )}
              </div>
              <div className="relative flex justify-center items-center p-4 text-300 hover:text-zinc-200 hover:bg-white/5 transition-colors ease-in-out">
                <span>Support</span>
              </div>
            </div>
          ) : null}
        </div>

        <div className="hidden  flex-1 md:flex justify-end items-center">
          <div className="relative flex items-center  h-full p-4 cursor-pointer font-bold text-pink-200 hover:text-zinc-200 hover:bg-white/10 transition ease-in-out">
            Home
          </div>
          <div className="relative flex items-center  h-full p-4 cursor-pointer font-bold text-pink-200 hover:text-zinc-200 hover:bg-white/10 transition ease-in-out">
            Lineup
          </div>
          <div className=" group relative flex items-center  h-full p-4 cursor-pointer font-bold text-pink-200 hover:text-zinc-200 hover:bg-white/10 transition ease-in-out">
            <span>Tickets</span>
            <div className=" group-hover:block hidden bg-pink-500 absolute  top-full whitespace-nowrap p-4 right-0 rounded-b-md text-right">
              <div className="  p-4 font-bold hover:text-zinc-200 transition ease-in-out text-pink-200  hover:bg-white/5  ">
                <span>Single Day Tickets</span>
              </div>
              <div className=" p-4 font-bold hover:text-zinc-200 transition ease-in-out text-pink-200 hover:bg-white/5 ">
                <span> 7 Days Ticket</span>
              </div>{" "}
            </div>
          </div>
          <div className="relative flex items-center  h-full p-4 cursor-pointer font-bold text-pink-200 hover:text-zinc-200 hover:bg-white/10 transition ease-in-out">
            Support
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
