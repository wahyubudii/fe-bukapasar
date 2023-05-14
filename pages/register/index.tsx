import HeadMeta from "@/components/Global/Head";
import { registerForm } from "@/data/form";
import { MetaProps, RegisterFieldProps, RegisterProps } from "@/types";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { FormEvent, useState } from "react";
import { useForm } from "react-hook-form";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";

const meta: MetaProps = {
  title: "Register | Buka Pasar",
  type: "website",
};

export default function Login() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterProps>({
    mode: "all",
  });
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const onSubmit = async (data: RegisterProps) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_URL_PRODUCTION}/api/v1/user/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...data,
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
    }
  };

  const handleChecked = (e: FormEvent<HTMLInputElement>) => {
    setIsChecked(e.currentTarget.checked);
  };

  return (
    <div className="relative bg-gray-200 z-0">
      <HeadMeta customMeta={meta} />
      <div className="container mx-auto py-32 flex items-center justify-center">
        <div className="bg-white relative w-2/6 px-8 pt-10 rounded-xl shadow">
          <Link
            href={"/"}
            className="absolute top-0 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-gray-700 shadow-2xl text-white px-10 py-4 text-2xl font-bold -skew-x-12"
          >
            Bukapasar.
          </Link>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="py-10 space-y-5 border-b"
          >
            {registerForm.map((item: RegisterFieldProps, index: number) => {
              return (
                <div key={index} className="space-y-1">
                  <label htmlFor={item.name} className="text-sm font-semibold">
                    {item.label}
                  </label>
                  <input
                    {...register(item.name, item.validation)}
                    id={item.name}
                    type={item.type}
                    placeholder={item.placeholder}
                    name={item.name}
                    className={`bg-gray-50 border border-gray-200 text-gray-900 text-sm focus:ring-[#4649ff] focus:border-[#4649ff] ${
                      errors[item.name] && "border border-red-500"
                    } border-gray-300 outline-none block w-full p-3`}
                  />
                  {errors[item.name] && (
                    <span className="text-red-600 text-xs">
                      {errors[item.name]?.message}
                    </span>
                  )}
                </div>
              );
            })}
            <div className="flex items-center gap-2 text-xs text-gray-500 font-semibold">
              <input
                {...register("agreement", {
                  required: "Please check your agreement",
                })}
                id="checkbox"
                type="checkbox"
                className={`w-4 h-4`}
                onChange={handleChecked}
                checked={isChecked}
              />
              <label htmlFor="checkbox">
                I agree with the{" "}
                <Link
                  href={"/"}
                  className="text-blue-600 dark:text-blue-500 underline"
                >
                  terms and conditions
                </Link>
              </label>
            </div>
            {errors.agreement && (
              <span className="text-red-600 text-xs">
                {errors.agreement?.message}
              </span>
            )}
            <div className="pt-4">
              <button
                type="submit"
                className={`w-full ${
                  Object.keys(errors).length && "cursor-not-allowed"
                }`}
                disabled={Object.keys(errors).length > 0}
              >
                <p className="py-3 px-6 bg-gray-700 hover:bg-gray-600 transition rounded-xl text-white font-bold">
                  Register
                </p>
              </button>
            </div>
            <div className="flex items-center gap-1 text-xs text-gray-500 font-semibold">
              <p>Have an account?</p>
              <Link href={"/login"} className="text-blue-500 underline">
                Login now!
              </Link>
            </div>
          </form>
          <div className="pt-5 pb-10 text-sm font-semibold space-y-5">
            <Link
              href={"/"}
              className="flex items-center justify-center gap-3 py-4 bg-white rounded-xl border border-gray-300 hover:border-gray-800 transition duration-200"
            >
              <FcGoogle className="text-xl" />
              <p>Sign up with Google</p>
            </Link>
            <Link
              href={""}
              className="flex items-center justify-center gap-3 py-4 bg-blue-600 text-white rounded-xl border hover:border-blue-800 transition duration-200"
            >
              <BsFacebook className="text-xl" />
              <p>Sign up with Facebook</p>
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 w-full h-[400px] bg-gray-700 -z-10"></div>
    </div>
  );
}
