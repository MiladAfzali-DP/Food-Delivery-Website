import styles from "./NavBar.module.css";
import NavBarItem from "../NavBarItem/NavBarItem";
import { Link } from "react-router";
import Button from "../ui/Button/Button";
import Label from "../ui/Label/Label";
export default function NavBar() {
  const navData = [
    { href: "/", text: "Home" },
    { href: "/browse-menu", text: "Browse Menu" },
    { href: "/special-offers", text: "Special Offers" },
    { href: "/restaurants", text: "Restaurants" },
    { href: "/track-order", text: "Track Order" },
  ];
  return (
    <nav className={styles.navBar}>
      {navData.map((data, i) => (
        <NavBarItem href={data.href} key={i}>
          {data.text}
        </NavBarItem>
      ))}
      <Button>
        <Link to="">
          <Label icon={<img src="/images/icon/user.svg" />}>Login/Signup</Label>
        </Link>
      </Button>
    </nav>
  );
}
