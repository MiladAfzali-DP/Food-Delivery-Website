import styles from "./FAQList.module.css";
export default function FAQList({ children }) {
  return <ul className={styles.faqList}>{children}</ul>;
}
