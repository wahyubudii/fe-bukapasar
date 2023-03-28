import { CategoryItemProps, MetaProps, ServiceItemProps } from "@/types";
import Logo from "@/public/next.svg";
import Layout from "@/components/Global/Layout";
import Carousel from "@/components/Global/Carousel";
import CardBanner from "@/components/Global/CardBanner";
import Image from "next/image";
import Link from "next/link";
import Category from "@/components/Global/Category";

export default function Home() {
  const meta: MetaProps = {
    title: "Buka Pasar | Homepage",
    favicon: `${Logo.src}`,
    type: "website",
  };

  return (
    <Layout customMeta={meta}>
      <div className="container mx-auto">
        <div className="py-12 grid grid-cols-2 gap-5">
          <Carousel />
          <CardBanner />
        </div>
      </div>
      <div className="bg-gray-200">
        <div className="container mx-auto">
          <div className="py-12">
            <Category />
          </div>
        </div>
      </div>
    </Layout>
  );
}
