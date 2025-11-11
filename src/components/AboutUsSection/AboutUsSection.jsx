import styles from "./AboutUsSection.module.css";
import AboutUsHeader from "./AboutUsHeader";
import HowItWorksSection from "../HowItWorksSection/HowItWorksSection";

export default function AboutUsSection() {
  return (
    <div className={styles.wraper}>
      <AboutUsHeader />
      <HowItWorksSection />
    </div>
  );
}
