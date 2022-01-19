import Image from "next/image";
import styles from "./ProductList.module.sass";

import Text from "../Text/Text";
import Button from "../Button/Button";

const ProductItem = ({ item }) => {
  const { sku, image, title, text, price } = item;
  return (
    <li className={styles.item}>
      <div className={styles.img}>
        <Image src={image} alt={title} width={274} height={209} />
      </div>
      <div className={styles.description}>
        <Text tag="div" className={styles.sku}>
          {sku}
        </Text>
        <Text tag="h2" gradient className={styles.h2}>
          {title}
        </Text>
        <Text className={styles.p}>{text}</Text>
        <Text tag="div" className={styles.price}>
          $ {price}
        </Text>
        <Button>Add to cart</Button>
      </div>
    </li>
  );
};

export default function ProductList({ items }) {
  const els = items.map((item, idx) => <ProductItem key={idx.toString()} item={item} />);
  return <ul className={styles.list}>{els}</ul>;
}
