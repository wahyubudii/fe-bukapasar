import React from "react";

export default function DateTimeDisplay({ value }: any) {
  return (
    <div className="p-2 bg-blue-700 text-white flex flex-col items-center">
      {value}
    </div>
  );
}
