import styles from "./DealCardWraper.module.css";
export default function DealCardWraper({ children }) {
  return <div className={styles.dealCardWraper}>{children}</div>;
}
