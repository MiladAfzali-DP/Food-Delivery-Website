import styles from "./DealCard.module.css";
export default function DealCard({
  percentOffer = "-",
  bgImage = "",
  children,
}) {
  return (
    <div className={styles.dealCard}>
      <span className={styles.percentOffer}>{percentOffer}%</span>
      <img src={bgImage} alt="" />
      <div className={styles.content}>
        <p>Restaurant</p>
        <h4>{children}</h4>
      </div>
    </div>
  );
}
