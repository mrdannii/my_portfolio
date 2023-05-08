import Link from "next/link";
import React from "react";

export default function Content() {
  return (
    <div>
      <section className="text-gray-400 shadow-md shadow-fuchsia-800 body-font my-20">
        <div className=" container px-5 py-24 mx-auto items-center flex flex-wrap">
          <div className="lg:w-1/3 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
            <img
              alt="feature"
              className="object-cover object-center h-full w-full transition duration-300 ease-in-out hover:scale-105"
              src="/main_image.jpg"
            />
          </div>
          <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
            <div className="flex flex-col mb-10 lg:items-start items-center">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-800 text-blue-400 mb-5">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-white text-lg title-font font-medium mb-1">
                  Software Engineer
                </h2>
                <code className="text-white animate-pulse ">
                  Full Stack Developer - React.JS | Next.JS | Vue.JS | Node.JS |
                  Express.JS | MongoDB | MySQL 
                </code>
                <p className="leading-relaxed text-base mt-3">
                  A software engineering graduate who is seeking to find the
                  opportunity to work in a fun and challenging
                  workingenvironment that will encourage him to improve and
                  learn new and necessary skills as well as be motivated by the
                  company to do his best for the sake of helping himself and the
                  company.
                </p>
                <Link
                  className=" mt-10 text-blue-400 inline-flex items-center transition ease-in-out delay-100  hover:-translate-y-0 hover:scale-150  duration-300"
                  href="/resume"
                >
                  Resume
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="animate-ping w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
