import BreadCrumbs from "@/components/BreadCrumbs";
import Layout from "@/components/Global/Layout";
import { MetaProps, ProductProps } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Wishlist() {
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

  useEffect(() => {
    setGrid(selectProduct.length);
  }, []);

  return (
    <Layout customMeta={meta}>
      <div className="bg-white">
        <div className="container mx-auto py-4">
          <BreadCrumbs />
          <div
            className={`py-10 grid ${
              grid < 4 ? `grid-cols-${grid}` : `grid-cols-4`
            } gap-5`}
          >
            {selectProduct?.map((item: ProductProps, index: number) => {
              return (
                <Link
                  href={`/product/${item.slug}`}
                  key={index}
                  className="border flex items-center rounded px-5"
                >
                  <Image
                    src={"/images/tab.jpg"}
                    alt={"product"}
                    height={1200}
                    width={800}
                    draggable={false}
                    className="w-28 h-28"
                  />
                  <div className="text-sm text-gray-500 space-y-3">
                    <p className="text-black font-medium line-clamp-2">
                      {item.title}
                    </p>
                    <div className="flex items-center justify-start gap-3 text-[11px]">
                      <button className="px-3 py-0.5 rounded-full bg-red-100 text-red-500">
                        Hapus
                      </button>
                      <button className="px-3 py-0.5 rounded-full bg-blue-100 text-blue-500">
                        Add to the cart
                      </button>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
}
