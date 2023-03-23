import { FormFieldProps } from "@/types";
import React from "react";
import { BiSearch } from "react-icons/bi";

export default function FormField({
  classname,
  type,
  placeholder,
  value,
  handleChange,
  handleSubmit,
  children,
  iconButton,
}: FormFieldProps) {
  return (
    <form onSubmit={handleSubmit} className={classname}>
      <div className="flex">
        <div className="relative w-full">
          <input
            type={type}
            className="outline-none block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 dark:bg-gray-700 dark:border-l-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700"
          >
            {iconButton ? (
              <div className="h-5 w-full text-xl">{iconButton}</div>
            ) : (
              <div className="h-5 w-full text-sm">{children}</div>
            )}
          </button>
        </div>
      </div>
    </form>
  );
}
