import { LayoutProps } from "@/types";
import Head from "next/head";
import React from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Layout({ children, customMeta }: LayoutProps) {
  return (
    <div>
      <Head>
        <title>{customMeta?.title}</title>
        <meta name="description" content={customMeta?.description} />
        <link rel="shortcut icon" href={customMeta?.favicon} />
      </Head>
      <div className="transition h-screen overflow-y-scroll scrollbar-hide duration-500 ease-in-out bg-white z-10">
        <div className="h-screen flex flex-col">
          <Header />
          <div className="flex-grow justify-center">{children}</div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
