import styles from "./Label.module.css";
export default function Label({
  icon = "",
  children,
  className = "",
  ...other
}) {
  return (
    <p className={`${styles.label} ${className}`} {...other}>
      <span>{icon}</span>
      {children}
    </p>
  );
}
