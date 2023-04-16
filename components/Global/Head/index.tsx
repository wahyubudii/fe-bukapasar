import React from "react";
import Head from "next/head";

export default function HeadMeta({ customMeta }: any) {
  return (
    <Head>
      <title>{customMeta?.title}</title>
      <meta name="description" content={customMeta?.description} />
      <link rel="shortcut icon" href={customMeta?.favicon} />
    </Head>
  );
}
