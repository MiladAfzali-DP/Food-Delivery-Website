import styles from "./DealCard.module.css";
import Title from "../ui/Title/Title";
const badgeStyle = {
  backgroundColor: "#03081F",
  color: "white",
  top: "0",
};
export default function DealCard({
  className = "",
  badgeCustomStyle = { bottom: "none", right: "1rem", left: "none" },
  badgeText = "-",
  bgImage = null,
  title = "",
  subTitle = "",
  children = "",
}) {
  return (
    <div className={`${styles.dealCard} ${className}`}>
      <span
        className={styles.badge}
        style={{ ...badgeStyle, ...badgeCustomStyle }}
      >
        {badgeText}%
      </span>
      {bgImage ? (
        <img src={bgImage} alt="" />
      ) : (
        <Title customClass={styles.notFoundImage}>
          Please Add your Image Src
        </Title>
      )}
      <div className={styles.content}>
        <p>{subTitle}</p>
        <h4>{title}</h4>
        {children}
      </div>
    </div>
  );
}
