import styles from "./DealsSection.module.css";
import CategoryTabs from "../CategoryTabs/CategoryTabs";
import CategoryTabsItem from "../CategoryTabsItem/CategoryTabsItem";
import { Link } from "react-router";
import Title from "../ui/Title/Title";
export default function DealsHeader() {
  const tabsData = [
    { href: "deals=vegan", text: "Vegan", isActive: false },
    { href: "deals=sushi", text: "Sushi", isActive: false },
    {
      href: "deals=pizza-fast-food",
      text: "Pizza & Fast food",
      isActive: true,
    },
    { href: "deals=others", text: "others", isActive: false },
  ];
  return (
    <div className={styles.header}>
      <Title>Up to -40% 🎊 Order.uk exclusive deals</Title>
      <CategoryTabs>
        {tabsData.map((data, i) => (
          <CategoryTabsItem active={data.isActive} key={i}>
            <Link to={data.href}>{data.text}</Link>
          </CategoryTabsItem>
        ))}
      </CategoryTabs>
    </div>
  );
}
