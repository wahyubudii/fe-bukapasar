import FormField from "@/components/Global/FormField";
import HeadMeta from "@/components/Global/Head";
import { MetaProps } from "@/types";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { FormEvent, useState } from "react";

const meta: MetaProps = {
  title: "Reset Password | Buka Pasar",
  type: "website",
};

export default function ResetPassword() {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");

  const handleChange = (
    e: FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setEmail(e.currentTarget.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_URL_PRODUCTION}/api/v1/user/forgot-password-token`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      if (response.ok) {
        await response.json();
        alert("Please confirm reset password on your email");
        router.push("/login");
      } else {
        alert("Invalid Email");
      }
    } catch (err) {
      alert(err);
    } finally {
      setEmail("");
    }
  };

  return (
    <div className="relative bg-gray-100 z-0">
      <HeadMeta customMeta={meta} />
      <div className="container mx-auto h-screen flex items-center justify-center">
        <div className="bg-white relative w-1/3 px-10 pt-10 rounded-xl shadow">
          <Link
            href={"/"}
            className="absolute top-0 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-gray-700 shadow-2xl text-white px-10 py-4 text-2xl font-medium -skew-x-12"
          >
            Bukapasar.
          </Link>
          <div className="space-y-8 py-14">
            <div className="space-y-2">
              <h2 className="text-xl font-medium">Forgot your password</h2>
              <p className="text-gray-400 text-base font-thin">
                Enter your email address and we will send the reset link
              </p>
            </div>
            <form onSubmit={handleSubmit}>
              <FormField
                type="email"
                placeholder="Input your email address"
                value={email}
                name="email"
                handleChange={handleChange}
                handleSubmit={handleSubmit}
              />
              <div className="pt-8">
                <button type="submit" className="w-full">
                  <p className="py-3 px-6 bg-gray-700 hover:bg-gray-600 transition rounded-xl text-white font-medium">
                    Submit
                  </p>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 w-full h-[400px] bg-gray-700 -z-10"></div>
    </div>
  );
}
