import FormField from "@/components/Global/FormField";
import { setLogin } from "@/redux/state/authState";
import { LoginFieldProps, LoginProps, MetaProps } from "@/types";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import HeadMeta from "@/components/Global/Head";
import { useForm } from "react-hook-form";

// NEXT AUTH
import { signIn } from "next-auth/react";
import { loginForm } from "@/data/form";

const meta: MetaProps = {
  title: "Login | Buka Pasar",
  type: "website",
};

export default function Login() {
  const router = useRouter();
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.auth.user);
  const token = useSelector((state: any) => state.auth.token);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginProps>({
    mode: "all",
  });

  const onSubmit = async (data: LoginProps) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_URL_PRODUCTION}/api/v1/user/login`,
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
        const result = await response.json();
        dispatch(setLogin({ user: result.data, token: result.data.token }));
        alert("Login successful");
        router.push("/");
      } else {
        alert("Invalid Credentials");
      }
    } catch (err) {
      alert(err);
    }
  };

  const handleGoogleSignIn = async () => {
    signIn("google", {
      callbackUrl: "http://localhost:3000",
    });
  };

  return (
    <div className="relative bg-gray-200 z-0">
      <HeadMeta customMeta={meta} />
      <div className="container mx-auto h-screen flex items-center justify-center">
        <div className="bg-white relative w-2/6 px-8 pt-10 rounded-xl shadow">
          <Link
            href={"/"}
            className="absolute top-0 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-gray-700 shadow-2xl text-white px-10 py-4 text-2xl font-bold -skew-x-12"
          >
            Bukapasar.
          </Link>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="py-6 space-y-5 border-b"
          >
            {loginForm.map((item: LoginFieldProps, index: number) => {
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
            <div className="pt-4 flex flex-col gap-4">
              <Link
                href={"/forgot-password"}
                className="text-xs font-semibold underline self-end"
              >
                Forgot Password
              </Link>
              <button
                type="submit"
                className={`w-full ${
                  Object.keys(errors).length && "cursor-not-allowed"
                }`}
                disabled={Object.keys(errors).length > 0}
              >
                <p className="py-3 px-6 bg-gray-700 hover:bg-gray-600 transition rounded-xl text-white font-bold">
                  Sign In
                </p>
              </button>
              <div className="flex items-center gap-1 text-xs font-semibold">
                <p className="text-gray-500">Don&apos;t have an account?</p>
                <Link href={"/register"} className="text-blue-500 underline">
                  Register now!
                </Link>
              </div>
            </div>
          </form>
          <div className="pt-5 pb-10 text-sm font-semibold space-y-5">
            <button
              type="button"
              onClick={handleGoogleSignIn}
              className="w-full flex items-center justify-center gap-3 py-4 bg-white rounded-xl border hover:border-gray-800 transition duration-200"
            >
              <FcGoogle className="text-xl" />
              <p>Sign in with Google</p>
            </button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 w-full h-[400px] bg-gray-700 -z-10"></div>
    </div>
  );
}
