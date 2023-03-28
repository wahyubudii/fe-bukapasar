import { CategoryItemProps, ServiceItemProps } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Category() {
  const serviceItem: ServiceItemProps[] = [
    {
      title: "Free Shipping",
      subTitle: "From all orders over Rp. 1.000.000",
      image: "/images/service.png",
    },
    {
      title: "Daily Surprise Offers",
      subTitle: "Save up to 25% off",
      image: "/images/service-02.png",
    },
    {
      title: "Support 24/7",
      subTitle: "Shop with an expert",
      image: "/images/service-03.png",
    },
    {
      title: "Affordable Prices",
      subTitle: "Get factory direct price",
      image: "/images/service-04.png",
    },
    {
      title: "Secure Payments",
      subTitle: "100% protected payments",
      image: "/images/service-05.png",
    },
  ];

  const categoryItem: CategoryItemProps[] = [
    {
      title: "Computer & Laptop",
      items: 8,
      image: "/images/laptop.jpg",
    },
    {
      title: "Camera & Videos",
      items: 10,
      image: "/images/camera.jpg",
    },
    {
      title: "Smart Television",
      items: 12,
      image: "/images/tv.jpg",
    },
    {
      title: "Smartwatches",
      items: 13,
      image: "/images/watch.jpg",
    },
    {
      title: "Music & Gaming",
      items: 4,
      image: "/images/watch.jpg",
    },
    {
      title: "Mobiles & Tablets",
      items: 5,
      image: "/images/tab.jpg",
    },
    {
      title: "Headphones",
      items: 6,
      image: "/images/headphone.jpg",
    },
    {
      title: "Accessories",
      items: 10,
      image: "/images/acc.jpg",
    },
    {
      title: "Portable Speakers",
      items: 8,
      image: "/images/speaker.jpg",
    },
    {
      title: "Home Appliances",
      items: 6,
      image: "/images/homeapp.jpg",
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-center gap-14">
        {serviceItem.map((item: ServiceItemProps, index: number) => {
          return (
            <div key={index} className="flex items-center justify-center gap-6">
              <Image
                src={item.image}
                alt={item.title}
                height={800}
                width={800}
                draggable={false}
                className="w-8 h-8 bg-center bg-cover object-contain"
              />
              <div>
                <p className="text font-semibold">{item.title}</p>
                <p className="text-sm">{item.subTitle}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="bg-white mt-12 rounded-xl shadow">
        <div className="grid grid-cols-5">
          {categoryItem.map((item: CategoryItemProps, index: number) => {
            return (
              <Link
                key={index}
                href={"/"}
                className="flex border-r border-b items-center justify-center py-8 px-8 gap-3 group"
              >
                <div className="space-y-1">
                  <p className="font-medium group-hover:underline">
                    {item.title}
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
