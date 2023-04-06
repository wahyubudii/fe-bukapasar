import BreadCrumbs from "@/components/BreadCrumbs";
import Layout from "@/components/Global/Layout";
import { MetaProps, ProductProps } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { NumericFormat } from "react-number-format";
import ReactStars from "react-stars";
import { AiOutlineClose } from "react-icons/ai";

export default function CompareProducts() {
  const meta: MetaProps = {
    title: "Compare Product | Buka Pasar",
    type: "website",
  };

  const selectProduct: ProductProps[] = [
    {
      _id: "6404b530cdd8ed0e5b2a9015",
      title: "HP OMEN 16 RTX3070 8GB/ i7 11800 16GB 1TBSSD",
      slug: "hp-omen-16-rtx3070-8gb-i7-11800-16gb-1tbssd",
      description: "product lorem ipsum",
      price: 18299000,
      category: "Laptop",
      brand: "HP",
      quantity: 0,
      sold: 0,
      images: [
        {
          url: "https://res.cloudinary.com/homeivas/image/upload/v1678618403/qepinouqqb6gzc3aybkv.jpg",
          asset_id: "2fe37a250ed31bf0ca7bead3987c513e",
          public_id: "qepinouqqb6gzc3aybkv",
        },
      ],
      color: "White",
      totalRating: "5",
      ratings: [
        {
          star: 5,
          comment: "Testing komen",
          postedby: "640007df6d39289d818297fa",
          _id: "6405ecc38ef9fd0eeb6ad893",
        },
      ],
      createdAt: "2023-03-05T15:28:48.491Z",
      updatedAt: "2023-03-12T10:53:23.660Z",
    },
    {
      _id: "6404b530cdd8ed0e5b2a9015",
      title: "HP OMEN 16 RTX3070 8GB/ i7 11800 16GB 1TBSSD",
      slug: "hp-omen-16-rtx3070-8gb-i7-11800-16gb-1tbssd",
      description: "product lorem ipsum",
      price: 18299000,
      category: "Laptop",
      brand: "HP",
      quantity: 40,
      sold: 0,
      images: [
        {
          url: "https://res.cloudinary.com/homeivas/image/upload/v1678618403/qepinouqqb6gzc3aybkv.jpg",
          asset_id: "2fe37a250ed31bf0ca7bead3987c513e",
          public_id: "qepinouqqb6gzc3aybkv",
        },
      ],
      color: "White",
      totalRating: "5",
      ratings: [
        {
          star: 5,
          comment: "Testing komen",
          postedby: "640007df6d39289d818297fa",
          _id: "6405ecc38ef9fd0eeb6ad893",
        },
      ],
      createdAt: "2023-03-05T15:28:48.491Z",
      updatedAt: "2023-03-12T10:53:23.660Z",
    },
    {
      _id: "6404b530cdd8ed0e5b2a9015",
      title: "HP OMEN 16 RTX3070 8GB/ i7 11800 16GB 1TBSSD",
      slug: "hp-omen-16-rtx3070-8gb-i7-11800-16gb-1tbssd",
      description: "product lorem ipsum",
      price: 18299000,
      category: "Laptop",
      brand: "HP",
      quantity: 40,
      sold: 0,
      images: [
        {
          url: "https://res.cloudinary.com/homeivas/image/upload/v1678618403/qepinouqqb6gzc3aybkv.jpg",
          asset_id: "2fe37a250ed31bf0ca7bead3987c513e",
          public_id: "qepinouqqb6gzc3aybkv",
        },
      ],
      color: "White",
      totalRating: "5",
      ratings: [
        {
          star: 5,
          comment: "Testing komen",
          postedby: "640007df6d39289d818297fa",
          _id: "6405ecc38ef9fd0eeb6ad893",
        },
      ],
      createdAt: "2023-03-05T15:28:48.491Z",
      updatedAt: "2023-03-12T10:53:23.660Z",
    },
  ];

  const [grid, setGrid] = useState<number>(selectProduct.length);

  return (
    <Layout customMeta={meta}>
      <div className="bg-white">
        <div className="container mx-auto py-4">
          <BreadCrumbs />
          <div
            className={`py-10 grid ${
              grid < 4 ? `grid-cols-${grid}` : `grid-cols-4`
            } gap-20`}
          >
            {selectProduct?.map((item: ProductProps, index: number) => {
              return (
                <div key={index} className="relative">
                  <div className="py-2 border border-gray-300">
                    <p className="line-clamp-2 text-center text-xl font-medium rounded w-full">
                      {item.title}
                    </p>
                  </div>
                  <Image
                    alt="product"
                    height={1200}
                    width={800}
                    src={"/images/tab.jpg"}
                    className="bg-cover bg-center object-contain h-80 w-full"
                    draggable={false}
                  />
                  <>
                    <div className="mb-3 text-2xl font-semibold text-blue-600">
                      Rp.{" "}
                      <NumericFormat
                        value={item.price}
                        displayType="text"
                        thousandSeparator={true}
                      />
                    </div>
                    <div className="">
                      <div className="flex items-center justify-between font-medium border-b-2 py-4">
                        <p className="after:content-[':'] after:px-5">Brand</p>
                        <p className="text-gray-400 text-sm">{item.brand}</p>
                      </div>
                      <div className="flex items-center justify-between font-medium border-b-2 py-4">
                        <p className="after:content-[':'] after:px-5">Type</p>
                        <p className="text-gray-400 text-sm">Tablet Computer</p>
                      </div>
                      <div className="flex items-center justify-between font-medium border-b-2 py-4">
                        <p className="after:content-[':'] after:px-5">
                          Availability
                        </p>
                        <p className="text-gray-400 text-sm">
                          {item.quantity !== 0 ? "In Stocks" : "Sold Out"}
                        </p>
                      </div>
                      <div className="flex items-center justify-between font-medium border-b-2 py-4">
                        <p className="after:content-[':'] after:px-5">Color</p>
                        <div className="flex items-center justify-center gap-1">
                          <div className="rounded-full h-4 w-4 bg-red-300"></div>
                          <div className="rounded-full h-4 w-4 bg-yellow-300"></div>
                          <div className="rounded-full h-4 w-4 bg-blue-300"></div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between font-medium border-b-2 py-4">
                        <p className="after:content-[':'] after:px-5">
                          Ratings
                        </p>
                        <div className="flex items-center gap-2">
                          <ReactStars
                            half={true}
                            edit={false}
                            count={5}
                            value={
                              item.ratings.length ? item.ratings[0].star : 0
                            }
                            size={26}
                          />
                          <p>
                            ({item.ratings.length ? item.ratings[0].star : 0})
                          </p>
                        </div>
                      </div>
                      <div className="pt-10 pb-3">
                        <Link href={"/"}>
                          <p className="bg-blue-600 hover:bg-blue-500 transition rounded-full text-center text-lg font-semibold py-3 px-6 text-white">
                            Buy Now
                          </p>
                        </Link>
                      </div>
                    </div>
                  </>
                  <button className="rounded-full bg-gray-300 p-1.5 absolute -top-4 -right-4">
                    <AiOutlineClose className="text-xl text-gray-600" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
}
