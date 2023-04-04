import BreadCrumbs from "@/components/BreadCrumbs";
import Layout from "@/components/Global/Layout";
import { BlogProps, MetaProps } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { formatDate } from "@/utils/formateDate";
import BlogSkeleton from "@/components/Global/Skeleton/BlogSkeleton";

export default function Blog() {
  const meta: MetaProps = {
    title: "Blog | Buka Pasar",
    type: "website",
  };

  const [blogs, setBlogs] = useState<BlogProps[]>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      try {
        const response = await fetch(`http://localhost:3000/api/v1/blog`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          const result = await response.json();
          console.log(result);
          setBlogs(result);
        }
      } catch (err) {
        alert(err);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <Layout customMeta={meta}>
      <div className="bg-white">
        <div className="container mx-auto py-4">
          <BreadCrumbs />
        </div>
      </div>
      <div className="bg-gray-100">
        <div className="container mx-auto py-4">
          <div className="grid grid-cols-10 gap-5">
            <div className="col-span-2">
              <div className="rounded-xl p-5 shadow space-y-8 bg-white">
                <h3 className="font-semibold">Filter By</h3>
                <div className="flex flex-col gap-3 items-start text-sm">
                  <p className="font-medium">Availlability</p>
                  <div className="flex items-center gap-3 text-xs text-gray-500">
                    <input type="checkbox" id="checkbox-stock" />
                    <label htmlFor="checkbox-stock">In Stock</label>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-gray-500">
                    <input type="checkbox" id="checkbox-out-stock" />
                    <label htmlFor="checkbox-out-stock">Out of Stock</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-8 space-y-5">
              <div className="grid grid-cols-4 gap-5">
                {loading ? (
                  <>
                    <BlogSkeleton />
                    <BlogSkeleton />
                    <BlogSkeleton />
                    <BlogSkeleton />
                    <BlogSkeleton />
                    <BlogSkeleton />
                    <BlogSkeleton />
                    <BlogSkeleton />
                  </>
                ) : (
                  <>
                    {blogs?.map((item: BlogProps, index: number) => {
                      return (
                        <Link
                          key={index}
                          href={"/"}
                          className="rounded-xl shadow group"
                        >
                          <Image
                            src={"https://picsum.photos/200"}
                            alt={item.title}
                            height={1200}
                            width={1200}
                            draggable={false}
                            className="w-full h-60 bg-cover bg-center object-cover rounded-t-lg"
                          />
                          <div className="px-6 py-3 space-y-2">
                            <p className="text-xs text-gray-500">
                              {formatDate(item.createdAt)}
                            </p>
                            <h2 className="font-medium group-hover:underline line-clamp-2">
                              {item.title}
                            </h2>
                            <p className="text-sm text-gray-500 line-clamp-2">
                              {item.description}
                            </p>
                          </div>
                        </Link>
                      );
                    })}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
