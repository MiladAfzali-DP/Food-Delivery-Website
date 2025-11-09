import styles from "./PopularRestaurantsSection.module.css";
import Title from "../ui/Title/Title";
export default function PopularRestaurantsHeader() {
  return (
    <div className={styles.header}>
      <Title>Popular Restaurants</Title>
    </div>
  );
}
