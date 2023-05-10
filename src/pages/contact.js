import Head from "next/head";

export default function contact() {
  return (
    <>
     <Head>
        <title>Muhammad Daniyal - Contact</title>
        <link rel="shortcut icon" href="/react.svg" />
      </Head>
      <main
        className={`flex min-h-screen flex-col items-center justify-between p-24`}
      >
        <section className="flex  flex-wrap text-gray-400 shadow-md shadow-fuchsia-800 body-font overflow-hidden ">
          <p className="text-3xl mx-5 text-white mt-10  font-semibold">
            Contact Information
          </p>
          <div className="container  px-5 py-10 mx-auto">
            <div className="py-8  border-t-2 border-gray-800 flex-wrap ">
              <div className="  containter mb-2">
                <span className="font-semibold title-font text-white">Phone </span>
              </div>
              <div className="container ">
                <a
                  className="text-2xl font-medium text-white title-font "
                  href="tel:+923139576339"
                >
                  {" "}
                  +92 313 9576339
                </a>
              </div>
            </div>

            <div className="py-8  border-t-2 border-gray-800 flex-wrap ">
              <div className="  containter mb-2">
                <span className="font-semibold title-font text-white">Email </span>
              </div>
              <div className="container">
                <a
                  className="text-2xl font-medium text-indigo-400 leading-relaxed title-font"
                  href="mailto:mr.dannii98@gmail.com"
                >
                  mr.dannii98@gmail.com
                </a>
              </div>
            </div>

            <div className="py-8  border-t-2 border-gray-800 flex-wrap ">
              <div className="  containter mb-2">
                <span className="font-semibold title-font text-white">
                  Other Contact Links{" "}
                </span>
              </div>
              <div className="container">
                {" "}
                <span className="inline-flex  mt-4 justify-center ">

                <a className="text-gray-400 transition ease-in-out delay-0  hover:-translate-y-1 hover:scale-150"
                   target="_blank" href="https://api.whatsapp.com/send?phone=923139576339">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                    </svg>
                  </a>

                  {/* <a className="ml-2 text-gray-400 transition ease-in-out delay-0  hover:-translate-y-1 hover:scale-150"
                   target="_blank" href="https://www.facebook.com/mr.dannii/">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a> */}
                 
                  {/* <a className="ml-3 text-gray-400 transition ease-in-out delay-0  hover:-translate-y-1 hover:scale-150"
                   target="_blank" href="https://instagram.com/mr_dannii">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <rect
                        width="20"
                        height="20"
                        x="2"
                        y="2"
                        rx="5"
                        ry="5"
                      ></rect>
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                    </svg>
                  </a> */}
                  <a
                    className="ml-3 text-gray-400 transition ease-in-out delay-0  hover:-translate-y-1 hover:scale-150 "
                    target="_blank"
                    href="https://www.linkedin.com/in/mrdannii"
                  >
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="0"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="none"
                        d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                      ></path>
                      <circle cx="4" cy="4" r="2" stroke="none"></circle>
                    </svg>
                  </a>

                  <a
                    className="ml-3 text-gray-400 transition ease-in-out delay-0  hover:-translate-y-1 hover:scale-150 "
                    target="_blank"
                    href="https://github.com/mrdannii"
                  >
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="0"
                      className="w-8 h-8"
                      viewBox="0 0 24 24"
                    >
                      <path stroke="none" d="M0 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                      <circle cx="4" cy="4" r="2" stroke="none"></circle>
                    </svg>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
