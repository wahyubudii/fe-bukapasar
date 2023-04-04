import Image from "next/image";
import Link from "next/link";
import React from "react";
import { NumericFormat } from "react-number-format";
import ReactStars from "react-stars";
import { shuffle } from "lodash";

export default function RandomProduct({ products }: any) {
  const product = shuffle(products).pop();

  return (
    <Link
      href={"/"}
      className="flex items-center gap-5 group first:border-b first:pb-3"
    >
      <Image
        src={"https://picsum.photos/200"}
        alt="product"
        height={1200}
        width={1200}
        className="w-20 h-20 bg-cover bg-center object-cover"
        draggable={false}
      />
      <div className="text-sm">
        <p className="font-medium line-clamp-2 text-sm group-hover:underline">
          {product.title}
        </p>
        <ReactStars
          half={true}
          edit={false}
          count={5}
          value={product.ratings.length ? product.ratings[0].star : 0}
          className="my-1"
        />
        <NumericFormat
          value={product.price}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"Rp. "}
          className="text-xs font-medium text-blue-600"
        />
      </div>
    </Link>
  );
}
