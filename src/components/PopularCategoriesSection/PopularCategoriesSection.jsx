import styles from "./PopularCategoriesSection.module.css";
import CategoryCard from "../CategoryCard/CategoryCard";
import CategoryCardWrpaer from "../CategoryCardWraper/CategoryCardWraper";
import PopularCategoriesHeader from "./PopularCategoriesHeader";
export default function PopularCategoriesSection() {
  const popularCategoriesData = [
    {
      imgSrc: "/images/categories-section/image1.svg",
      categoryName: "Burgers & Fast food",
      numberOfRestaurant: 21,
    },
    {
      imgSrc: "/images/categories-section/image2.svg",
      categoryName: "Salads",
      numberOfRestaurant: 32,
    },
    {
      imgSrc: "/images/categories-section/image3.svg",
      categoryName: "Pasta & Casuals",
      numberOfRestaurant: 4,
    },
    {
      imgSrc: "/images/categories-section/image4.svg",
      categoryName: "Pizza",
      numberOfRestaurant: 32,
    },
    {
      imgSrc: "/images/categories-section/image5.svg",
      categoryName: "Breakfast",
      numberOfRestaurant: 4,
    },
    {
      imgSrc: "/images/categories-section/image6.svg",
      categoryName: "Soups",
      numberOfRestaurant: 32,
    },
  ];
  return (
    <div className={styles.wraper}>
      <PopularCategoriesHeader />
      <CategoryCardWrpaer>
        {popularCategoriesData.map((data, i) => (
          <CategoryCard
            imgSrc={data.imgSrc}
            title={data.categoryName}
            numberOfRestaurant={data.numberOfRestaurant}
            key={i}
          />
        ))}
      </CategoryCardWrpaer>
    </div>
  );
}
