"use client";
import Image from "next/image";
import NavBar from "./(component)/navbar/page";
import HeroSection from "./(component)/hero/page";
import Headliner from "./(component)/headliner/page";
import { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { MdSunny } from "react-icons/md";
import TimeLine from "./(component)/timeline/page";

export default function Home() {
  const [theme, setTheme] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    if (savedTheme === "dark") {
      setTheme(true);
    }
  }, []);

  useEffect(() => {
    if (theme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
    <main className="min-h-screen min-w-screen bg-zinc-200 dark:bg-zinc-900">
      <div
        className="fixed top-24 right-0 p-2 rounded-l-lg bg-zinc-200 dark:bg-zinc-200 text-3xl inline-block  text-bg-zinc-2+00 cursor-pointer dark:text-zinc-900"
        onClick={() => setTheme(!theme)}
      >
        {theme ? <MdSunny /> : <FaMoon />}
      </div>
      <NavBar />
      <HeroSection />
      <Headliner />
      <TimeLine />
    </main>
  );
}
