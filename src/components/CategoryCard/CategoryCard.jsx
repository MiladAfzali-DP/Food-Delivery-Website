import styles from "./CategoryCard.module.css";
export default function CategoryCard({ imgSrc, title, numberOfRestaurant }) {
  return (
    <div className={styles.categoryCard}>
      <img src={imgSrc} alt="" />
      <h3>{title}</h3>
      <p>{numberOfRestaurant} Restaurants</p>
    </div>
  );
}
