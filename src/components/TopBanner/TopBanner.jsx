import { Link } from "react-router";
import Label from "../ui/Label/Label";
import styles from "./TopBanner.module.css";
import ShoppingCartButton from "../ShoppingCartButton/ShoppingCartButton";
export default function TopBanner() {
  return (
    <div className={styles.topBanner}>
      <div>
        <Label icon="🌟">
          Get 5% Off your first order,{" "}
          <Link className="text-bold">Promo: ORDER5</Link>
        </Label>
      </div>
      <div>
        <Label icon={<img src="/images/icon/Location.svg" />}>
          Regent Street, A4, A4201, London &nbsp;<Link>Change Location</Link>
        </Label>
        <ShoppingCartButton />
      </div>
    </div>
  );
}
