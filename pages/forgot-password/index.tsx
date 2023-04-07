import BreadCrumbs from "@/components/BreadCrumbs";
import FormField from "@/components/Global/FormField";
import Layout from "@/components/Global/Layout";
import { MetaProps } from "@/types";
import { useRouter } from "next/router";
import React, { FormEvent, useState } from "react";

export default function ResetPassword() {
  const meta: MetaProps = {
    title: "Reset Password | Buka Pasar",
    type: "website",
  };

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
        `${process.env.URL_PRODUCTION}/api/v1/user/forgot-password-token`,
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
    <Layout customMeta={meta}>
      <div className="bg-gray-50">
        <div className="container mx-auto py-4">
          <BreadCrumbs />
        </div>
        <div className="py-24 w-full flex justify-center items-cente">
          <div className="px-8 py-10 w-2/6 bg-white shadow space-y-5 rounded-xl">
            <div className="space-y-2">
              <h2 className="font-medium text-xl">Forgot your password</h2>
              <p className="text-xs text-gray-500">
                We will send you an email to reset your password
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
              <div className="pt-5">
                <button type="submit" className="w-full">
                  <p className="py-3 px-6 bg-blue-600 hover:bg-blue-500 transition rounded-xl text-white text-sm font-medium">
                    Submit
                  </p>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}
