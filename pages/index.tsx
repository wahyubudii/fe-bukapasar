import { MetaProps } from "@/types";
import Logo from "@/public/next.svg";
import Layout from "@/components/Global/Layout";

export default function Home() {
  const meta: MetaProps = {
    title: "Buka Pasar | Homepage",
    description:
      "The personal site, writing and portfolio of Wahyu Budi Utomo, a frontend engineer based in Indonesia.",
    favicon: `${Logo.src}`,
    type: "website",
  };

  return (
    <Layout customMeta={meta}>
      <h1 className="text-3xl font-bold"></h1>
    </Layout>
  );
}
