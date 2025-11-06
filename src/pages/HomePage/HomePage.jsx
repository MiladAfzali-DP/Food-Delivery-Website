import styles from "./HomePage.module.css";
import HeroBanner from "../../components/HeroBanner/HeroBanner";
import DealsSection from "../../components/DealsSection/DealsSection";

export default function HomePage() {
  return (
    <div className={styles.home}>
      <HeroBanner />
      <DealsSection />
    </div>
  );
}
