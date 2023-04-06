import BreadCrumbs from "@/components/BreadCrumbs";
import FormField from "@/components/Global/FormField";
import Layout from "@/components/Global/Layout";
import { FieldItemsProps, LoginProps, MetaProps } from "@/types";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { FormEvent, useState } from "react";

export default function Login() {
  const meta: MetaProps = {
    title: "Login | Buka Pasar",
    type: "website",
  };

  const router = useRouter();
  const [fields, setFields] = useState<LoginProps>({
    email: "",
    password: "",
  });

  const handleChange = (
    e: FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFields({
      ...fields,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/api/v1/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...fields,
        }),
      });

      if (response.ok) {
        await response.json();
        alert("Login successful");
        router.push("/");
      } else {
        alert("Invalid Credentials");
      }
    } catch (err) {
      alert(err);
    } finally {
      setFields({
        email: "",
        password: "",
      });
    }
  };

  const fieldItems: FieldItemsProps[] = [
    {
      label: "Email",
      name: "email",
      type: "email",
      value: fields.email,
      placeholder: "Input your email",
      onChange: handleChange,
    },
    {
      label: "Password",
      name: "password",
      type: "password",
      value: fields.password,
      placeholder: "Input your password",
      onChange: handleChange,
    },
  ];

  return (
    <Layout customMeta={meta}>
      <div className="bg-gray-50">
        <div className="container mx-auto py-4">
          <BreadCrumbs />
          <div className="py-24 w-full flex justify-center">
            <div className="px-8 pt-10 w-2/6 bg-white rounded-xl shadow">
              <h2 className="font-medium text-xl">Login the account</h2>
              <form onSubmit={handleSubmit} className="py-10 space-y-5">
                {fieldItems.map((item: FieldItemsProps, index: number) => {
                  return (
                    <div key={index} className="space-y-1">
                      <label htmlFor={item.name} className="text-sm">
                        {item.label}
                      </label>
                      <FormField
                        type={item.type}
                        placeholder={item.placeholder}
                        value={item.value}
                        name={item.name}
                        handleChange={item.onChange}
                      />
                    </div>
                  );
                })}
                <div className="pt-6">
                  <button type="submit" className="w-full">
                    <p className="py-3 px-6 bg-blue-600 hover:bg-blue-500 transition rounded-xl text-white text-sm font-medium">
                      Submit
                    </p>
                  </button>
                </div>
                <div className="flex items-center justify-between text-xs ">
                  <div className="flex items-center gap-1 text-gray-400">
                    <p>Don't have an account?</p>
                    <Link
                      href={"/register"}
                      className="text-blue-500 hover:underline"
                    >
                      Register
                    </Link>
                  </div>
                  <Link
                    href={"/forgot-password"}
                    className="text-gray-500 hover:underline"
                  >
                    Forgot Password
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
