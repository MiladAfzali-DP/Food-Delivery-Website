import styles from "./FAQItem.module.css";
export default function FAQItem({ children, active = false }) {
  return (
    <li className={`${styles.faqItem} ${active ? styles.active : ""}`}>
      {children}
    </li>
  );
}
