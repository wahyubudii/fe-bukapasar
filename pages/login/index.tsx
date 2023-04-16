import FormField from "@/components/Global/FormField";
import { setLogin } from "@/redux/state/authState";
import { FieldItemsProps, LoginProps, MetaProps } from "@/types";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { FormEvent, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import HeadMeta from "@/components/Global/Head";

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
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.auth.user);

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
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_URL_PRODUCTION}/api/v1/user/login`,
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
        const result = await response.json();
        dispatch(setLogin({ user: result.data, token: result.data.token }));
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
      placeholder: "johndoe@gmail.com",
      onChange: handleChange,
    },
    {
      label: "Password",
      name: "password",
      type: "password",
      value: fields.password,
      placeholder: "****************",
      onChange: handleChange,
    },
  ];

  return (
    <div className="relative bg-gray-100 z-0">
      <HeadMeta customMeta={meta} />
      <div className="container mx-auto h-screen flex items-center justify-center">
        <div className="bg-white relative w-2/6 px-8 pt-10 rounded-xl shadow">
          <Link
            href={"/"}
            className="absolute top-0 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-gray-700 shadow-2xl text-white px-10 py-4 text-2xl font-medium -skew-x-12"
          >
            Bukapasar.
          </Link>
          <form onSubmit={handleSubmit} className="py-6 space-y-5 border-b">
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
            <div className="pt-4 flex flex-col gap-4">
              <Link
                href={"/forgot-password"}
                className="text-xs underline self-end"
              >
                Forgot Password
              </Link>
              <button type="submit" className="w-full">
                <p className="py-3 px-6 bg-gray-700 hover:bg-gray-600 transition rounded-xl text-white font-medium">
                  Log in
                </p>
              </button>
              <div className="flex items-center gap-1 text-xs">
                <p>Don&apos;t have an account? </p>
                <Link href={"/register"} className="text-blue-500 underline">
                  Register now!
                </Link>
              </div>
            </div>
          </form>
          <div className="pt-5 pb-10 text-sm font-medium space-y-5">
            <Link
              href={"/"}
              className="flex items-center justify-center gap-3 py-4 bg-white rounded-xl border hover:border-gray-800 transition duration-200"
            >
              <FcGoogle className="text-xl" />
              <p>Sign in with Google</p>
            </Link>
            <Link
              href={""}
              className="flex items-center justify-center gap-3 py-4 bg-blue-600 text-white rounded-xl border hover:border-blue-800 transition duration-200"
            >
              <BsFacebook className="text-xl" />
              <p>Sign in with Facebook</p>
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 w-full h-[400px] bg-gray-700 -z-10"></div>
    </div>
  );
}
