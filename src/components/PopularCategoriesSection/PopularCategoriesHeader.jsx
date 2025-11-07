import Title from "../ui/Title/Title";
import styles from "./PopularCategoriesSection.module.css";
export default function PopularCategoriesHeader() {
  return (
    <div className={styles.header}>
      <Title>Order.uk Popular Categories 🤩</Title>
    </div>
  );
}
