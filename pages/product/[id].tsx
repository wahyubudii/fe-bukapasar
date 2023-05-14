import Image from "next/image";
import React, { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { MetaProps, ProductProps } from "@/types";
import { NumericFormat } from "react-number-format";
import Layout from "@/components/Global/Layout";
import ReactStars from "react-stars";
import { BiHeart } from "react-icons/bi";

const meta: MetaProps = {
  title: `Product | Buka Pasar`,
  type: "website",
};

export default function DetailProduct() {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState<ProductProps>();
  const [loading, setLoading] = useState<boolean>(true);
  const [quantity, setQuantity] = useState<number>(1);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);

      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_URL_PRODUCTION}/api/v1/product/${id}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.ok) {
          const result = await response.json();
          setProduct(result);
        }
      } catch (err) {
        alert(err);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, []);

  const handleChange = (e: FormEvent<HTMLButtonElement>) => {
    const { name } = e.currentTarget;
    const newValue = name === "increment" ? quantity + 1 : quantity - 1;
    setQuantity(Math.max(newValue, 0));
  };

  return (
    <Layout customMeta={meta}>
      <div className="container mx-auto">
        <div className="py-14">
          <div className="flex justify-between gap-16">
            <div className="w-1/2 grid grid-cols-4 gap-6 h-[400px]">
              <div className="col-span-1 grid grid-rows-3 gap-6">
                <Image
                  src={"https://picsum.photos/200"}
                  alt="product-photo"
                  className="w-[250px] h-full bg-cover bg-center object-cover rounded-2xl"
                  height={1200}
                  width={800}
                  draggable={false}
                />
                <Image
                  src={"https://picsum.photos/200"}
                  alt="product-photo"
                  className="w-[250px] h-full bg-cover bg-center object-cover rounded-2xl"
                  height={1200}
                  width={800}
                  draggable={false}
                />
                <Image
                  src={"https://picsum.photos/200"}
                  alt="product-photo"
                  className="w-[250px] h-full bg-cover bg-center object-cover rounded-2xl"
                  height={1200}
                  width={800}
                  draggable={false}
                />
              </div>
              <div className="col-span-3 grid grid-rows-1">
                <Image
                  src={"https://picsum.photos/200"}
                  alt="product-photo"
                  className="w-full h-full bg-cover bg-center object-cover rounded-2xl"
                  height={2000}
                  width={1200}
                  draggable={false}
                />
              </div>
            </div>
            <div className="w-1/2 space-y-1">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">{product?.title}</h3>
              </div>
              <div className="divide-x-[1.5px] divide-gray-400 flex items-center space-x-4">
                <div className="flex items-center gap-2">
                  <ReactStars
                    half={true}
                    edit={false}
                    count={5}
                    value={product?.ratings ? 5 : 0}
                    size={18}
                  />
                </div>
                <p className="px-4 text-sm">
                  {product?.sold} <span className="pl-1.5">Penjualan</span>
                </p>
              </div>
              <div className="py-4">
                {true ? (
                  <>
                    <p className="text-sm font-semibold bg-blue-600 text-white px-2 py-1 uppercase">
                      {product?.quantity}% <span className="pl-1">off</span>
                    </p>
                    <div className="pt-3 flex items-center gap-3">
                      <div className="text-blue-600 text-2xl font-bold">
                        Rp.{" "}
                        <NumericFormat
                          value={
                            product?.price -
                            product?.price * (product?.quantity / 100)
                          }
                          displayType="text"
                          thousandSeparator={true}
                        />
                      </div>
                      <div className="text-sm text-gray-500 font-semibold line-through">
                        Rp.{" "}
                        <NumericFormat
                          value={product?.price}
                          displayType="text"
                          thousandSeparator={true}
                        />
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="text-blue-600 font-medium text-2xl">
                    Rp.{" "}
                    <NumericFormat
                      value={
                        product?.price -
                        product?.price * (product?.quantity / 100)
                      }
                      displayType="text"
                      thousandSeparator={true}
                    />
                  </div>
                )}
              </div>
              <div>
                <p className="text-sm text-gray-600 font-medium">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                  voluptas tenetur libero nobis tempore. Labore, cupiditate
                  numquam nulla reprehenderit minima error maxime sapiente?
                  Harum magni corporis dolore explicabo corrupti odio asperiores
                  at maiores, recusandae cum tempora eveniet quibusdam eos
                  distinctio!
                </p>
                <div className="py-8 space-x-5 flex items-center gap-8 text-base">
                  <button className="rounded-lg -skew-x-12 shadow-lg bg-blue-600 hover:bg-blue-700 transition px-20 py-3 text-white font-medium">
                    Add to Cart
                  </button>
                  <button className="">
                    <BiHeart size={36} color="red" />
                  </button>
                </div>
              </div>
              <div className="border-t-2 border-gray-200 py-8">
                <h3 className="text-gray-700 font-bold text-lg">
                  Product Information
                </h3>
                <div className="py-3">
                  <div className="py-2 space-y-1">
                    <p className="text-gray-600">Brand</p>
                    <h4 className="font-semibold">{product?.brand}</h4>
                  </div>
                  <div className="py-2 space-y-1">
                    <p className="text-gray-600">Kategory</p>
                    <h4 className="font-semibold">{product?.category}</h4>
                  </div>
                  <div className="py-2 space-y-1">
                    <p className="text-gray-600">Stock</p>
                    <h4 className="font-semibold">{product?.quantity} Items</h4>
                  </div>
                  <div className="py-2 space-y-1">
                    <p className="text-gray-600">Estimated Arrival</p>
                    <h4 className="font-semibold">
                      November 2023 - January 2024
                    </h4>
                  </div>
                  <div className="py-2 space-y-1">
                    <p className="text-gray-600">Color</p>
                    <div className="w-fit flex justify-around gap-3 text-white text-sm">
                      <div className={`rounded-full bg-red-500 px-4 py-1`}>
                        Merah
                      </div>
                      <div className={`rounded-full bg-blue-500 px-4 py-1`}>
                        Biru
                      </div>
                      <div className={`rounded-full bg-black px-4 py-1`}>
                        Hitam
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
