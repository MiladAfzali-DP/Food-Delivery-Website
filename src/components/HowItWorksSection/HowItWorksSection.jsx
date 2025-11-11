import styles from "./HowItWorksSection.module.css";
import FAQList from "../FAQList/FAQList";
import FAQItem from "../FAQItem/FAQItem";
import StepList from "../StepList/StepList";
import StepCard from "../StepItem/StepCard";
const faqData = [
  {
    text: "How does Order.UK work?",
    isActive: true,
  },
  {
    text: "What payment methods are accepted?",
    isActive: false,
  },
  {
    text: "Can I track my order in real-time?",
    isActive: false,
  },
  {
    text: "Are there any special discounts or promotions available?",
    isActive: false,
  },
  {
    text: "Is Order.UK available in my area?",
    isActive: false,
  },
];

const cardData = [
  {
    title: "Place an Order!",
    imgSrc: "/images/stepCardImages/order-food.svg",
    description: "Place order through our website or Mobile app",
  },
  {
    title: "Track Progress",
    imgSrc: "/images/stepCardImages/food.svg",
    description: "Your can track your order status with delivery time",
  },
  {
    title: "Get your Order!",
    imgSrc: "/images/stepCardImages/order.svg",
    description: "Receive your order at a lighting fast speed!",
  },
];
export default function HowItWorksSection() {
  return (
    <div className={styles.howIsWorks}>
      <FAQList>
        {faqData.map((data, i) => (
          <FAQItem active={data.isActive} key={i}>
            {data.text}
          </FAQItem>
        ))}
      </FAQList>
      <StepList stepDescription="Order.UK simplifies the food ordering process. Browse through our diverse menu, select your favorite dishes, and proceed to checkout. Your delicious meal will be on its way to your doorstep in no time!">
        {cardData.map((data, i) => (
          <StepCard
            title={data.title}
            cardImage={data.imgSrc}
            description={data.description}
            key={i}
          />
        ))}
      </StepList>
    </div>
  );
}
