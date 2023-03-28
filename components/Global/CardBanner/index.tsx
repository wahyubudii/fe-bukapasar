import { BannerProps } from "@/types";
import Image from "next/image";
import React from "react";

export default function CardBanner() {
  const cardBanner: BannerProps[] = [
    {
      header: "New Arrival",
      title: "iPad S13+ Pro.",
      url: "/images/catbanner-01.jpg",
    },
    {
      header: "New Arrival",
      title: "Apple Watch.",
      url: "/images/catbanner-02.jpg",
    },

    {
      header: "New Arrival",
      title: "iPad Air M2.",
      url: "/images/catbanner-03.jpg",
    },
    {
      header: "New Arrival",
      title: "Apple Airpods.",
      url: "/images/catbanner-04.jpg",
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-5">
      {cardBanner.map((item: BannerProps, index: number) => {
        return (
          <div key={index} className="relative rounded-xl">
            <Image
              alt={item.title}
              src={item.url}
              height={1200}
              width={1200}
              draggable={false}
              className="w-full h-full rounded-xl bg-center bg-cover object-cover"
            />
            <div className="absolute left-7 top-1/2 -translate-y-1/2">
              <h3 className="uppercase text-red-800 font-medium">
                {item.header}
              </h3>
              <p className="py-4 font-semibold text-2xl">{item.title}</p>
              <p className="w-36 text-sm">
                From Rp 14.599.000 or Rp. 1.217.000/mo.
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
