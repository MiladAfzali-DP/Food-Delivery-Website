import styles from "./AboutUsSection.module.css";
import Title from "../ui/Title/Title";
import CategoryTabs from "../CategoryTabs/CategoryTabs";
import CategoryTabsItem from "../CategoryTabsItem/CategoryTabsItem";
import { Link } from "react-router";

const tabsData = [
  {
    href: "/",
    text: "Frequent Questions",
    isActive: true,
  },
  {
    href: "/",
    text: "Who we are?",
    isActive: false,
  },
  {
    href: "/",
    text: "Partner Program",
    isActive: false,
  },
  {
    href: "/",
    text: "Help & Support",
    isActive: false,
  },
];
export default function AboutUsHeader() {
  return (
    <div>
      <div className={styles.header}>
        <Title>Know more about us!</Title>
        <CategoryTabs>
          {tabsData.map((data, i) => (
            <CategoryTabsItem active={data.isActive} key={i}>
              <Link href={data.href}>{data.text}</Link>
            </CategoryTabsItem>
          ))}
        </CategoryTabs>
      </div>
    </div>
  );
}
