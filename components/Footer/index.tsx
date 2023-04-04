import Link from "next/link";
import React, { FormEvent, useState } from "react";
import { IoPaperPlaneOutline } from "react-icons/io5";
import {
  AiFillLinkedin,
  AiFillInstagram,
  AiFillGithub,
  AiFillYoutube,
} from "react-icons/ai";
import { RouteProps, MenuItemProps } from "@/types";
import FormFieldButton from "../Global/FormFieldButton";
import { contactItems } from "@/data/contact";

const socialMedia: MenuItemProps[] = [
  {
    name: "linkedin",
    route: "https://www.linkedin.com/in/wahyubudiutomo/",
    icon: AiFillLinkedin,
  },
  {
    name: "instagram",
    route: "/",
    icon: AiFillInstagram,
  },
  {
    name: "github",
    route: "https://github.com/wahyubudii",
    icon: AiFillGithub,
  },
  {
    name: "youtube",
    route: "/",
    icon: AiFillYoutube,
  },
];

const informationItem: RouteProps[] = [
  {
    name: "Privacy Policy",
    route: "/",
  },
  {
    name: "Refund Policy",
    route: "/",
  },
  {
    name: "Shipping Policy",
    route: "/",
  },
  {
    name: "Terms & Conditions",
    route: "/",
  },
  {
    name: "Blogs",
    route: "/",
  },
];

const accountItem: RouteProps[] = [
  {
    name: "About us",
    route: "/",
  },
  {
    name: "Faq",
    route: "/",
  },
  {
    name: "Contact",
    route: "/",
  },
];

const quickLink: RouteProps[] = [
  {
    name: "Laptops",
    route: "/",
  },
  {
    name: "Headphones",
    route: "/",
  },
  {
    name: "Tablets",
    route: "/",
  },
  {
    name: "Watchs",
    route: "/",
  },
];

export default function Footer() {
  const [email, setEmail] = useState<string>("");
  const handleChange = (
    e: FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setEmail(e.currentTarget.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="divide-y divide-gray-600">
      <footer className="py-3 bg-black text-white">
        <div className="container mx-auto">
          <div className="h-20 grid grid-cols-2 items-center">
            <div className="flex items-center text-xl space-x-4">
              <IoPaperPlaneOutline className="w-6 h-6" />
              <p className="font-semibold">Sign Up For Newsletter</p>
            </div>
            <FormFieldButton
              type="text"
              placeholder="Your Email Address"
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              value={email}
              nameButton={"Subscribe"}
            />
          </div>
        </div>
      </footer>
      <footer className="py-5 bg-black text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-4">
            <div>
              <h2 className="text-2xl font-semibold pb-3">Contact Us</h2>
              <div className="space-y-3">
                <div>
                  <p>Place: {contactItems[0].title}</p>
                  <p>Pincode: {contactItems[1].title}</p>
                </div>
                <p>{contactItems[2].title}</p>
                <p>{contactItems[3].title}</p>
                <div className="flex items-center space-x-4">
                  {socialMedia.map((item: MenuItemProps, index: number) => {
                    return (
                      <Link
                        key={index}
                        href={item.route}
                        className="text-xl text-white p-1 rounded-md bg-blue-700"
                      >
                        <item.icon />
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-semibold pb-3">Information</h2>
              <div className="flex flex-col space-y-3">
                {informationItem.map((item: RouteProps, index: number) => {
                  return (
                    <Link href={item.route} key={index}>
                      {item.name}
                    </Link>
                  );
                })}
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-semibold pb-3">Account</h2>
              <div className="flex flex-col space-y-3">
                {accountItem.map((item: RouteProps, index: number) => {
                  return (
                    <Link href={item.route} key={index}>
                      {item.name}
                    </Link>
                  );
                })}
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-semibold pb-3">Quick Link</h2>
              <div className="flex flex-col space-y-3">
                {quickLink.map((item: RouteProps, index: number) => {
                  return (
                    <Link href={item.route} key={index}>
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
          <div className="grid grid-cols-2 justify-between">
            <p>
              &copy; {new Date().getFullYear()} Powered by{" "}
              <Link href={"https://www.linkedin.com/in/wahyubudiutomo/"}>
                Wahyu Budi Utomo
              </Link>
            </p>
            <div>
              <p className="text-right">
                Hotline: <Link href="telp:+6285856196359">+6285856196359</Link>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
