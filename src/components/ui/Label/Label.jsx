import styles from "./Label.module.css";
export default function Label({
  icon = "",
  className = "",
  reverse = false,
  children,
  ...other
}) {
  return (
    <p className={`${styles.label} ${className}`} {...other}>
      {reverse ? (
        <>
          {children}
          <span>{icon}</span>
        </>
      ) : (
        <>
          <span>{icon}</span>
          {children}
        </>
      )}
    </p>
  );
}
