import styles from "./HeroBanner.module.css";
import InputBox from "../ui/InputBox/InputBox";

export default function HeroContent() {
  return (
    <div className={styles.heroContent}>
      <p>Order Restaurant food, takeaway and groceries.</p>
      <h1>
        <span>Feast Your Senses,</span>
        <span>Fast and Fresh</span>
      </h1>
      <div>
        <p>Enter a postcode to see what we deliver</p>
        <InputBox placeholder="e.g. EC4R 3TE" btnElement="Search" />
      </div>
    </div>
  );
}
