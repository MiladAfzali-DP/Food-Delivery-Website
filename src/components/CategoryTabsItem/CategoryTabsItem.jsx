import styles from "./CategoryTabsItem.module.css";
export default function CategoryTabsItem({ children, active = false }) {
  return (
    <li className={`${styles.item} ${active ? styles.active : ""} `}>
      {children}
    </li>
  );
}
