import { branditems } from "@/data/brand";
import { BrandItemsProps } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Marquee from "react-fast-marquee";

export default function Brand() {
  return (
    <div className="shadow bg-white px-10 py-6 rounded-xl">
      <Marquee speed={30}>
        {branditems.map((item: BrandItemsProps, index: number) => {
          return (
            <Link key={index} href={item.route} className="mx-10">
              <Image
                alt={item.label}
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
