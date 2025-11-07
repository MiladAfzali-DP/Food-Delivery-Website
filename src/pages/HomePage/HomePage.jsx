import styles from "./HomePage.module.css";
import HeroBanner from "../../components/HeroBanner/HeroBanner";
import DealsSection from "../../components/DealsSection/DealsSection";
import PopularCategoriesSection from "../../components/PopularCategoriesSection/PopularCategoriesSection";
import Container from "../../components/ui/Container/Container";

export default function HomePage() {
  return (
    <div className={styles.home}>
      <Container>
        <HeroBanner />
        <DealsSection />
        <PopularCategoriesSection />
      </Container>
    </div>
  );
}
