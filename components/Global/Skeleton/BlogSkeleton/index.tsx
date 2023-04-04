import React from "react";

export default function BlogSkeleton() {
  return (
    <div className="rounded-xl overflow-hidden  bg-gray-200 w-full">
      <div className="h-60 w-full bg-gray-400/50 animate-pulse" />
      <div className="animate-pulse px-6 py-3">
        <div className="rounded-full bg-gray-400/40 text-xs w-28 h-3 mb-5 animate-pulse" />
        <div className="space-y-2">
          <div className="rounded-full bg-gray-400/50 text-xs w-full h-4 mb-3 animate-pulse" />
          <div className="rounded-full bg-gray-400/30 text-xs w-7/12 h-3 animate-pulse" />
          <div className="rounded-full bg-gray-400/30 text-xs w-9/12 h-3 animate-pulse" />
        </div>
      </div>
    </div>
  );
}
