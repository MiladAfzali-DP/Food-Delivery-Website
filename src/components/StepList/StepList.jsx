import styles from "./StepList.module.css";
export default function StepList({ children, stepDescription }) {
  return (
    <div className={styles.stepList}>
      <div className={styles.cardsWraper}>{children}</div>
      <p>{stepDescription}</p>
    </div>
  );
}
