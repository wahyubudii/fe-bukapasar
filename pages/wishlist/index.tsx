import BreadCrumbs from "@/components/BreadCrumbs";
import Layout from "@/components/Global/Layout";
import { productWishlist } from "@/data/wishlist";
import { MetaProps, ProductProps } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const meta: MetaProps = {
  title: "Compare Product | Buka Pasar",
  type: "website",
};

export default function Wishlist() {
  const [grid, setGrid] = useState<number>(productWishlist.length);

  useEffect(() => {
    setGrid(productWishlist.length);
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
            {productWishlist?.map((item: ProductProps, index: number) => {
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
