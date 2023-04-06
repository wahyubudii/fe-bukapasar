import { CardProps, MenuItemProps } from "@/types";
import Image from "next/image";
import Link from "next/link";
import ReactStars from "react-stars";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { NumericFormat } from "react-number-format";
import ViewIcon from "@/public/images/view.svg";
import CompareIcon from "@/public/images/prodcompare.svg";
import CartIcon from "@/public/images/add-cart.svg";
import HeartIcon from "@/public/images/wish.svg";
import HeartFillIcon from "@/public/images/wish-black.svg";

export default function Collection() {
  const collectionItem: CardProps[] = [
    {
      route: "/",
      imageLink: "/images/camera.jpg",
      brand: "Canon",
      title: "Olympus Pen E-PL9 Kit With 14-42, EZ Lenz, Camera",
      rating: 4.5,
      price: 500000,
      isLiked: false,
    },
    {
      route: "/",
      imageLink: "/images/tab.jpg",
      brand: "Samsung",
      title: "Olympus Pen E-PL9 Kit With 14-42, EZ Lenz, Camera",
      rating: 4.5,
      price: 500000,
      discount: 35,
      isLiked: true,
    },
    {
      route: "/",
      imageLink: "/images/watch.jpg",
      brand: "Apple",
      title: "Olympus Pen E-PL9 Kit With 14-42, EZ Lenz, Camera",
      rating: 4.5,
      price: 500000,
      isLiked: false,
    },
    {
      route: "/",
      imageLink: "/images/speaker.jpg",
      brand: "JBL",
      title: "Olympus Pen E-PL9 Kit With 14-42, EZ Lenz, Camera",
      rating: 4.5,
      price: 500000,
      isLiked: true,
    },
    {
      route: "/",
      imageLink: "/images/acc.jpg",
      brand: "Logitech",
      title: "Olympus Pen E-PL9 Kit With 14-42, EZ Lenz, Camera",
      rating: 4.5,
      price: 500000,
      isLiked: false,
    },
    {
      route: "/",
      imageLink: "/images/headphone.jpg",
      brand: "Apple",
      title: "Olympus Pen E-PL9 Kit With 14-42, EZ Lenz, Camera",
      rating: 4.5,
      price: 500000,
      isLiked: false,
    },
  ];

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

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-semibold">Featured Collection</h3>
        <div className="space-x-4">
          <button className="rounded-full shadow p-1">
            <RiArrowLeftSLine className="w-5 h-5" />
          </button>
          <button className="rounded-full shadow p-1">
            <RiArrowRightSLine className="w-5 h-5" />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-6 gap-5">
        {collectionItem.map((item: CardProps, index: number) => {
          return (
            <div
              key={index}
              className="relative overflow-hidden rounded-xl shadow group bg-white"
            >
              <Image
                src={item.imageLink}
                alt={item.title}
                height={2000}
                width={2000}
                draggable={false}
                className="p-12 w-full h-60 bg-cover bg-center object-contain rounded-t-lg"
              />
              <div className="pb-6 px-6">
                <p className="text-[11px] text-gray-600 font-medium bg-gray-200 w-fit px-3 py-1 rounded-full">
                  {item.brand}
                </p>
                <Link
                  href={item.route}
                  className="pt-4 text-sm font-medium group-hover:underline line-clamp-2"
                >
                  {item.title}
                </Link>
                <div className="py-3 flex items-center gap-3">
                  <ReactStars
                    half={true}
                    edit={false}
                    count={5}
                    value={4.7}
                    size={22}
                  />
                  <p className="font-medium text-sm">(4.7)</p>
                </div>
                {item.discount ? (
                  <>
                    <div className="flex items-start gap-1.5 font-medium text-sm text-blue-700">
                      <div className="text-red-500">
                        Rp.{" "}
                        <NumericFormat
                          value={
                            item.price - item.price * (item.discount / 100)
                          }
                          displayType="text"
                          thousandSeparator={true}
                        />
                      </div>
                      <div className="text-xs text-gray-500 line-through">
                        Rp.{" "}
                        <NumericFormat
                          value={item.price}
                          displayType="text"
                          thousandSeparator={true}
                        />
                      </div>
                    </div>
                    <div className="absolute text-xs font-medium rounded-full bg-red-600 text-white top-3 left-5 px-3 py-1">
                      -{item.discount}%
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
                  item.isLiked ? "text-red-600" : "text-gray-600"
                } font-medium top-4 right-4 hover:bg-red-200 p-1 transition rounded-full`}
              >
                <Image
                  alt="view-icon"
                  height={1200}
                  width={1200}
                  src={item.isLiked ? HeartFillIcon.src : HeartIcon.src}
                  className="w-4 h-4"
                />
              </button>
              <div className="absolute top-12 -right-16 group-hover:right-4 group-hover:duration-300 flex flex-col space-y-2">
                {productAction.map((item: MenuItemProps, index: number) => {
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
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
