import NewLayout from "@/components/Global/NewLayout";
import { signIn } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import React, { useState } from "react";
import { HiAtSymbol, HiFingerPrint } from "react-icons/hi";

export default function Login() {
  const [show, setShow] = useState<boolean>(false);

  const handleGoogleSignIn = async () => {
    signIn("google", {
      callbackUrl: "http://localhost:3000/coba/home",
    });
  };

  return (
    <NewLayout>
      <Head>
        <title>Login</title>
      </Head>
      <section className="w-3/4 mx-auto flex flex-col gap-10">
        <div className="title">
          <h1 className="text-gray-800 text-4xl font-bold py-4">Explore</h1>
          <p className="w-3/4 mx-auto text-gray-400 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            quis voluptas facilis praesentium ex nulla temporibus cupiditate
            omnis eaque adipisci!
          </p>
        </div>
        <form className="flex flex-col gap-5">
          <div className="relative flex border rounded-xl">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full py-4 px-6 border rounded-xl bg-slate-50 focus:outline-none border-none"
            />
            <span className="flex items-center px-4 text-[#CBD5E1] focus:text-[#6366f1]">
              <HiAtSymbol size={25} color="#CBD5E1" />
            </span>
          </div>
          <div className="relative flex border rounded-xl">
            <input
              type={`${show ? "text" : "password"}`}
              name="password"
              placeholder="Password"
              className="w-full py-4 px-6 border rounded-xl bg-slate-50 focus:outline-none border-none"
            />
            <span
              className="flex items-center px-4 text-[#CBD5E1] focus:text-[#6366f1] cursor-pointer"
              onClick={() => setShow(!show)}
            >
              <HiFingerPrint size={25} />
            </span>
          </div>

          {/* login buttons */}
          <div className="input-buttons">
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-md py-3 text-gray-50 text-lg hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 hover:border hover:border-blue-500 hover:text-gray-700"
            >
              Login
            </button>
          </div>
          <div className="input-buttons">
            <button
              type="button"
              onClick={handleGoogleSignIn}
              className="w-full border py-3 flex justify-center gap-2 hover:bg-gray-200"
            >
              Sign in With Google
            </button>
          </div>
          <div className="input-buttons">
            <button
              type="button"
              className="w-full border py-3 flex justify-center gap-2 hover:bg-gray-200"
            >
              Sign in With Github
            </button>
          </div>
        </form>

        {/* bottom */}
        <p className="text-center text-gray-400">
          don't have an account yet?{" "}
          <Link href={"/register"} className="text-blue-700">
            Sign Up
          </Link>
        </p>
      </section>
    </NewLayout>
  );
}
