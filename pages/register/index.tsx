import BreadCrumbs from "@/components/BreadCrumbs";
import FormField from "@/components/Global/FormField";
import Layout from "@/components/Global/Layout";
import { FieldItemsProps, MetaProps, RegisterProps } from "@/types";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { FormEvent, useState } from "react";

export default function Login() {
  const meta: MetaProps = {
    title: "Register | Buka Pasar",
    type: "website",
  };

  const router = useRouter();
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [fields, setFields] = useState<RegisterProps>({
    firstname: "",
    lastname: "",
    mobile: "",
    email: "",
    password: "",
  });

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    setFields({
      ...fields,
      [e.currentTarget.name]: e.currentTarget.value,
    });
    setIsChecked(e.currentTarget.checked);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://bukapasar.vercel.app/api/v1/user/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...fields,
          }),
        }
      );

      if (response.ok) {
        await response.json();
        alert("Registration successful");
        router.push("/login");
      } else {
        alert("Invalid Input Options");
      }
    } catch (err) {
      alert(err);
    } finally {
      setFields({
        firstname: "",
        lastname: "",
        mobile: "",
        email: "",
        password: "",
      });
    }
  };

  const fieldItems: FieldItemsProps[] = [
    {
      label: "Firstname",
      name: "firstname",
      type: "text",
      value: fields.firstname,
      placeholder: "Input your firstname",
      onChange: handleChange,
    },
    {
      label: "Lastname",
      name: "lastname",
      type: "text",
      value: fields.lastname,
      placeholder: "Input your lastname",
      onChange: handleChange,
    },
    {
      label: "Phone Number",
      name: "mobile",
      type: "text",
      value: fields.mobile,
      placeholder: "Input your phone number",
      onChange: handleChange,
    },
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
              <h2 className="font-medium text-xl">Register the account</h2>
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
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <input
                    id="checkbox"
                    type="checkbox"
                    value="adasdsa"
                    className="w-4 h-4"
                    onChange={handleChange}
                    checked={isChecked}
                    required
                  />
                  <label htmlFor="checkbox">
                    I agree with the{" "}
                    <Link
                      href={"/"}
                      className="text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      terms and conditions
                    </Link>
                  </label>
                </div>
                <div className="pt-3">
                  <button type="submit" className="w-full">
                    <p className="py-3 px-6 bg-blue-600 hover:bg-blue-500 transition rounded-xl text-white text-sm font-medium">
                      Submit
                    </p>
                  </button>
                </div>
                <div className="flex items-center gap-1 text-xs text-gray-500 ">
                  <p>Have an account?</p>
                  <Link
                    href={"/login"}
                    className="text-blue-500 hover:underline"
                  >
                    Login
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
