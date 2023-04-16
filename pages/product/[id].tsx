import Image from "next/image";
import React, { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { MetaProps, ProductProps } from "@/types";
import { NumericFormat } from "react-number-format";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import Layout from "@/components/Global/Layout";
import ReactStars from "react-stars";
import CartIcon from "@/public/images/add-cart.svg";

export default function DetailProduct() {
  const meta: MetaProps = {
    title: `Product | Buka Pasar`,
    type: "website",
  };

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
  }, [id]);

  const handleChange = (e: FormEvent<HTMLButtonElement>) => {
    const { name } = e.currentTarget;
    const newValue = name === "increment" ? quantity + 1 : quantity - 1;
    setQuantity(Math.max(newValue, 0));
  };

  return (
    <Layout customMeta={meta}>
      <div className="bg-gray-100">
        <div className="container mx-auto">
          <div className="py-7">
            <div className="container mx-auto bg-white p-4 shadow">
              <div className="grid grid-cols-6 gap-8">
                <div className="col-span-2">
                  <Image
                    src={"https://picsum.photos/200"}
                    alt="product-photo"
                    className="w-[500px] h-[500px] bg-cover bg-center object-cover"
                    height={1200}
                    width={800}
                    draggable={false}
                  />
                  <div className="relative grid grid-cols-3 items-center gap-x-3 mt-3">
                    <button>
                      <Image
                        src={"https://picsum.photos/200"}
                        alt="product-photo"
                        className="w-full h-28 bg-cover bg-center object-cover hover:border-blue-600 hover:border-4"
                        height={1200}
                        width={800}
                        draggable={false}
                      />
                    </button>
                    <button>
                      <Image
                        src={"https://picsum.photos/200"}
                        alt="product-photo"
                        className="w-full h-28 bg-cover bg-center object-cover hover:border-blue-600 hover:border-4"
                        height={1200}
                        width={800}
                        draggable={false}
                      />
                    </button>
                    <button>
                      <Image
                        src={"https://picsum.photos/200"}
                        alt="product-photo"
                        className="w-full h-28 bg-cover bg-center object-cover hover:border-blue-600 hover:border-4"
                        height={1200}
                        width={800}
                        draggable={false}
                      />
                    </button>
                    <div className="">
                      <button className="absolute rounded-full top-1/2 -translate-y-1/2 p-1">
                        <MdOutlineArrowBackIos className="text-2xl text-white font-bold" />
                      </button>
                      <button className="absolute rounded-full top-1/2 right-0 -translate-y-1/2 p-1">
                        <MdOutlineArrowForwardIos className="text-2xl text-white font-bold" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-span-4 py-2 pr-6 space-y-1 text-sm">
                  <h3 className="text-2xl font-medium">{product?.title}</h3>
                  <div className="divide-x-[2px] flex items-center space-x-4">
                    <div className="flex items-center gap-2">
                      <p className="underline">{product?.ratings ? 5 : 0}</p>
                      <ReactStars
                        half={true}
                        edit={false}
                        count={5}
                        value={product?.ratings ? 5 : 0}
                        size={22}
                      />
                    </div>
                    <p className="px-3 text-sm">
                      {product?.sold}{" "}
                      <span className="text-gray-500">Penjualan</span>
                    </p>
                  </div>
                  <div className="py-2">
                    <div className="flex items-center gap-2 py-3 px-4 bg-gray-100 text-blue-700 font-medium">
                      <div className="flex items-center gap-2 py-4 px-5 bg-gray-100 text-blue-700 font-medium">
                        {true ? (
                          <>
                            <div className="text-sm text-gray-500 line-through">
                              Rp.{" "}
                              <NumericFormat
                                value={product?.price}
                                displayType="text"
                                thousandSeparator={true}
                              />
                            </div>
                            <div className="text-blue-600 text-2xl">
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
                            <p className="text-xs font-medium bg-red-600 text-white px-2 py-1 uppercase">
                              {product?.quantity}%{" "}
                              <span className="pl-1">off</span>
                            </p>
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
                    </div>
                  </div>
                  <div className="p-2 text-gray-500 space-y-5">
                    <div className="grid grid-cols-8  items-center">
                      <p className="col-span-1">Description</p>
                      <div className="col-span-7 flex gap-3">
                        <p className="px-5 py-2 bg-blue-50 text-blue-600">
                          {product?.description}
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-8  items-center">
                      <p className="col-span-1">Brand</p>
                      <div className="col-span-7 flex gap-3">
                        <p className="px-5 py-2 bg-blue-50 text-blue-600">
                          {product?.brand}
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-8  items-center">
                      <p className="col-span-1">Kategori</p>
                      <div className="col-span-7 flex gap-3">
                        <p className="px-5 py-2 bg-blue-50 text-blue-600">
                          {product?.category}
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-8  items-center">
                      <p className="col-span-1">Stok</p>
                      <div className="col-span-7 flex gap-3">
                        <p className="px-5 py-2 bg-blue-50 text-blue-600">
                          {product?.quantity}
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-8  items-center">
                      <p className="col-span-1">Color</p>
                      <div className="col-span-7 flex gap-3">
                        <button className="px-5 py-2 border hover:border-blue-500 hover:text-blue-500">
                          {product?.color}
                        </button>
                        <button className="px-5 py-2 border hover:border-blue-500 hover:text-blue-500">
                          Red
                        </button>
                        <button className="px-5 py-2 border hover:border-blue-500 hover:text-blue-500">
                          Blue
                        </button>
                      </div>
                    </div>
                    <div className="grid grid-cols-8  items-center">
                      <p className="col-span-1">Kuantitas</p>
                      <div className="col-span-1 flex">
                        <button
                          name="decrement"
                          onClick={handleChange}
                          className="px-5 py-2 border hover:border-blue-500 hover:text-blue-500"
                        >
                          -
                        </button>
                        <input
                          type="number"
                          name="quantity"
                          className="border outline-none text-center w-14"
                          value={quantity}
                        />
                        <button
                          name="increment"
                          onClick={handleChange}
                          className="px-5 py-2 border hover:border-blue-500 hover:text-blue-500"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="pt-5 space-x-5 flex items-center">
                      <button className="border border-blue-500 hover:bg-blue-100 transition px-5 py-3 text-blue-500 flex items-center gap-3">
                        <Image
                          src={CartIcon.src}
                          alt="cart-icon"
                          height={1200}
                          width={800}
                          draggable={false}
                          className="w-5 h-5"
                        />
                        <p>Masukkan Keranjang</p>
                      </button>
                      <button className="bg-blue-500 hover:bg-blue-600 transition px-5 py-3 text-white">
                        Beli Sekarang
                      </button>
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
