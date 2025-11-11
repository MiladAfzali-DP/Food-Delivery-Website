import styles from "./StepCard.module.css";
export default function StepCard({ title, cardImage, description }) {
  return (
    <div className={styles.stepCard}>
      <h4>{title}</h4>
      <img src={cardImage} alt={title} />
      <p>{description}</p>
    </div>
  );
}
