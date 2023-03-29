import { MetaProps } from "@/types";
import Logo from "@/public/next.svg";
import Layout from "@/components/Global/Layout";
import Carousel from "@/components/Carousel";
import Category from "@/components/Category";
import Brand from "@/components/Brand";
import Banner from "@/components/Banner";
import Blog from "@/components/Blog";
import Collection from "@/components/Collection";

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
      <div className="container mx-auto">
        <div className="py-12">
          <Brand />
        </div>
      </div>
      <div className="container mx-auto">
        <div className="py-12">
          <Collection />
        </div>
      </div>
      <div className="container mx-auto">
        <div className="py-12">
          <Blog />
        </div>
      </div>
    </Layout>
  );
}
