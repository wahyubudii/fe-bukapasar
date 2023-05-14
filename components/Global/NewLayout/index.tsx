import Image from "next/image";
import React from "react";

export default function NewLayout({ children }: any) {
  return (
    <div className="flex h-screen bg-blue-400">
      <div className="m-auto bg-slate-50 rounded-md w-3/5 h-3/4 grid lg:grid-cols-2">
        <div className="relative bg-gradient-to-r from-blue-500 to-indigo-500 rounded-l-md overflow-hidden">
          <Image
            src={"https://picsum.photos/200/300"}
            alt="image"
            width={1200}
            height={800}
            draggable={false}
            className="bg-cover bg-center object-cover bg-no-repeat absolute bottom-0 left-0 right-0 top-0 w-full h-full bg-[65% 100px] z-10"
          />
        </div>
        <div className="right flex flex-col justify-evenly">
          <div className="text-center py-10">{children}</div>
        </div>
      </div>
    </div>
  );
}
