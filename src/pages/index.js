import Content from "@/components/Content";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Muhammad Daniyal - Home</title>
        <link rel="shortcut icon" href="/react.svg" />
      </Head>
      <main
        className={`flex min-h-screen flex-col items-center justify-between p-10 ${inter.className}`}
      >
        <Content />
      </main>
    </>
  );
}
