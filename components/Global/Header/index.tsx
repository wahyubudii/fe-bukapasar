import Link from "next/link";
import React, { FormEvent, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { SlHeart } from "react-icons/sl";
import { HiArrowPath } from "react-icons/hi2";
import { BsPerson, BsGrid } from "react-icons/bs";
import { GiShoppingCart } from "react-icons/gi";
import { TiArrowSortedDown } from "react-icons/ti";
import { menuItemProps, routeProps } from "@/types";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import FormField from "../FormField";

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
    name: "My Cart sadsadas",
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

const links = [
  { href: "/", label: "Account settings" },
  { href: "/", label: "Support" },
  { href: "/", label: "License" },
];

export default function Header() {
  const [email, setEmail] = useState("");
  const handleChange = (
    e: FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setEmail(e.currentTarget.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="divide-y divide-gray-600">
      <div className="py-3 bg-black text-white">
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
      <div className="py-5 bg-black text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-5">
            <Link href={"/"}>
              <h2 className="text-3xl font-medium">Bukapasar.</h2>
            </Link>
            <FormField
              classname="col-span-2"
              type="text"
              placeholder="Search Product Here..."
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              value={email}
              iconButton={<BiSearch />}
            />
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
          <div className="flex items-center divide-x divide-gray-600">
            <Menu as="div" className="relative w-1/5">
              <Menu.Button className="flex items-center justify-between w-full">
                <div className="flex items-center space-x-3">
                  <div className="text-xl">
                    <BsGrid />
                  </div>
                  <p>Shop Categories</p>
                </div>
                <TiArrowSortedDown />
              </Menu.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute mt-3 w-56 origin-top-right rounded-b-lg w-full bg-gray-800">
                  <div className="divide-y divide-gray-600">
                    {links.map((item: any, index: number) => {
                      return (
                        <Menu.Item key={index}>
                          {({ active }) => (
                            <Link
                              href={item.href}
                              className={`${
                                active ? "bg-black text-white" : "text-white"
                              } group flex w-full items-center rounded-md p-4 text-sm`}
                            >
                              {item.label}
                            </Link>
                          )}
                        </Menu.Item>
                      );
                    })}
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
            <div className="uppercase flex items-center mx-5 w-4/5">
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
