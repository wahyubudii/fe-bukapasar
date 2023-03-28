import { BrandItemsProps } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Marquee from "react-fast-marquee";

export default function Marque() {
  const branditems: BrandItemsProps[] = [
    {
      title: "apple-logo",
      image: "/images/brand-01.png",
      route: "/",
    },
    {
      title: "bose-logo",
      image: "/images/brand-02.png",
      route: "/",
    },
    {
      title: "canon-logo",
      image: "/images/brand-03.png",
      route: "/",
    },
    {
      title: "dell-logo",
      image: "/images/brand-04.png",
      route: "/",
    },
    {
      title: "intel-logo",
      image: "/images/brand-05.png",
      route: "/",
    },
    {
      title: "lg-logo",
      image: "/images/brand-06.png",
      route: "/",
    },
    {
      title: "samsung-logo",
      image: "/images/brand-07.png",
      route: "/",
    },
    {
      title: "sandisk-logo",
      image: "/images/brand-08.png",
      route: "/",
    },
  ];

  return (
    <div className="shadow bg-white px-10 py-6 rounded-xl">
      <Marquee speed={30}>
        {branditems.map((item: BrandItemsProps, index: number) => {
          return (
            <Link key={index} href={item.route} className="mx-10">
              <Image
                alt={item.title}
                height={1200}
                width={1200}
                src={item.image}
                draggable={false}
                className="w-28 h-28 bg-center bg-cover object-cover"
              />
            </Link>
          );
        })}
      </Marquee>
    </div>
  );
}
