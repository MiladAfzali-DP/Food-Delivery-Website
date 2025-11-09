import styles from "./Card.module.css";
export default function Card({ imgSrc, children, className }) {
  return (
    <div className={`${styles.categoryCard} ${className}`}>
      <img src={imgSrc} alt="" />
      <div>{children}</div>
    </div>
  );
}
