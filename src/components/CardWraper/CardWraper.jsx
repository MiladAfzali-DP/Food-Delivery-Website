import styles from "./CardWraper.module.css";
export default function CardWraper({ children, className }) {
  return <div className={`${styles.wraper} ${className}`}>{children}</div>;
}
