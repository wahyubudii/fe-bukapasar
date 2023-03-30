import React from "react";

export async function getServerSideProps() {
  const res = await fetch(`${process.env.API_URL}/product`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const content = await res.json();

  return {
    props: {
      content,
    },
  };
}

export default function Product({ content }: any) {
  return (
    <div>
      <h1>Judul</h1>
      {content.map((item: any, index: number) => {
        return <p key={index}>{item.title}</p>;
      })}
    </div>
  );
}
