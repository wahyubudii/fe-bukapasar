import React from "react";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { CardProps } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { blogItems } from "@/data/blog";

export default function Blog() {
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-semibold">Our Latest Blogs</h3>
        <div className="space-x-4">
          <button className="rounded-full shadow p-1">
            <RiArrowLeftSLine className="w-5 h-5" />
          </button>
          <button className="rounded-full shadow p-1">
            <RiArrowRightSLine className="w-5 h-5" />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-5">
        {blogItems.map((item: CardProps, index: number) => {
          return (
            <Link
              key={index}
              href={item.route}
              className="rounded-xl shadow group"
            >
              <Image
                src={item.imageLink}
                alt={item.title}
                height={1200}
                width={1200}
                draggable={false}
                className="w-full h-64 bg-cover bg-center object-cover rounded-t-lg"
              />
              <div className="p-6 space-y-2.5">
                <p className="text-xs text-gray-500">{item.time}</p>
                <h2 className="font-medium group-hover:underline line-clamp-2">
                  {item.title}
                </h2>
                <p className="text-sm text-gray-500 line-clamp-2">
                  {item.description}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
