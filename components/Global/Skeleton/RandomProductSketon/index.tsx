import React from "react";

export default function RandomProductSkeleton() {
  return (
    <div className="flex items-center gap-5 first:border-b first:pb-3 last:pt-3">
      <div className="w-32 h-20 bg-gray-300 animate-pulse" />
      <div className="text-sm w-full">
        <div className="bg-gray-300 h-3 w-auto rounded-full animate-pulse" />
        <div className="my-3 bg-gray-200 h-3 w-16 rounded-full animate-pulse" />
        <div className=" bg-gray-300 h-3 w-24 rounded-full animate-pulse" />
      </div>
    </div>
  );
}
