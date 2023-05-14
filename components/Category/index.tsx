import { categoryProduct } from "@/data/Global/category";
import { serviceItem } from "@/data/Global/service";
import { CategoryItemProps, ServiceItemProps } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Category() {
  return (
    <div>
      <div className="flex items-center justify-between gap-14">
        {serviceItem.map((item: ServiceItemProps, index: number) => {
          return (
            <div key={index} className="flex items-center justify-center gap-6">
              <Image
                src={item.image}
                alt={item.label}
                height={800}
                width={800}
                draggable={false}
                className="w-8 h-8 bg-center bg-cover object-contain"
              />
              <div>
                <p className="text font-semibold">{item.label}</p>
                <p className="text-sm">{item.subTitle}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="bg-white mt-12 rounded-xl shadow">
        <div className="grid grid-cols-5">
          {categoryProduct.map((item: CategoryItemProps, index: number) => {
            return (
              <Link
                key={index}
                href={"/"}
                className="flex border-r border-b first items-center justify-center py-8 px-8 gap-3 group"
              >
                <div className="space-y-1">
                  <p className="font-medium group-hover:underline">
                    {item.label}
                  </p>
                  <p className="text-gray-400 text-sm">{item.items} Items</p>
                </div>
                <Image
                  height={1200}
                  width={1200}
                  src={item.image}
                  alt="category"
                  draggable={false}
                  className="w-24 h-24 bg-center bg-cover object-center"
                />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
