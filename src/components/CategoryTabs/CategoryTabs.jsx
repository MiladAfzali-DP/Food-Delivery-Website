import styles from "./CategoryTabs.module.css";
export default function CategoryTabs({ children }) {
  return <ul className={styles.categoryTabs}>{children}</ul>;
}
