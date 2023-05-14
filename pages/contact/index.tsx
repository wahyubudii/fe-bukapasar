import Layout from "@/components/Global/Layout";
import { contactItems } from "@/data/contact";
import { contactForm } from "@/data/form";
import {
  ContactFieldProps,
  ContactItemProps,
  ContactProps,
  MetaProps,
} from "@/types";
import React from "react";
import { useForm } from "react-hook-form";

const meta: MetaProps = {
  title: "Contact | Buka Pasar",
  type: "website",
};

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactProps>({
    mode: "all",
  });

  const onSubmit = (data: ContactProps | any) => {
    const subject = encodeURIComponent(
      "Bukapasar || Contact Request from " + data.name
    );
    const body = encodeURIComponent(data.comment);
    const mailtoLink = `mailto:${data.email}?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
  };

  return (
    <Layout customMeta={meta}>
      <div className="bg-white">
        <div className="container mx-auto py-6 space-y-6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.7501414162675!2d112.5970947511693!3d-7.921146381027161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7881f5a1288a83%3A0x2a5ec5132ddb7113!2sLaboratorium%20Informatika%20UMM!5e0!3m2!1sid!2sid!4v1680595618861!5m2!1sid!2sid"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          ></iframe>
          <div className="rounded-xl bg-white px-6 py-8 shadow-md">
            <div className="grid grid-cols-2 gap-10">
              <div className="space-y-5">
                <h3 className="text-xl font-bold">Contact</h3>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
                  {contactForm.map((item: ContactFieldProps, index: number) => {
                    return (
                      <div key={index} className="space-y-1">
                        <label
                          htmlFor={item.name}
                          className="text-sm font-semibold"
                        >
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
                  <div className="pt-1">
                    <label
                      htmlFor={"comment"}
                      className="text-sm font-semibold"
                    >
                      Comment
                    </label>
                    <textarea
                      {...register("comment", {
                        required: "Comment is required!",
                        minLength: {
                          value: 20,
                          message: `Comment be atleast 20 characters long!`,
                        },
                        maxLength: {
                          value: 500,
                          message: `Comment must be atmost 500 characters long!`,
                        },
                      })}
                      id="comment"
                      placeholder="Comment"
                      name="comment"
                      className={`${
                        errors["comment"] && "border border-red-500"
                      } bg-gray-50 border border-gray-200 text-gray-900 text-sm focus:ring-[#4649ff] focus:border-[#4649ff] outline-none block w-full p-3 resize-none h-48`}
                    />
                    {errors["comment"] && (
                      <span className="text-red-600 text-xs">
                        {errors["comment"]?.message}
                      </span>
                    )}
                  </div>
                  <div className="pt-4">
                    <button
                      type="submit"
                      className={`w-full ${
                        Object.keys(errors).length && "cursor-not-allowed"
                      }`}
                      disabled={Object.keys(errors).length > 0}
                    >
                      <p className="py-3 px-6 bg-blue-700 hover:bg-blue-600 transition rounded-xl text-white font-medium">
                        Submit
                      </p>
                    </button>
                  </div>
                </form>
              </div>
              <div className="space-y-5">
                <h3 className="text-xl font-bold">Get In Touch With Us</h3>
                <div className="space-y-5 text-gray-400 text-sm">
                  {contactItems.map((item: ContactItemProps, index: number) => {
                    return (
                      <div key={index} className="flex items-center gap-5">
                        <item.icon className="w-5 h-5 text-gray-600" />
                        <p className="font-semibold">{item.title}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
