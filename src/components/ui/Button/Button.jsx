import styles from "./Button.module.css";
export default function Button({ children, className, onClick = () => {} }) {
  return (
    <button className={`${styles.button} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}
