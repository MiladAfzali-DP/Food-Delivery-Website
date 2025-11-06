import styles from "./InputBox.module.css";
import Button from "../Button/Button";
export default function Input({ btnElement, ...other }) {
  return (
    <div className={styles.inputBox}>
      <input type="text" {...other} />
      <Button>{btnElement}</Button>
    </div>
  );
}
