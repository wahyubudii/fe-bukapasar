import Link from "next/link";
import React, { FormEvent, useState } from "react";
import { IoPaperPlaneOutline } from "react-icons/io5";
import {
  AiFillLinkedin,
  AiFillInstagram,
  AiFillGithub,
  AiFillYoutube,
} from "react-icons/ai";
import FormField from "../FormField";
import { ContactItemProps, FooterItemProps, SocialMediaProps } from "@/types";

const contactItem: ContactItemProps = [
  "Malang",
  "62264",
  "+6285856196359",
  "wahyu.budi.w.b33@gmail.com",
];

const socialMedia: SocialMediaProps[] = [
  {
    title: "linkedin",
    route: "https://www.linkedin.com/in/wahyubudiutomo/",
    icon: AiFillLinkedin,
  },
  {
    title: "instagram",
    route: "/",
    icon: AiFillInstagram,
  },
  {
    title: "github",
    route: "https://github.com/wahyubudii",
    icon: AiFillGithub,
  },
  {
    title: "youtube",
    route: "/",
    icon: AiFillYoutube,
  },
];

const informationItem: FooterItemProps[] = [
  {
    title: "Privacy Policy",
    route: "/",
  },
  {
    title: "Refund Policy",
    route: "/",
  },
  {
    title: "Shipping Policy",
    route: "/",
  },
  {
    title: "Terms & Conditions",
    route: "/",
  },
  {
    title: "Blogs",
    route: "/",
  },
];

const accountItem: FooterItemProps[] = [
  {
    title: "About us",
    route: "/",
  },
  {
    title: "Faq",
    route: "/",
  },
  {
    title: "Contact",
    route: "/",
  },
];

const quickLink: FooterItemProps[] = [
  {
    title: "Laptops",
    route: "/",
  },
  {
    title: "Headphones",
    route: "/",
  },
  {
    title: "Tablets",
    route: "/",
  },
  {
    title: "Watchs",
    route: "/",
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");
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
            <div className="flex items-center text-2xl space-x-4">
              <IoPaperPlaneOutline />
              <p className="font-semibold">Sign Up For Newsletter</p>
            </div>
            <FormField
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
                  <p>Place: {contactItem[0]}</p>
                  <p>Pincode: {contactItem[1]}</p>
                </div>
                <p>{contactItem[2]}</p>
                <p>{contactItem[3]}</p>
                <div className="flex items-center space-x-4">
                  {socialMedia.map((item: any, index: number) => {
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
                {informationItem.map((item: any, index: number) => {
                  return (
                    <Link href={item.route} key={index}>
                      {item.title}
                    </Link>
                  );
                })}
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-semibold pb-3">Account</h2>
              <div className="flex flex-col space-y-3">
                {accountItem.map((item: any, index: number) => {
                  return (
                    <Link href={item.route} key={index}>
                      {item.title}
                    </Link>
                  );
                })}
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-semibold pb-3">Quick Link</h2>
              <div className="flex flex-col space-y-3">
                {quickLink.map((item: any, index: number) => {
                  return (
                    <Link href={item.route} key={index}>
                      {item.title}
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
