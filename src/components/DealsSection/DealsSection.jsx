import styles from "./DealsSection.module.css";
import DealsHeader from "./DealsHeader";
import DealCardWraper from "../DealCardWraper/DealCardWraper";
import DealCard from "../DealCard/DealCard";
import Container from "../ui/Container/Container";
export default function DealsSection() {
  const dealCardData = [
    {
      offer: "-40",
      imgSrc: "/images/deal-image1.svg",
      restaurantName: "Chef Burgers London",
    },
    {
      offer: "-25",
      imgSrc: "/images/deal-image2.svg",
      restaurantName: "Grand Ai Cafe London",
    },
    {
      offer: "-17",
      imgSrc: "/images/deal-image1.svg",
      restaurantName: "Butterbrot Caf’e London",
    },
  ];
  return (
    <Container>
      <div className={styles.wraper}>
        <DealsHeader />
        <DealCardWraper>
          {dealCardData.map((data, i) => (
            <DealCard percentOffer={data.offer} bgImage={data.imgSrc} key={i}>
              {data.restaurantName}
            </DealCard>
          ))}
        </DealCardWraper>
      </div>
    </Container>
  );
}
