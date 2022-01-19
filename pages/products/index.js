import Script from "next/script";
import { getSettings, getProducts } from "@/lib/cms";
import Layout from "@/components/Layout/Layout";
import Products from "@/components/Products/Products";

{
  /* <script type='text/javascript' src='//static.queue-it.net/script/queueclient.min.js'></script>
<script
   data-queueit-c='ninjs'
   type='text/javascript'
   src='//static.queue-it.net/script/queueconfigloader.min.js'>
</script> */
}

export default function ProductsPage({ settings, products }) {
  return (
    <Layout settings={settings}>
      <Script src="https://static.queue-it.net/script/queueclient.min.js" />
      <Script data-queueit-c="ninjs" src="https://static.queue-it.net/script/queueconfigloader.min.js" />
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
