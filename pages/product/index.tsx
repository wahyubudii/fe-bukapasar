import BreadCrumbs from "@/components/BreadCrumbs";
import Layout from "@/components/Global/Layout";
import { MenuItemProps, MetaProps, ProductProps } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { NumericFormat } from "react-number-format";
import ReactStars from "react-stars";
import ViewIcon from "@/public/images/view.svg";
import CompareIcon from "@/public/images/prodcompare.svg";
import CartIcon from "@/public/images/add-cart.svg";
import HeartIcon from "@/public/images/wish.svg";
import HeartFillIcon from "@/public/images/wish-black.svg";
import ProductSkeleton from "@/components/Global/Skeleton/ProductSkeleton";
import RandomProduct from "@/components/Products/RandomProduct";
import RandomProductSkeleton from "@/components/Global/Skeleton/RandomProductSketon";
import GR from "@/public/images/gr.svg";
import GR2 from "@/public/images/gr2.svg";
import GR3 from "@/public/images/gr3.svg";
import GR4 from "@/public/images/gr4.svg";

export default function Product() {
  const meta: MetaProps = {
    title: "Product | Buka Pasar",
    type: "website",
  };

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
    {
      route: "/",
      icon: CartIcon.src,
      name: "cart-icon",
    },
  ];

  const sortButton: MenuItemProps[] = [
    {
      name: "gr",
      icon: GR.src,
      action: () => {
        console.log("gr1");
      },
    },
    {
      name: "gr2",
      icon: GR2.src,
      action: () => {
        console.log("gr2");
      },
    },
    {
      name: "gr3",
      icon: GR3.src,
      action: () => {
        console.log("gr3");
      },
    },
    {
      name: "gr4",
      icon: GR4.src,
      action: () => {
        console.log("gr4");
      },
    },
  ];

  const [products, setProducts] = useState<ProductProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const response = await fetch(`http://localhost:3000/api/v1/product`, {
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
        }, 2000);
      }
    };

    fetchProduct();
  }, []);

  return (
    <Layout customMeta={meta}>
      <div className="bg-white">
        <div className="container mx-auto py-4">
          <BreadCrumbs />
        </div>
      </div>
      <div className="bg-gray-100">
        <div className="container mx-auto py-4">
          <div className="grid grid-cols-10 gap-5">
            <div className="col-span-2 space-y-5">
              <div className="rounded-xl p-5 shadow space-y-8 bg-white">
                <h3 className="font-semibold">Filter By</h3>
                <div className="flex flex-col gap-3 items-start text-sm">
                  <p className="font-medium">Availlability</p>
                  <div className="flex items-center gap-3 text-xs text-gray-500">
                    <input type="checkbox" id="checkbox-stock" value="" />
                    <label htmlFor="checkbox-stock">In Stock</label>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-gray-500">
                    <input type="checkbox" id="checkbox-out-stock" />
                    <label htmlFor="checkbox-out-stock">Out of Stock</label>
                  </div>
                </div>
                <div className="flex flex-col gap-3 items-start text-sm">
                  <p className="font-medium">Price</p>
                  <div className="w-full space-y-3">
                    <div className="pl-3 pr-1 bg-gray-200/50 text-gray-500 text-xs rounded flex items-center w-full">
                      <label htmlFor="price-from">Rp. </label>
                      <input
                        type="number"
                        className="p-2 w-full bg-transparent text-gray-500 outline-none placeholder:text-gray-500"
                        placeholder="0"
                        id="price-from"
                      />
                    </div>
                    <div className="pl-3 pr-1 bg-gray-200/50 text-gray-500 text-xs rounded flex items-center w-full">
                      <label htmlFor="price-to">Rp. </label>
                      <input
                        type="number"
                        className="p-2 w-full bg-transparent text-gray-500 outline-none placeholder:text-gray-500"
                        placeholder="1.000.000"
                        id="price-to"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-xl p-5 shadow space-y-5 bg-white">
                <h3 className="font-semibold">Random Products</h3>
                <div className="space-y-3">
                  {loading ? (
                    <div>
                      <RandomProductSkeleton />
                      <RandomProductSkeleton />
                    </div>
                  ) : (
                    <>
                      <p>Lorem, ipsum.</p>
                      <RandomProduct products={products} />
                      <RandomProduct products={products} />
                    </>
                  )}
                </div>
              </div>
            </div>
            <div className="col-span-8 space-y-5">
              <div className="rounded-xl shadow bg-white px-4 py-2 flex items-center justify-between">
                <div className="flex items-center gap-5 px-2 py-2">
                  <p className="text-sm after:content-[':'] after:ml-3">
                    Sort By
                  </p>
                  <button className="flex items-center gap-2 text-gray-500 text-xs bg-gray-100 px-4 py-1 rounded-full">
                    <p>Best Selling</p>
                    <p>{">"}</p>
                  </button>
                </div>
                <div className="text-gray-400 text-sm font-medium flex items-center gap-5">
                  <p>{products?.length} Products</p>
                  <div className="space-x-2">
                    {sortButton.map((item: MenuItemProps, index: number) => {
                      return (
                        <button key={index} onClick={item.action}>
                          <Image
                            src={item.icon}
                            alt={item.name}
                            height={1200}
                            width={800}
                            draggable={false}
                            className="w-7 h-7 rounded-lg bg-gray-200 hover:bg-gray-300 transition p-2"
                          />
                        </button>
                      );
                    })}
                  </div>
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
                      return (
                        <div
                          key={index}
                          className="relative overflow-hidden rounded-xl shadow group bg-white"
                        >
                          <Image
                            src={"https://picsum.photos/200"}
                            alt={item.title}
                            height={2000}
                            width={2000}
                            draggable={false}
                            priority={true}
                            className="p-12 w-full h-60 bg-cover bg-center object-contain rounded-t-lg"
                          />
                          <div className="pb-6 px-6">
                            <p className="text-[11px] text-gray-600 font-medium bg-gray-200 w-fit px-3 py-1 rounded-full">
                              {item.brand}
                            </p>
                            <Link
                              href={`/product/${item.slug}`}
                              className="pt-4 text-sm font-medium group-hover:underline line-clamp-2"
                            >
                              {item.title}
                            </Link>
                            <div className="py-1.5 flex items-center gap-3">
                              <ReactStars
                                half={true}
                                edit={false}
                                count={5}
                                value={
                                  item?.ratings.length
                                    ? item?.ratings[0].star
                                    : 0
                                }
                                size={22}
                              />
                              <p className="font-medium text-sm">
                                (
                                {item?.ratings.length
                                  ? item?.ratings[0].star
                                  : 0}
                                )
                              </p>
                            </div>
                            {true ? (
                              <>
                                <div className="font-medium text-sm text-blue-700">
                                  <div className="text-[11px] text-gray-500 line-through">
                                    Rp.{" "}
                                    <NumericFormat
                                      value={item.price}
                                      displayType="text"
                                      thousandSeparator={true}
                                    />
                                  </div>
                                  <div className="text-red-500">
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
                                <div className="absolute text-xs font-medium rounded-full bg-red-600 text-white top-3 left-5 px-3 py-1">
                                  -{item.quantity}%
                                </div>
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
                              (item: MenuItemProps, index: number) => {
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
                              }
                            )}
                          </div>
                        </div>
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
