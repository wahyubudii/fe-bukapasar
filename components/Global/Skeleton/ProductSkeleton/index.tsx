import React from "react";

export default function ProductSkeleton() {
  return (
    <div className="rounded-xl overflow-hidden  bg-gray-200 w-full">
      <div className="h-60 w-full bg-gray-400/50 animate-pulse" />
      <div className="animate-pulse px-6 py-3 space-y-2">
        <div className="rounded-full bg-gray-400/50 text-xs w-12 h-3 mb-4 animate-pulse" />
        <div className="rounded-full bg-gray-400/50 text-xs w-full h-4 animate-pulse" />
        <div className="rounded-full bg-gray-400/30 text-xs w-20 h-3 animate-pulse" />
      </div>
      <div className="rounded-full bg-gray-400/50 text-xs w-32 h-3 mx-6 my-4 animate-pulse" />
    </div>
  );
}
