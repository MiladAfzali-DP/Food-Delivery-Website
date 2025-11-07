import styles from "./CategoryCardWraper.module.css";
export default function CategoryCardWrpaer({ children }) {
  return <div className={styles.wraper}>{children}</div>;
}
