import Link from "next/link";
import React, { FormEvent, useEffect, useState } from "react";
import Image from "next/image";
import { BiSearch } from "react-icons/bi";
import { TiArrowSortedDown } from "react-icons/ti";
import {
  CartProductProps,
  CategoryItemProps,
  MenuItemProps,
  RouteProps,
} from "@/types";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import ShopCategory from "@/public/images/menu.svg";
import FormFieldButton from "../Global/FormFieldButton";
import { useSelector } from "react-redux";
import {
  AiOutlineHome,
  AiOutlineLogout,
  AiOutlineShoppingCart,
  AiOutlineSwap,
} from "react-icons/ai";
import DropdownHover from "../DropdownHover";
import { FiHeart } from "react-icons/fi";
import { BsPerson } from "react-icons/bs";
import { setLogout } from "@/redux/state/authState";
import { useDispatch } from "react-redux";
import { NumericFormat } from "react-number-format";
import { setCart, setRemoveCart } from "@/redux/state/userState";
import { useRouter } from "next/router";

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

const links: CategoryItemProps[] = [
  {
    title: "Computer & Laptop",
    image: "/images/laptop.jpg",
    route: "/",
  },
  {
    title: "Camera & Videos",
    image: "/images/camera.jpg",
    route: "/",
  },
  {
    title: "Smart Television",
    image: "/images/tv.jpg",
    route: "/",
  },
  {
    title: "Smartwatches",
    image: "/images/watch.jpg",
    route: "/",
  },
  {
    title: "Music & Gaming",
    image: "/images/watch.jpg",
    route: "/",
  },
  {
    title: "Mobiles & Tablets",
    image: "/images/tab.jpg",
    route: "/",
  },
  {
    title: "Headphones",
    image: "/images/headphone.jpg",
    route: "/",
  },
  {
    title: "Accessories",
    image: "/images/acc.jpg",
    route: "/",
  },
  {
    title: "Portable Speakers",
    image: "/images/speaker.jpg",
    route: "/",
  },
  {
    title: "Home Appliances",
    image: "/images/homeapp.jpg",
    route: "/",
  },
];

const menuItem: MenuItemProps[] = [
  {
    name: "Wishlist",
    icon: FiHeart,
    route: "/wishlist",
  },
  {
    name: "Address",
    icon: AiOutlineHome,
    route: "/",
  },
  {
    name: "Account",
    icon: BsPerson,
    route: "/",
  },
];

export default function Header() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const user = useSelector((state: any) => state.auth.user);
  const token = useSelector((state: any) => state.auth.token);
  const cart = useSelector((state: any) => state.user.cart);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_URL_PRODUCTION}/api/v1/user/cart`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.ok) {
          const result = await response.json();
          dispatch(setCart({ cart: result }));
        }
      } catch (err) {
        alert(err);
      }
    };

    if (user) {
      fetchCart();
    } else {
      dispatch(setRemoveCart());
    }
  }, [cart]);

  const handleChange = (
    e: FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setEmail(e.currentTarget.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleLogout = () => {
    dispatch(setLogout());
    router.push("/");
  };

  return (
    <div className="divide-y divide-gray-700">
      <div className="py-4 bg-black text-white">
        <div className="container mx-auto">
          <div className="flex items-center justify-center">
            <Link href={"/"}>
              <h2 className="text-2xl font-medium">Bukapasar.</h2>
            </Link>
            <FormFieldButton
              classname="flex-grow px-32"
              type="text"
              placeholder="Search Product Here..."
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              value={email}
              iconButton={<BiSearch />}
            />
            <div className="flex items-center justify-end">
              <div className="flex items-center justify-center gap-8 pr-10">
                {user && (
                  <Link href={"/order"} className="text-2xl">
                    <AiOutlineSwap />
                  </Link>
                )}
                <DropdownHover
                  buttonToogle={
                    <AiOutlineShoppingCart className="text-2xl cursor-pointer" />
                  }
                >
                  {cart ? (
                    <div className="py-3 px-4">
                      <div className="space-y-2 border-b pb-3">
                        {cart.products
                          .slice(0, 3)
                          .map((item: CartProductProps) => {
                            return (
                              <Link
                                key={item._id}
                                href={"/"}
                                className="border rounded-xl flex items-center text-sm italic overflow-clip text-black"
                              >
                                <Image
                                  src={`${item.product.images[0].url}`}
                                  alt="cart-photo"
                                  height={800}
                                  width={1200}
                                  className="w-28 h-24 bg-gray-300 rounded bg-cover bg-center object-cover"
                                />
                                <div className="px-6 space-y-2 font-medium w-[450px]">
                                  <p className="line-clamp-1">
                                    {item.product.title}
                                  </p>
                                  <p className="text-blue-600">
                                    {" "}
                                    Rp.{" "}
                                    <NumericFormat
                                      value={item.price}
                                      displayType="text"
                                      thousandSeparator={true}
                                    />
                                  </p>
                                </div>
                                <p className="mr-7 min-w-max">
                                  {item.count} pcs
                                </p>
                              </Link>
                            );
                          })}
                      </div>
                      <div className="pt-3 flex items-center justify-between text-black text-sm font-thin">
                        <p>
                          Total Items:{" "}
                          <span className="font-medium">
                            {cart.countTotal} pcs
                          </span>
                        </p>
                        <p>
                          Total Price:{" "}
                          <span className="font-medium">
                            Rp.{" "}
                            <NumericFormat
                              value={cart.cartTotal}
                              displayType="text"
                              thousandSeparator={true}
                            />
                          </span>
                        </p>
                        <Link
                          href={"/cart"}
                          className="text-blue-600 font-normal"
                        >
                          See More
                        </Link>
                      </div>
                    </div>
                  ) : (
                    <div className="py-3 px-6 text-black w-max border text-sm flex flex-col items-center justify-center gap-5">
                      <p>Kosong seperti hatimu 〜(￣▽￣〜)</p>
                    </div>
                  )}
                </DropdownHover>
              </div>
              <div className="flex justify-center gap-4 pl-3 border-l border-gray-600">
                {user ? (
                  <DropdownHover>
                    <div className="w-56">
                      {menuItem.map((val: MenuItemProps, index: number) => {
                        return (
                          <Link
                            key={index}
                            href={val.route}
                            className="py-4 px-6 text-gray-800 hover:bg-gray-100 hover:text-gray-900 flex items-center text-sm"
                          >
                            <val.icon className="mr-4 text-xl" />
                            <p className="text-gray-400">{val.name}</p>
                          </Link>
                        );
                      })}
                      <button
                        onClick={handleLogout}
                        className="py-4 px-6 w-full text-gray-800 hover:bg-gray-100 hover:text-gray-900 flex items-center text-sm"
                      >
                        <AiOutlineLogout className="mr-4 text-lg" />
                        <p className="text-gray-400">Log out</p>
                      </button>
                    </div>
                  </DropdownHover>
                ) : (
                  <>
                    <Link
                      href={"/login"}
                      className="px-5 py-2 border-2 border-blue-600 text-center rounded-lg"
                    >
                      Masuk
                    </Link>
                    <Link
                      href={"/register"}
                      className="px-5 py-2 bg-blue-600 text-center rounded-lg"
                    >
                      Daftar
                    </Link>
                  </>
                )}
              </div>
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
                <Menu.Items className="absolute mt-3 origin-top-right rounded-b-lg w-full bg-gray-900 z-10">
                  <div className="">
                    {links.map((item: CategoryItemProps, index: number) => {
                      return (
                        <Menu.Item key={index}>
                          {({ active }) => (
                            <Link
                              href={item.route}
                              className={`${
                                active ? "text-white/90" : "text-white"
                              } group flex w-full items-center rounded-md p-4 text-xs`}
                            >
                              {item.title}
                            </Link>
                          )}
                        </Menu.Item>
                      );
                    })}
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
            <div className="flex items-center mx-5 w-4/5">
              {routePage.map((item: RouteProps, index: number) => {
                return (
                  <Link
                    key={index}
                    href={item.route}
                    className="px-5 text-sm hover:text-white/90"
                  >
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
