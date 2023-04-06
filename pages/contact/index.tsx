import BreadCrumbs from "@/components/BreadCrumbs";
import FormField from "@/components/Global/FormField";
import Layout from "@/components/Global/Layout";
import { contactItems } from "@/data/contact";
import { ContactItemProps, ContactProps, MetaProps } from "@/types";
import React, { FormEvent, useState } from "react";

export default function Contact() {
  const [fields, setFields] = useState<ContactProps>({
    name: "",
    email: "",
    phone: "",
    comment: "",
  });

  const meta: MetaProps = {
    title: "Contact | Buka Pasar",
    type: "website",
  };

  const handleChange = (
    e: FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFields({
      ...fields,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      "Bukapasar || Contact Request from " + fields.name
    );
    const body = encodeURIComponent(fields.comment);
    const mailtoLink = `mailto:${fields.email}?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
    setFields({
      name: "",
      email: "",
      phone: "",
      comment: "",
    });
  };

  return (
    <Layout customMeta={meta}>
      <div className="bg-white">
        <div className="container mx-auto py-4">
          <BreadCrumbs />
        </div>
        <div className="bg-gray-100">
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
            <div className="rounded-xl bg-white px-6 py-8 shadow">
              <div className="grid grid-cols-2 gap-10">
                <div className="space-y-5">
                  <h3 className="text-xl font-semibold">Contact</h3>
                  <form onSubmit={handleSubmit} className="space-y-3">
                    <FormField
                      type="text"
                      placeholder="Name"
                      value={fields.name}
                      name="name"
                      handleChange={handleChange}
                      handleSubmit={handleSubmit}
                    />
                    <FormField
                      type="email"
                      placeholder="Email"
                      value={fields.email}
                      name="email"
                      handleChange={handleChange}
                      handleSubmit={handleSubmit}
                    />
                    <FormField
                      type="number"
                      placeholder="Phone Number"
                      value={fields.phone}
                      name="phone"
                      handleChange={handleChange}
                      handleSubmit={handleSubmit}
                    />
                    <FormField
                      type="text"
                      placeholder="Comment"
                      value={fields.comment}
                      name="comment"
                      handleChange={handleChange}
                      handleSubmit={handleSubmit}
                      textarea={true}
                    />
                    <div className="pt-6">
                      <button type="submit">
                        <p className="py-3 px-6 bg-blue-600 hover:bg-blue-500 transition rounded-xl text-white font-medium">
                          Submit
                        </p>
                      </button>
                    </div>
                  </form>
                </div>
                <div className="space-y-5">
                  <h3 className="text-xl font-semibold">
                    Get In Touch With Us
                  </h3>
                  <div className="space-y-5 text-gray-400 text-sm">
                    {contactItems.map(
                      (item: ContactItemProps, index: number) => {
                        return (
                          <div key={index} className="flex items-center gap-5">
                            <div>
                              <item.icon className="w-5 h-5 text-gray-600" />
                            </div>
                            <p>{item.title}</p>
                          </div>
                        );
                      }
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
