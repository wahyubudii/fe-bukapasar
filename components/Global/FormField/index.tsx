import { FormFieldProps } from "@/types";
import React from "react";

export default function FormField({
  type,
  placeholder,
  value,
  name,
  handleChange,
  textarea,
}: FormFieldProps) {
  return (
    <div className="relative w-full">
      {textarea ? (
        <textarea
          id={name}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          required
          className="bg-gray-50 border border-gray-200 text-gray-900 text-sm focus:ring-[#4649ff] focus:border-[#4649ff] outline-none block w-full p-3 resize-none h-48"
        />
      ) : (
        <input
          id={name}
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          required
          className="bg-gray-50 border border-gray-200 text-gray-900 text-sm focus:ring-[#4649ff] focus:border-[#4649ff] outline-none block w-full p-3"
        />
      )}
    </div>
  );
}
