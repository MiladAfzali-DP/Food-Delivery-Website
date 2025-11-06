import styles from "./HeroBanner.module.css";
import Logo from "../ui/Logo/Logo";
import Label from "../ui/Label/Label";
export default function OrderStatusCard({
  className = "",
  cardNumber,
  titleIcon,
  titleText,
  description,
}) {
  return (
    <div className={`${styles.osCard} ${className}`}>
      <span className={styles.osCardNumber}>{cardNumber}</span>
      <div className={styles.osCardHeader}>
        <Logo imgWidth="3.6rem" />
        <p>now</p>
      </div>
      <div className={styles.osCardContent}>
        <h4>
          {titleText} &nbsp; {titleIcon}
        </h4>
        <p>{description}</p>
      </div>
    </div>
  );
}
