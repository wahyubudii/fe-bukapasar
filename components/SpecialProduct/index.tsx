import Image from "next/image";
import React from "react";
import HeartIcon from "@/public/images/wish.svg";
import HeartFillIcon from "@/public/images/wish-black.svg";
import ReactStars from "react-stars";
import Link from "next/link";
import { NumericFormat } from "react-number-format";
import { CardProps, MenuItemProps } from "@/types";
import DateTimeDisplay from "../Global/DateTimeDisplay";
import ViewIcon from "@/public/images/view.svg";
import CompareIcon from "@/public/images/prodcompare.svg";
import CartIcon from "@/public/images/add-cart.svg";

export default function SpecialProduct() {
  const productAction: MenuItemProps[] = [
    {
      route: "/",
      icon: CompareIcon.src,
      name: "compare-icon",
    },
    {
      route: "/",
      icon: ViewIcon.src,
      name: "view-icon",
    },
  ];

  const specialProductItem: CardProps[] = [
    {
      route: "/",
      imageLink: "/images/camera.jpg",
      brand: "Canon",
      title: "Olympus Pen E-PL9 Kit With 14-42, EZ Lenz, Camera",
      rating: 4.5,
      price: 500000,
      discount: 20,
      isLiked: true,
    },
    {
      route: "/",
      imageLink: "/images/tab.jpg",
      brand: "Samsung",
      title: "Olympus Pen E-PL9 Kit With 14-42, EZ Lenz, Camera",
      rating: 4.5,
      price: 500000,
      discount: 35,
      isLiked: true,
    },
    {
      route: "/",
      imageLink: "/images/watch.jpg",
      brand: "Apple",
      title: "Olympus Pen E-PL9 Kit With 14-42, EZ Lenz, Camera",
      rating: 4.5,
      price: 500000,
      discount: 15,
      isLiked: false,
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-5">
      {specialProductItem.map((item: CardProps, index: number) => {
        return (
          <div
            key={index}
            className="group bg-white p-4 shadow rounded-xl grid grid-cols-2 gap-5"
          >
            <div className="flex flex-col gap-3 relative overflow-hidden">
              <Image
                src={item.imageLink}
                alt={"product"}
                height={2000}
                width={2000}
                draggable={false}
                className="p-10 bg-white rounded w-full h-60 bg-cover bg-center object-contain"
              />
              <div className="flex items-center justify-between gap-5">
                <Image
                  src={item.imageLink}
                  alt={"product"}
                  height={2000}
                  width={2000}
                  draggable={false}
                  className="bg-white border rounded w-full h-24 p-2 bg-cover bg-center object-contain"
                />
                <Image
                  src={item.imageLink}
                  alt={"product"}
                  height={2000}
                  width={2000}
                  draggable={false}
                  className="bg-white border rounded w-full h-24 p-2 bg-cover bg-center object-contain"
                />
              </div>
              <div className="absolute text-xs font-medium rounded-full bg-red-600 text-white top-0 left-0 px-3 py-1">
                -{item.discount}%
              </div>
              <button
                className={`absolute text-xl ${
                  item.isLiked ? "text-red-600" : "text-gray-600"
                } text-red-600 font-medium top-0 right-0 p-1 hover:bg-red-200 transition rounded-full`}
              >
                <Image
                  alt="view-icon"
                  height={1200}
                  width={1200}
                  src={item.isLiked ? HeartFillIcon.src : HeartIcon.src}
                  className="w-4 h-4"
                  onClick={() => console.log(item.isLiked)}
                />
              </button>
              <div className="absolute top-8 -right-16 group-hover:right-0 group-hover:duration-300 flex flex-col space-y-2">
                {productAction.map((item: MenuItemProps, index: number) => {
                  return (
                    <Link
                      key={index}
                      href={""}
                      className="hover:bg-blue-200 p-1 transition rounded-full"
                    >
                      <Image
                        alt="view-icon"
                        height={1200}
                        width={1200}
                        src={item.icon}
                        className="w-4 h-4 text-white"
                      />{" "}
                    </Link>
                  );
                })}
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-[11px] text-gray-600 font-medium bg-gray-200 w-fit px-3 py-1 rounded-full">
                {item.brand}
              </p>
              <Link
                href={""}
                className="pt-4 text-sm font-medium group-hover:underline line-clamp-2"
              >
                {item.title}
              </Link>
              <ReactStars
                className="pt-1 pb-3"
                half={true}
                edit={false}
                count={5}
                value={item.rating}
                size={20}
              />
              <div className="flex items-start gap-1.5 font-medium text-sm text-blue-700">
                <div className="text-red-500">
                  Rp.{" "}
                  <NumericFormat
                    value={item.price - item.price * (item.discount / 100)}
                    displayType="text"
                    thousandSeparator={true}
                  />
                </div>
                <div className="text-xs text-gray-500 line-through">
                  Rp.{" "}
                  <NumericFormat
                    value={item.price}
                    displayType="text"
                    thousandSeparator={true}
                  />
                </div>
              </div>
              <div className="py-4 text-sm flex items-center gap-4">
                <p className="font-medium">
                  254 <span className="font-normal">Days</span>
                </p>
                <div className="flex items-center justify-center gap-2">
                  <DateTimeDisplay value={"03"} />
                  <DateTimeDisplay value={"32"} />
                  <DateTimeDisplay value={"59"} />
                </div>
              </div>
              <div className="pt-5 flex justify-between mb-2">
                <span className="text-xs font-medium text-blue-700">
                  Product : 12
                </span>
                <span className="text-xs font-medium text-blue-700">45%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-blue-600 h-2.5 rounded-full"
                  style={{ width: "45%" }}
                ></div>
              </div>
              <button className="mt-10 flex w-fit items-center gap-2 hover:bg-blue-600 hover:text-white transition border px-3 py-2 rounded">
                <Image
                  src={CartIcon.src}
                  height={1200}
                  width={1200}
                  alt="cart-icon"
                  className="w-4 h-4 bg-cover bg-center object-cover"
                />
                <p className="text-sm">Add to Cart</p>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
