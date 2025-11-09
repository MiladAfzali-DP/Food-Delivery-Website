import styles from "./PopularRestaurantsSection.module.css";
import PopularRestaurantsHeader from "./PopularRestaurantsHeader";
import CardWraper from "../CardWraper/CardWraper";
import Card from "../Card/Card";

export default function PopularRestaurantsSection() {
  const restaurantsData = [
    {
      imgSrc: "/images/restaurants-section/image1.svg",
      restaurantsName: "McDonald’s London",
    },
    {
      imgSrc: "/images/restaurants-section/image2.svg",
      restaurantsName: "Papa Johns",
    },
    {
      imgSrc: "/images/restaurants-section/image3.svg",
      restaurantsName: "KFC West London",
    },
    {
      imgSrc: "/images/restaurants-section/image4.svg",
      restaurantsName: "Texas Chicken",
    },
    {
      imgSrc: "/images/restaurants-section/image5.svg",
      restaurantsName: "Burger King",
    },
    {
      imgSrc: "/images/restaurants-section/image6.svg",
      restaurantsName: "Shaurma 1",
    },
  ];
  return (
    <div className={styles.wraper}>
      <PopularRestaurantsHeader />
      <CardWraper className={styles.cardWraper}>
        {restaurantsData.map((data, i) => (
          <Card className={styles.card} imgSrc={data.imgSrc} key={i}>
            <h3>{data.restaurantsName}</h3>
          </Card>
        ))}
      </CardWraper>
    </div>
  );
}
