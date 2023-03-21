import { LayoutProps } from "@/types";
import Head from "next/head";
import React from "react";
import Footer from "@/components/Global/Footer";
import Header from "@/components/Global/Header";

export default function Layout({ children, customMeta }: LayoutProps) {
  return (
    <div>
      <Head>
        <title>{customMeta?.title}</title>
        <meta name="description" content={customMeta?.description} />
        <link rel="shortcut icon" href={customMeta?.favicon} />
      </Head>
      <div className="transition duration-500 ease-in-out bg-gray-50 z-10">
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className={`flex-grow flex justify-center`}>
            <div className="container mx-auto ">
              <div className="mx-10 sm:mx-20 lg:mx-24 xl:mx-40">{children}</div>
            </div>
          </main>
          {/* <Footer /> */}
        </div>
      </div>
    </div>
  );
}
