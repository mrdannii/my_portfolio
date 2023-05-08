import Image from "next/image";
import Link from "next/link";
import React from "react";


export default function Navbar() {
  return (
    <header className="text-gray-400 shadow-md shadow-fuchsia-950  body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link className="flex title-font font-medium items-center text-white mb-4 md:mb-0" href={"/"}>
        <Image
              className="rounded-full dark:drop-shadow-[0_0_0.rem_#ffffff70] dark:invert  "
              src="/backend.gif"
              alt="User Avatar"
              width={36}
              height={36}
              priority
             style={{'mix-blend-mode': 'soft-light'}}
            />
          <span className=" ml-3 text-2xl">   Muhammad Daniyal  </span>
          <small className="ml-3 mt-4 text-xs animate-bounce italic"><code> Full Stack Developer </code></small>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link className="mr-5 hover:text-white" href="/">Home</Link>
          <Link className="mr-5 hover:text-white" href={'/resume'}>Resume</Link>
          <Link className="mr-5 hover:text-white" href={'/contact'}>Contact</Link>
        
        </nav>
        {/* <button className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
          Button
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className=" w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button> */}
      </div>
    </header>
  );
}
