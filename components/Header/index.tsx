import Link from "next/link";
import React, { FormEvent, useState } from "react";
import Image from "next/image";
import { BiSearch } from "react-icons/bi";
import { SlHeart } from "react-icons/sl";
import { HiArrowPath } from "react-icons/hi2";
import { BsPerson, BsGrid } from "react-icons/bs";
import { GiShoppingCart } from "react-icons/gi";
import { TiArrowSortedDown } from "react-icons/ti";
import { MenuItemProps, RouteProps } from "@/types";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import ShopCategory from "@/public/images/menu.svg";
import FormFieldButton from "../Global/FormFieldButton";

const menuItem: MenuItemProps[] = [
  {
    name: "Compare Products",
    icon: HiArrowPath,
    route: "/compare-products",
  },
  {
    name: "Favourite Wishlist",
    icon: SlHeart,
    route: "/wishlist",
  },
  {
    name: "Log in My Account",
    icon: BsPerson,
    route: "/login",
  },
  {
    name: "My Cart sadsadas",
    icon: GiShoppingCart,
    route: "/cart",
  },
];

const routePage: RouteProps[] = [
  {
    name: "Home",
    route: "/",
  },
  {
    name: "Our Store",
    route: "/product",
  },
  {
    name: "Blogs",
    route: "/blog",
  },
  {
    name: "Contacts",
    route: "/contact",
  },
];

const links: RouteProps[] = [
  { route: "/", name: "Account settings" },
  { route: "/", name: "Support" },
  { route: "/", name: "License" },
];

export default function Header() {
  const [email, setEmail] = useState<string>("");
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
      <div className="py-5 bg-black text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-5">
            <Link href={"/"}>
              <h2 className="text-3xl font-medium">Bukapasar.</h2>
            </Link>
            <FormFieldButton
              classname="col-span-2"
              type="text"
              placeholder="Search Product Here..."
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              value={email}
              iconButton={<BiSearch />}
            />
            <div className="grid grid-cols-4 gap-5 col-span-2 pl-12">
              {menuItem.map((item: MenuItemProps, index: number) => {
                return (
                  <Link
                    key={index}
                    href={item.route}
                    className="flex w-full items-center justify-evenly space-x-3"
                  >
                    <div className="h-full flex items-center text-2xl">
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
                  <Image
                    src={ShopCategory.src}
                    alt="menu-icon"
                    width={1200}
                    height={1200}
                    draggable={false}
                    className="w-5 h-5 bg-cover bg-center object-cover"
                  />
                  <p className="text-sm">Shop Categories</p>
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
                <Menu.Items className="absolute mt-3 origin-top-right rounded-b-lg w-full bg-gray-800 z-10">
                  <div className="divide-y divide-gray-600">
                    {links.map((item: RouteProps, index: number) => {
                      return (
                        <Menu.Item key={index}>
                          {({ active }) => (
                            <Link
                              href={item.route}
                              className={`${
                                active ? "bg-black text-white" : "text-white"
                              } group flex w-full items-center rounded-md p-4 text-sm`}
                            >
                              {item.name}
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
              {routePage.map((item: RouteProps, index: number) => {
                return (
                  <Link key={index} href={item.route} className="px-5 text-sm">
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
