import BreadCrumbs from "@/components/BreadCrumbs";
import Layout from "@/components/Global/Layout";
import { BlogProps, MetaProps } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { formatDate } from "@/utils/formateDate";
import BlogSkeleton from "@/components/Global/Skeleton/BlogSkeleton";
import { categoryFilter } from "@/data/blog";

const meta: MetaProps = {
  title: "Blog | Buka Pasar",
  type: "website",
};

export default function Blog() {
  const [blogs, setBlogs] = useState<BlogProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // SELECTED CATEGORIES BLOGS
  const [selectedCategory, setSelectedCategory] = useState<string>();

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_URL_PRODUCTION}/api/v1/blog`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.ok) {
          const result = await response.json();
          setBlogs(result);
        } else {
          setBlogs([]);
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

  const handleCategoryChange = (category: string) => {
    if (selectedCategory === category) {
      setSelectedCategory("");
    } else {
      setSelectedCategory(category);
    }
  };

  return (
    <Layout customMeta={meta}>
      <div className="py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-10 gap-5">
            <div className="col-span-2 space-y-5 border-r border-gray-200 pr-4">
              <h3 className="font-bold text-2xl">Filters</h3>
              <div className="p-5 space-y-8">
                <div className="flex flex-col gap-5 items-start">
                  <p className="font-semibold text-lg">Category</p>
                  {categoryFilter.map((item: any, index: number) => {
                    return (
                      <div
                        key={index}
                        className="flex items-center gap-3 text-sm text-gray-700"
                      >
                        <input
                          className="w-4 h-4"
                          type="checkbox"
                          id={item.id}
                          value={item.id}
                          checked={selectedCategory === item.id}
                          onChange={() => handleCategoryChange(item.id)}
                        />
                        <label htmlFor={item.id}>{item.label}</label>
                      </div>
                    );
                  })}
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
