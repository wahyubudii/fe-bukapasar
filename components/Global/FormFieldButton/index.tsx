import { FormFieldProps } from "@/types";
import React from "react";

export default function FormFieldButton({
  classname,
  type,
  placeholder,
  value,
  name,
  handleChange,
  handleSubmit,
  nameButton,
  iconButton,
}: FormFieldProps) {
  return (
    <form onSubmit={handleSubmit} className={classname}>
      <div className="flex">
        <div className="relative w-full">
          <input
            id={name}
            type={type}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
            required
            className="outline-none block p-2 w-full z-20 text-sm rounded-r-lg border-l-2 border bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
          />
          <button
            type="submit"
            className="absolute top-0 right-0 py-2 px-3 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700"
          >
            <div className={`h-5 w-full ${iconButton ? "text-xl" : "text-sm"}`}>
              {iconButton ? iconButton : nameButton}
            </div>
          </button>
        </div>
      </div>
    </form>
  );
}
