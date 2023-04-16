import { MetaProps } from "@/types";
import Logo from "@/public/next.svg";
import Layout from "@/components/Global/Layout";
import Carousel from "@/components/Carousel";
import Category from "@/components/Category";
import Brand from "@/components/Brand";
import Banner from "@/components/Banner";
import Blog from "@/components/Blog";
import Collection from "@/components/Collection";
import SpecialProduct from "@/components/SpecialProduct";
import PopularProduct from "@/components/Products/PopularProduct";

export default function Home() {
  const meta: MetaProps = {
    title: "Bukapasar: Best Deals Electronic Shop",
    favicon: `${Logo.src}`,
    type: "website",
  };

  return (
    <Layout customMeta={meta}>
      <div className="container mx-auto">
        <div className="py-12 grid grid-cols-2 gap-5">
          <Carousel />
          <Banner />
        </div>
      </div>
      <div className="bg-gray-200">
        <div className="container mx-auto">
          <div className="py-12">
            <Category />
          </div>
        </div>
      </div>
      <div className="bg-gray-50">
        <div className="container mx-auto">
          <div className="py-12">
            <Brand />
          </div>
        </div>
      </div>
      <div className="bg-gray-50">
        <div className="container mx-auto">
          <div className="py-12 space-y-5">
            <Collection />
            <SpecialProduct />
          </div>
        </div>
      </div>
      <div className="bg-gray-50">
        <div className="container mx-auto">
          <div className="py-12 space-y-5">
            <PopularProduct />
          </div>
        </div>
      </div>
      <div className="bg-gray-50">
        <div className="container mx-auto">
          <div className="py-12">
            <Blog />
          </div>
        </div>
      </div>
    </Layout>
  );
}
