import Image from "next/image";
import React from "react";

export default function ResumeContent() {
  return (
    <>
      <section className="text-gray-400 shadow-md shadow-fuchsia-800 body-font overflow-hidden py-10 my-5">
        <h2 className="text-3xl text-center  font-semibold text-white leading-tight">
          Work Experience
        </h2>

        <div className="container px-5 py-10 mx-auto">
          <div className="-my-8 divide-y-2 divide-gray-800">
            <div className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-white">
                  Jan 2022 - April 2022
                </span>
                {/* <span className="mt-1 text-gray-500 text-sm">12 Jun 2019</span> */}
              </div>
              <div className="md:flex-grow">
                <h2 className="text-2xl font-medium text-white title-font mb-2">
                  Web Application Developer | Pi bites Technology Pvt Limited
                </h2>
                <p className="leading-relaxed">
                  My primary responsibilities involved developing, maintaining,
                  and maintaining assigned Web applications along with resolving
                  any related design and implementation issues. Developed Web
                  Application app using LARAVEL, api integration, error
                  handling, client satisfaction, code re-usability, code review
                  with lead, gathered requirements and presented them to
                  stakeholders. Made product knowledge readily available to self
                  and other stakeholders using various courses. Worked closely
                  with quality engineers, designers, and the support team.
                </p>
              </div>
            </div>

            <div className="py-8 flex border-t-2 border-gray-800 flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-white">
                  2020 - 2021
                </span>
                {/* <span className="mt-1 text-gray-500 text-sm">12 Jun 2019</span> */}
              </div>
              <div className="md:flex-grow">
                <h2 className="text-2xl font-medium text-white title-font mb-2">
                  FYP Project Manager | CUSIT
                </h2>
                <p className="leading-relaxed">
                  My primary responsibility in our FYP involved project
                  management and developing the Web Based Application of the
                  project. assigning task to other team members and continuously
                  working on time and cost estimation of the project with
                  achieving milestones of the project til delivering project to
                  the committee.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="text-gray-400 shadow-md shadow-fuchsia-800 body-font overflow-hidden my-5 py-10">
        <div className="container">
          <h2 className="text-3xl text-center  font-semibold text-white leading-tight ">
            Education
          </h2>
        </div>
        <div className="container items-center px-10 py-10 mx-auto">
          <div className="-my-8 divide-y-2 divide-gray-800">
            <div className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-80 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-white">
                  2017 - 2021
                </span>
              </div>
              <div className="md:flex-grow">
                <h2 className="text-2xl font-medium text-white title-font mb-2">
                Bachelor's Degree | Software Engineering 
                </h2>
                <ul className="ml-8 list-disc leading-relaxed">
                  <li>City University of Science and Technology</li>
                  <li>
                    <code>CGPA: 3.29</code>
                  </li>
                </ul>
              </div>
            </div>

            <div className="py-8 flex border-t-2 border-gray-800 flex-wrap md:flex-nowrap">
              <div className="md:w-80 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-white">
                  2015 - 2017
                </span>
                {/* <span className="mt-1 text-gray-500 text-sm">12 Jun 2019</span> */}
              </div>
              <div className="md:flex-grow">
                <h2 className="text-2xl font-medium text-white title-font mb-2">
                  FSc | Pre-Engineering
                </h2>
                <p className="leading-relaxed"></p>
                <ul className="ml-8 list-disc leading-relaxed">
                  <li>ICMS College System</li>
                </ul>
              </div>
            </div>

            <div className="py-8 flex border-t-2 border-gray-800 flex-wrap md:flex-nowrap">
              <div className="md:w-80 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-white">
                  2013 - 2015
                </span>
                {/* <span className="mt-1 text-gray-500 text-sm">12 Jun 2019</span> */}
              </div>
              <div className="md:flex-grow">
                <h2 className="text-2xl font-medium text-white title-font mb-2">
                  Matriculation | Science.
                </h2>
                <p className="leading-relaxed"></p>
                <ul className="ml-8 list-disc leading-relaxed">
                  <li>Forward Public School</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="text-gray-400  body-font overflow-hidden  py-10">
        <div className="container  px-5 py-5 mx-auto flex flex-wrap">
          <div className="flex flex-wrap -m-3">
            <div className="p-2 lg:w-1/2 md:w-full ">
              <div className="flex rounded-lg  p-8 sm:flex-row flex-col shadow-md shadow-fuchsia-800">
                <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-1 inline-flex items-center justify-center rounded-full bg-white text-blue-400 flex-shrink-0">
                  <Image src="/skills.gif" width={40} height={40} alt="Skills"/>
                </div>
                <div className="flex-grow ">
                  <h2 className="text-white text-lg title-font font-semibold mb-3">
                    Skills
                  </h2>
                  <ul className=" md:columns-2 ml-5 list-disc leading-relaxed text-base">
                    <li>React.JS</li>
                    <li>Vue.JS</li>
                    <li>Express.JS</li>
                    <li>Node.JS</li>
                    <li>Html/CSS/Bootstrap</li>
                    <li>Tailwind CSS</li>
                    <li>Laravel</li>
                    <li>MySQL</li>
                    <li>Firebase</li>
                    <li>MongoDB</li>
                    <li>WordPress</li>
                    <li>Software Requirement Specification</li>
                    <li>Software Quality Assurance</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/2 md:w-full">
              <div className="flex shadow-md shadow-fuchsia-800  rounded-lg border-gray-800 p-8 sm:flex-row flex-col">
                <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-white text-blue-400 flex-shrink-0">
                  <Image src="/progs.gif" width={40} height={40} alt="Programming"/>
                </div>
                <div className="flex-grow">
                  <h2 className="text-white text-lg title-font font-semibold mb-3">
                    Programming Languages
                  </h2>
                  <ul className=" w-full ml-5 list-disc leading-relaxed text-base my-5">
                    <li>JavaScript</li>
                    <li>TypeScript</li>
                    <li>PHP</li>
                    <li>C#</li>
                    <li>C++</li>
                    <li>Python</li>
                  </ul>
                </div>

                <div className="flex-grow">
                  <h2 className="text-white text-lg title-font font-semibold mb-3">
                    Software Tools
                  </h2>
                  <ul className=" w-full ml-5 list-disc leading-relaxed text-base">
                    <li>Github / Git</li>
                    <li>VS Code</li>
                    <li>JIRA</li>
                    <li>Andriod Studio</li>
                    <li>SPSS</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex ">
          <a
            className=" flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded "
            href="/resume.pdf" target="_blank"
          >
            Resume PDF
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="ml-2 mt-0 h-6 w-6 "
            >
              <path
                fillRule="evenodd"
                d="M19.5 21a3 3 0 003-3V9a3 3 0 00-3-3h-5.379a.75.75 0 01-.53-.22L11.47 3.66A2.25 2.25 0 009.879 3H4.5a3 3 0 00-3 3v12a3 3 0 003 3h15zm-6.75-10.5a.75.75 0 00-1.5 0v4.19l-1.72-1.72a.75.75 0 00-1.06 1.06l3 3a.75.75 0 001.06 0l3-3a.75.75 0 10-1.06-1.06l-1.72 1.72V10.5z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </section>
    </>
  );
}
