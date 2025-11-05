import styles from "./NavBar.module.css";
import NavBarItem from "../NavBarItem/NavBarItem";
import { Link } from "react-router";
import Button from "../ui/Button/Button";
import Label from "../ui/Label/Label";
export default function NavBar() {
  return (
    <nav className={styles.navBar}>
      <NavBarItem href="/">Home</NavBarItem>
      <NavBarItem href="/browse-menu">Browse Menu</NavBarItem>
      <NavBarItem href="/special-offers">Special Offers</NavBarItem>
      <NavBarItem href="/restaurants">Restaurants</NavBarItem>
      <NavBarItem href="/track-order">Track Order</NavBarItem>
      <Button>
        <Link to="">
          <Label icon={<img src="/images/icon/user.svg" />}>Login/Signup</Label>
        </Link>
      </Button>
    </nav>
  );
}
