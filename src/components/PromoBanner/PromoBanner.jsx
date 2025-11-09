import { Link } from "react-router";
import Logo from "../ui/Logo/Logo";
import Title from "../ui/Title/Title";
import styles from "./PromoBanner.module.css";
export default function PromoBanner() {
  return (
    <div className={styles.wraper}>
      <div className={styles.promoImage}>
        <img src="/images/promoImages/image1.svg" alt="" />
        <img src="/images/promoImages/image2.svg" alt="" />
      </div>
      <div className={styles.promoContent}>
        <div className={styles.title}>
          <Logo />
          <Title customClass={styles.titleText}>
            <span>ing</span>
            <span>is more</span>
          </Title>
        </div>
        <h4 className={styles.subTitle}>
          <span>Personalised</span>&nbsp;
          <span>& Instant</span>
        </h4>
        <p>Download the Order.uk app for faster ordering</p>
        <div className={styles.downloadLink}>
          <Link to="/">
            <img src="/images/promoImages/app-store-download.svg" alt="" />
          </Link>
          <Link to="/">
            <img src="/images/promoImages/google-play-download.svg" alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
}
