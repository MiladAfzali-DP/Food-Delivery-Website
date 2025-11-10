import styles from "./JoinUsSection.module.css";
import DealCard from "../DealCard/DealCard";
import DealCardWraper from "../DealCardWraper/DealCardWraper";
import Button from "../ui/Button/Button";
const JoinUsSectionData = [
  {
    title: "Partner with us",
    subTitle: "Signup as a business",
    badgeText: "Earn more with lower fees",
    srcImage: "/images/joinUs/partner-with-us.svg",
  },
  {
    title: "Ride with us",
    subTitle: "Signup as a rider",
    badgeText: "Avail exclusive perks",
    srcImage: "/images/joinUs/ride-with-us.svg",
  },
];
export default function JoinUsSection() {
  return (
    <div className={styles.wrapers}>
      <DealCardWraper>
        {JoinUsSectionData.map((data, i) => (
          <DealCard
            className={styles.card}
            title={data.title}
            subTitle={data.subTitle}
            badgeText={data.badgeText}
            bgImage={data.srcImage}
            badgeCustomStyle={{
              backgroundColor: "white",
              color: "#03081F",
              left: "4.375rem",
            }}
            key={i}
          >
            <Button className={styles.cardButton}>Get Started</Button>
          </DealCard>
        ))}
      </DealCardWraper>
    </div>
  );
}
