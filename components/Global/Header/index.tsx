import Link from "next/link";
import React from "react";
import { BiSearch } from "react-icons/bi";
import { SlHeart } from "react-icons/sl";
import { HiArrowPath } from "react-icons/hi2";
import { BsPerson, BsGrid } from "react-icons/bs";
import { GiShoppingCart } from "react-icons/gi";
import { TiArrowSortedDown } from "react-icons/ti";
import { menuItemProps, routeProps } from "@/types";

const menuItem: menuItemProps[] = [
  {
    name: "Compare Products",
    icon: HiArrowPath,
    route: "/",
  },
  {
    name: "Favourite Wishlist",
    icon: SlHeart,
    route: "/",
  },
  {
    name: "Log in My Account",
    icon: BsPerson,
    route: "/",
  },
  {
    name: "My Cart",
    icon: GiShoppingCart,
    route: "/",
  },
];

const routePage: routeProps[] = [
  {
    name: "Home",
    route: "/",
  },
  {
    name: "Our Store",
    route: "/",
  },
  {
    name: "Blogs",
    route: "/",
  },
  {
    name: "Contacts",
    route: "/",
  },
];

export default function Header() {
  return (
    <div>
      <div className="py-3 border-b border-gray-600 bg-black text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 justify-between">
            <p>Free Shipping Over 1.000.000 IDR & Free Returns</p>
            <div>
              <p className="text-right">
                Hotline: <Link href="telp:+6285856196359">+6285856196359</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="py-5 border-b border-gray-600 bg-black text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-5">
            <Link href={"/"}>
              <h2 className="text-3xl font-medium">Bukapasar.</h2>
            </Link>
            <div className="flex items-center justify-center col-span-2">
              <input
                type="text"
                id="text"
                className="bg-gray-700 text-white text-base rounded-l-lg focus:ring-blue-500 focus:border-blue-500 outline-none block w-full px-5 py-3"
                placeholder="Search Product Here..."
                required
              />
              <div className="h-full flex items-center rounded-r-lg text-xl text-black bg-amber-300 px-3">
                <BiSearch />
              </div>
            </div>
            <div className="grid grid-cols-4 gap-5 col-span-2 pl-12">
              {menuItem.map((item: any, index: number) => {
                return (
                  <Link
                    key={index}
                    href={item.route}
                    className="flex w-full items-center justify-evenly space-x-2"
                  >
                    <div className="h-full flex items-center text-3xl">
                      <item.icon />
                    </div>
                    <p className="text-xs">{item.name}</p>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="py-3 bg-black text-white">
        <div className="container mx-auto">
          <div className="flex items-center">
            <div className="flex items-center justify-between w-1/5">
              <div className="flex items-center  space-x-3">
                <div className="text-xl">
                  <BsGrid />
                </div>
                <p>Shop Categories</p>
              </div>
              <div>
                <div className="">
                  <TiArrowSortedDown />
                </div>
              </div>
            </div>
            <div className="w-full uppercase flex items-center mx-5">
              {routePage.map((item: any, index: number) => {
                return (
                  <Link key={index} href={item.route} className="px-5">
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
