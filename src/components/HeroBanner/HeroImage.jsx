import styles from "./HeroBanner.module.css";
export default function HeroImage() {
  return (
    <div className={styles.heroImage}>
      <img src="/images/hero-image2.svg" alt="" />
      <img src="/images/hero-image1.png" alt="" />
    </div>
  );
}
