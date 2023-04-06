import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { BreadCrumbsProps } from "@/types";

const convertBreadcrumb = (path: string): string => {
  return path
    .replace(/-/g, " ")
    .replace(/oe/g, "ö")
    .replace(/ae/g, "ä")
    .replace(/ue/g, "ü")
    .toUpperCase();
};

export default function BreadCrumbs() {
  const router = useRouter();
  const [breadcrumbs, setBreadcrumbs] = useState<BreadCrumbsProps[]>();

  useEffect(() => {
    if (router) {
      const linkPath = router.asPath.split("/");
      linkPath.shift();

      const pathArray = linkPath.map((path, i) => {
        return {
          breadcrumb: path,
          href: "/" + linkPath.slice(0, i + 1).join("/"),
        };
      });

      setBreadcrumbs(pathArray);
    }
  }, [router]);

  if (!breadcrumbs) {
    return null;
  }

  return (
    <div className="flex items-center uppercase text-sm text-gray-500w">
      <Link href="/" className="hover:text-blue-600 transition">
        Home
      </Link>
      {breadcrumbs.map((breadcrumb: BreadCrumbsProps, index: number) => {
        return (
          <div key={index}>
            <span className="mx-3 after:content-['/']"></span>
            <Link href={breadcrumb.href} className="hover:text-blue-600">
              {convertBreadcrumb(breadcrumb.breadcrumb)}
            </Link>
          </div>
        );
      })}
    </div>
  );
}
