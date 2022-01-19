import { getSettings, getProducts } from "@/lib/cms";
import Layout from "@/components/Layout/Layout";
import Products from "@/components/Products/Products";

export default function ProductsPage({ settings, products }) {
  return (
    <Layout settings={settings}>
      <Products items={products} />
    </Layout>
  );
}

export async function getStaticProps() {
  const settings = await getSettings();
  const products = await getProducts();

  return {
    props: {
      settings,
      products
    }
  };
}
