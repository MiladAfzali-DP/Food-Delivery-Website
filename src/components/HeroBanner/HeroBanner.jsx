import styles from "./HeroBanner.module.css";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
import OrderStatusCard from "./OrderStatusCard";
export default function HomeBanner() {
  const orderStatusCardData = [
    {
      id: 1,
      icon: "/images/icon/tracking.svg",
      title: "We’ve Received your order!",
      description: "Awaiting Restaurant acceptance",
    },
    {
      id: 2,
      icon: "/images/icon/tick-box.svg",
      title: "Order Accepted!",
      description: "Your order will be delivered shortly",
    },
    {
      id: 3,
      icon: "/images/icon/tick-box.svg",
      title: "Your rider's nearby",
      description: "They're almost there - get ready",
    },
  ];
  return (
    <div className={styles.wraper}>
      <HeroContent />
      <HeroImage />
      <div className={styles.orderStatusWrpaer}>
        {orderStatusCardData.map((data) => (
          <OrderStatusCard
            className={styles.orderCard}
            cardNumber={data.id}
            titleIcon={<img src={data.icon} />}
            titleText={data.title}
            description={data.description}
            key={data.id}
          />
        ))}
      </div>
    </div>
  );
}
