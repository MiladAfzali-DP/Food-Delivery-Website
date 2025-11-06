import HeroBanner from "../../components/HeroBanner/HeroBanner";
import styles from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={styles.home}>
      <HeroBanner />
    </div>
  );
}
