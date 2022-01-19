import styles from "./Products.module.sass";

import Section from "../Section/Section";
import Container from "../Container/Container";
import ProductList from "@/components/ProductList/ProductList";

export default function Products({ items }) {
  return (
    <Section id="products" className={styles.products}>
      <Container>
        <ProductList items={items} />
      </Container>
    </Section>
  );
}
