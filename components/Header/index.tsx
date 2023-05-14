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
import FormFieldButton from "../Global/FormFieldButton";
import { useSelector } from "react-redux";
import {
  AiOutlineLogout,
  AiOutlineShoppingCart,
  AiOutlineSwap,
} from "react-icons/ai";
import DropdownHover from "../DropdownHover";

import { useDispatch } from "react-redux";
import { NumericFormat } from "react-number-format";
import { setCart, setRemoveCart } from "@/redux/state/userState";
import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/react";
import { setLogout } from "@/redux/state/authState";
import Cart from "@/public/images/cart/cart-8.svg";
import { categoryProduct } from "@/data/Global/category";
import { routePage } from "@/data/route";
import { userMenu } from "@/data/userMenu";

export default function Header() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const user = useSelector((state: any) => state.auth.user);
  const token = useSelector((state: any) => state.auth.token);
  const cart = useSelector((state: any) => state.user.cart);

  // NEXT AUTH
  const { data: session } = useSession();

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
        // console.info(err);
      }
    };

    if (user) {
      fetchCart();
    } else {
      dispatch(setRemoveCart());
    }
  }, []);

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
    dispatch(setRemoveCart());
    signOut();
    router.push("/");
  };

  return (
    <div className="">
      <div className="py-4 bg-white text-black">
        <div className="container mx-auto">
          <div className="flex items-center justify-center">
            <Link href={"/"}>
              <h2 className="text-2xl font-extrabold">Bukapasar.</h2>
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
                {(session || user) && (
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
                          .slice(0, 4)
                          .map((item: CartProductProps) => {
                            return (
                              <Link
                                key={item._id}
                                href={"/"}
                                className="border rounded-xl flex items-center text-sm overflow-clip text-black"
                              >
                                <Image
                                  src={`https://picsum.photos/200`}
                                  alt="cart-photo"
                                  height={800}
                                  width={1200}
                                  className="w-28 h-24 bg-gray-300 rounded bg-cover bg-center object-cover"
                                />
                                <div className="px-6 space-y-2 font-bold w-[450px]">
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
                                  {item.count} items
                                </p>
                              </Link>
                            );
                          })}
                      </div>
                      <div className="pt-3 flex items-center justify-between text-black text-sm">
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
                          className="text-blue-600 font-bold"
                        >
                          See More
                        </Link>
                      </div>
                    </div>
                  ) : (
                    <div className="py-6 px-6 text-black border border-gray-400 text-sm flex flex-col items-center justify-center gap-5 w-[400px]">
                      {/* <p>Kosong seperti hatimu 〜(￣▽￣〜)</p> */}
                      <Image
                        src={Cart}
                        alt="empty-cart"
                        height={1200}
                        width={800}
                        draggable={false}
                        className="w-48 bg-cover bg-center object-cover"
                      />
                      <p className="text-medium text-gray-400 text-sm w-56 text-center">
                        Keranjang masih kosong, klik dibawah ini untuk mulai
                        belanja!
                      </p>
                      <Link
                        href={"/product"}
                        className="rounded bg-blue-700 hover:bg-blue-600 transition px-6 py-3 text-white"
                      >
                        Mulai Belanja Sekarang
                      </Link>
                    </div>
                  )}
                </DropdownHover>
              </div>
              <div className="flex justify-center gap-4 pl-3 border-l border-gray-400">
                {session || user ? (
                  <DropdownHover>
                    <div className="w-56 border-2 border-gray-400">
                      {userMenu.map((val: MenuItemProps, index: number) => {
                        return (
                          <Link
                            key={index}
                            href={val.route}
                            className="py-4 px-6 text-gray-800 hover:bg-gray-100 hover:text-gray-900 flex items-center text-sm"
                          >
                            <val.icon className="mr-4 text-xl" />
                            <p className="">{val.name}</p>
                          </Link>
                        );
                      })}
                      <button
                        onClick={handleLogout}
                        className="w-full py-4 px-6 text-gray-800 hover:bg-gray-100 hover:text-gray-900 flex items-center text-sm"
                      >
                        <AiOutlineLogout className="mr-4 text-lg" />
                        <p>Log out</p>
                      </button>
                    </div>
                  </DropdownHover>
                ) : (
                  <>
                    <Link
                      href={"/login"}
                      className="px-5 py-2 border-2 border-blue-600 text-center font-semibold rounded-lg"
                    >
                      Masuk
                    </Link>
                    <Link
                      href={"/register"}
                      className="px-5 py-2 bg-blue-600 text-center text-white font-semibold rounded-lg"
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
      <div className="py-3 bg-white border-y-2 border-gray-200 text-black">
        <div className="container mx-auto">
          <div className="flex items-center">
            <Menu as="div" className="relative w-1/5">
              <Menu.Button className="flex items-center justify-between w-full">
                <p className="text-sm font-semibold">Shop Categories</p>
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
                <Menu.Items className="absolute mt-3 origin-top-right rounded-b-lg w-full bg-white z-10 border border-gray-400 shadow-xl">
                  <div className="">
                    {categoryProduct.map(
                      (item: CategoryItemProps, index: number) => {
                        return (
                          <Menu.Item key={index}>
                            {({ active }) => (
                              <Link
                                href={`/product?categories=${item.route}`}
                                className={`${
                                  active ? "text-blue-700" : "text-black"
                                } group flex w-full items-center rounded-md p-4 text-sm font-semibold`}
                              >
                                {item.label}
                              </Link>
                            )}
                          </Menu.Item>
                        );
                      }
                    )}
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
                    className="px-5 text-sm font-semibold hover:text-gray-700"
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
