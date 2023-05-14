import Layout from "@/components/Global/Layout";
import { MenuItemProps, MetaProps, ProductProps, filterOption } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React, { ChangeEvent, Fragment, useEffect, useState } from "react";
import { NumericFormat } from "react-number-format";
import ReactStars from "react-stars";
import HeartIcon from "@/public/images/wish.svg";
import HeartFillIcon from "@/public/images/wish-black.svg";
import ProductSkeleton from "@/components/Global/Skeleton/ProductSkeleton";
import RandomProduct from "@/components/Products/RandomProduct";
import { Listbox, Transition } from "@headlessui/react";
import { BiChevronDown } from "react-icons/bi";
import {
  availabilityFilter,
  categoryFilter,
  productAction,
  sortListProduct,
} from "@/data/product";

const meta: MetaProps = {
  title: "Product | Buka Pasar",
  type: "website",
};

export default function Product() {
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [price, setPrice] = useState<number>(100);

  // SORTING & SELECTED CATEGORIES PRODUCT
  const [selectedSortList, setSelectedSortList] = useState<filterOption>(
    sortListProduct[0]
  );
  const [selectedCategory, setSelectedCategory] = useState<string>();

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        let apiUrl = `${process.env.NEXT_PUBLIC_URL_PRODUCTION}/api/v1/product`;

        if (selectedCategory) {
          apiUrl += `?category=${encodeURIComponent(selectedCategory)}`;
        }

        const response = await fetch(apiUrl, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          const result = await response.json();
          setProducts(result);
        } else {
          setProducts([]);
        }
      } catch (err) {
        alert(err);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 300);
      }
    };

    fetchProduct();
  }, [selectedCategory]);

  const handleCategoryChange = (category: string) => {
    if (selectedCategory === category) {
      setSelectedCategory("");
    } else {
      setSelectedCategory(category);
    }
  };

  const changePrice = (e: ChangeEvent<HTMLInputElement>) => {
    setPrice(Number(e.target.value));
  };

  return (
    <Layout customMeta={meta}>
      <div className="py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-10">
            <div className="col-span-2 space-y-5 border-r border-gray-200 pr-4">
              <h3 className="font-bold text-2xl">Filters</h3>
              <div className="p-5 space-y-8">
                <div>
                  <p className="font-semibold text-lg">Price</p>
                  <div className="pt-5 w-full">
                    <div className="flex items-center justify-between text-gray-500 font-semibold text-sm">
                      <label htmlFor="price-range" className="block mb-1">
                        Rp.{" "}
                        <NumericFormat
                          value={price}
                          displayType="text"
                          thousandSeparator={true}
                        />
                      </label>
                      <label htmlFor="price-range" className="block mb-1">
                        Rp.{" "}
                        <NumericFormat
                          value={100000000}
                          displayType="text"
                          thousandSeparator={true}
                        />
                      </label>
                    </div>
                    <input
                      id="price-range"
                      type="range"
                      min={0}
                      max={100000000}
                      step={500000}
                      value={price}
                      onChange={changePrice}
                      className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-blue-100"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-5 items-start">
                  <p className="font-semibold text-lg">Availability</p>
                  {availabilityFilter.map((item: any, index: number) => {
                    return (
                      <div
                        key={index}
                        className="flex items-center gap-3 text-sm text-gray-700"
                      >
                        <input
                          className="w-4 h-4"
                          type="checkbox"
                          id={item.id}
                          value={item.id}
                        />
                        <label htmlFor={item.id}>{item.label}</label>
                      </div>
                    );
                  })}
                </div>
                <div className="flex flex-col gap-5 items-start">
                  <p className="font-semibold text-lg">Category</p>
                  {categoryFilter.map((item: any, index: number) => {
                    return (
                      <div
                        key={index}
                        className="flex items-center gap-3 text-sm text-gray-700"
                      >
                        <input
                          className="w-4 h-4"
                          type="checkbox"
                          id={item.id}
                          value={item.id}
                          checked={selectedCategory === item.id}
                          onChange={() => handleCategoryChange(item.id)}
                        />
                        <label htmlFor={item.id}>{item.label}</label>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="rounded-xl p-5 shadow-md space-y-5 bg-white">
                <h3 className="font-semibold">Random Products</h3>
                <div className="space-y-3">
                  <RandomProduct />
                  <RandomProduct />
                </div>
              </div>
            </div>
            <div className="pl-12 col-span-8 space-y-5">
              <div className="bg-white flex items-center justify-between">
                <p className="text-2xl font-bold">Items Collections</p>
                <div className="z-10">
                  <Listbox
                    value={selectedSortList}
                    onChange={setSelectedSortList}
                  >
                    <div className="relative mt-1">
                      <Listbox.Button className="relative w-full border-2 border-blue-400 cursor-pointer bg-white py-2 pl-3 pr-10 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                        <span className="block truncate">
                          {selectedSortList.label}
                        </span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                          <BiChevronDown
                            className="h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />
                        </span>
                      </Listbox.Button>
                      <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                          {sortListProduct.map(
                            (item: filterOption, index: number) => (
                              <Listbox.Option
                                key={index}
                                className={({ active }) =>
                                  `relative cursor-default select-none ${
                                    active ? "bg-gray-100" : "text-gray-900"
                                  }`
                                }
                                value={item}
                              >
                                {({ selected }) => (
                                  <>
                                    <span
                                      className={`block truncate py-2 px-4 ${
                                        selected
                                          ? "font-medium bg-blue-600 text-white"
                                          : "font-normal"
                                      }`}
                                    >
                                      {item.label}
                                    </span>
                                  </>
                                )}
                              </Listbox.Option>
                            )
                          )}
                        </Listbox.Options>
                      </Transition>
                    </div>
                  </Listbox>
                </div>
              </div>
              <div className="grid grid-cols-5 gap-5">
                {loading ? (
                  <>
                    <ProductSkeleton />
                    <ProductSkeleton />
                    <ProductSkeleton />
                    <ProductSkeleton />
                    <ProductSkeleton />
                    <ProductSkeleton />
                    <ProductSkeleton />
                    <ProductSkeleton />
                    <ProductSkeleton />
                    <ProductSkeleton />
                  </>
                ) : (
                  <>
                    {products.map((item: ProductProps, index: number) => {
                      console.log(item);
                      return (
                        <Link
                          href={`/product/${item._id}`}
                          key={index}
                          className="relative overflow-hidden rounded-md shadow-md hover:shadow-xl transition group bg-white"
                        >
                          <Image
                            src={"https://picsum.photos/200"}
                            alt={item.title}
                            height={2000}
                            width={2000}
                            draggable={false}
                            priority={true}
                            className="w-full h-60 bg-cover bg-center rounded-md"
                          />
                          <div className="px-6 pt-2 pb-4 flex flex-col justify-around h-[220px]">
                            <div className="space-y-1">
                              <p className="pt-4 font-bold group-hover:underline line-clamp-2 text-gray-700">
                                {item.title}
                              </p>
                              <div className="flex items-center gap-3">
                                <ReactStars
                                  half={true}
                                  edit={false}
                                  count={5}
                                  size={18}
                                  value={
                                    item?.ratings.length
                                      ? item?.ratings[0].star
                                      : 0
                                  }
                                />
                                <p className="text-sm font-medium">
                                  (
                                  {item?.ratings.length
                                    ? item?.ratings[0].star
                                    : 0}
                                  )
                                </p>
                              </div>
                            </div>
                            {true ? (
                              <>
                                <div className="font-semibold text-sm text-blue-700">
                                  <div className="text-[11px] text-gray-400 line-through">
                                    Rp.{" "}
                                    <NumericFormat
                                      value={item.price}
                                      displayType="text"
                                      thousandSeparator={true}
                                    />
                                  </div>
                                  <div className="text-black font-bold">
                                    Rp.{" "}
                                    <NumericFormat
                                      value={
                                        item.price -
                                        item.price * (item.quantity / 100)
                                      }
                                      displayType="text"
                                      thousandSeparator={true}
                                    />
                                  </div>
                                </div>
                                {/* <div className="absolute text-xs font-medium rounded-full bg-red-600 text-white top-3 left-5 px-3 py-1">
                                  -{item.quantity}%
                                </div> */}
                              </>
                            ) : (
                              <div className="font-medium text-sm text-blue-700">
                                Rp.{" "}
                                <NumericFormat
                                  value={item.price}
                                  displayType="text"
                                  thousandSeparator={true}
                                />
                              </div>
                            )}
                          </div>
                          <button
                            className={`absolute text-xl ${
                              true ? "text-red-600" : "text-gray-600"
                            } font-medium top-4 right-4 hover:bg-red-200 p-1 transition rounded-full`}
                          >
                            <Image
                              alt="view-icon"
                              height={1200}
                              width={1200}
                              src={true ? HeartFillIcon.src : HeartIcon.src}
                              className="w-4 h-4"
                            />
                          </button>
                          <div className="absolute top-12 -right-16 group-hover:right-4 group-hover:duration-300 flex flex-col space-y-2">
                            {productAction.map(
                              (menu: MenuItemProps, index: number) => {
                                return (
                                  <Link
                                    key={index}
                                    href={menu.route + `/${item._id}`}
                                    className="hover:bg-blue-200 p-1 transition rounded-full"
                                  >
                                    <Image
                                      alt="view-icon"
                                      height={1200}
                                      width={1200}
                                      src={menu.icon}
                                      className="w-4 h-4 text-white"
                                    />{" "}
                                  </Link>
                                );
                              }
                            )}
                          </div>
                        </Link>
                      );
                    })}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
