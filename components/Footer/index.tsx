import Link from "next/link";
import React from "react";
import { RouteProps } from "@/types";
import { contactItems } from "@/data/contact";
import { accountItem, informationItem, quickLink } from "@/data/footer";

export default function Footer() {
  return (
    <div className="border-t border-gray-200">
      <footer className="py-10 bg-white text-black">
        <div className="container mx-auto">
          <div className="grid grid-cols-4 gap-10 text-sm">
            <div>
              <h2 className="text-2xl font-semibold pb-6">Contact Us</h2>
              <div className="space-y-5">
                <p>{contactItems[0].title}</p>
                <p>{contactItems[1].title}</p>
                <p>{contactItems[2].title}</p>
                <p>{contactItems[3].title}</p>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-semibold pb-6">Information</h2>
              <div className="flex flex-col space-y-5">
                {informationItem.map((item: RouteProps, index: number) => {
                  return (
                    <Link href={item.route} key={index} className="w-fit">
                      {item.name}
                    </Link>
                  );
                })}
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-semibold pb-6">Account</h2>
              <div className="flex flex-col space-y-5">
                {accountItem.map((item: RouteProps, index: number) => {
                  return (
                    <Link href={item.route} key={index} className="w-fit">
                      {item.name}
                    </Link>
                  );
                })}
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-semibold pb-6">Quick Link</h2>
              <div className="flex flex-col space-y-5">
                {quickLink.map((item: RouteProps, index: number) => {
                  return (
                    <Link href={item.route} key={index} className="w-fit">
                      {item.name}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-3 bg-black text-white">
        <div className="container mx-auto">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Powered by{" "}
            <Link href={"https://www.linkedin.com/in/wahyubudiutomo/"}>
              Wahyu Budi Utomo
            </Link>
          </p>
        </div>
      </footer>
    </div>
  );
}
