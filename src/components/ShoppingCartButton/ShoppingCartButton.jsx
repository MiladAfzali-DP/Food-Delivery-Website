import styles from "./ShoppingCartButton.module.css";
import Button from "../ui/Button/Button";
export default function ShoppingCartButton() {
  return (
    <Button className={styles.wraper}>
      <span>
        <img src="/images/icon/Shop.svg" />
      </span>
      <span>23 Items</span>
      <span>GBP 79.89</span>
      <span>
        <img
          src="/images/icon/forward-button.svg"
          className={styles.borderRight}
        />
      </span>
    </Button>
  );
}
