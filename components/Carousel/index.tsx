import React, { useState } from "react";
import { RiArrowLeftLine, RiArrowRightLine } from "react-icons/ri";
import { RxDotFilled } from "react-icons/rx";
import Image from "next/image";
import Link from "next/link";
import { BannerProps } from "@/types";
import { carouselItem } from "@/data/banner";

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? carouselItem.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === carouselItem.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="w-full h-[550px] m-auto relative group">
      <Image
        src={carouselItem[currentIndex].url}
        alt="gambar"
        height={2000}
        width={2000}
        draggable={false}
        className="w-full h-full rounded-xl bg-center bg-cover object-cover duration-500"
        priority={true}
      />
      <div className="absolute top-20 left-14">
        <h3 className="text-red-800 font-medium uppercase">
          {carouselItem[currentIndex].header}
        </h3>
        <h1 className="py-4 text-4xl font-semibold">
          {carouselItem[currentIndex].label}
        </h1>
        <div className="pb-8">
          <p>From Rp 14.599.000 or Rp. 1.217.000/mo.</p>
          <p>For 12 mo. Footnote*</p>
        </div>
        <Link
          href={"/"}
          className="uppercase bg-black text-white text-sm px-8 py-3 rounded-full"
        >
          Buy Now
        </Link>
      </div>
      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <RiArrowLeftLine onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <RiArrowRightLine onClick={nextSlide} size={30} />
      </div>
      {/* Dotted Button */}
      <div className="flex absolute bottom-3 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {carouselItem.map((slide: BannerProps, slideIndex: number) => {
          return (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className="text-2xl cursor-pointer"
            >
              <RxDotFilled
                className={`text-gray-100 text-3xl hover:text-white transition hover:scale-125`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
