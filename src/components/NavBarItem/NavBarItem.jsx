import { NavLink } from "react-router";

export default function NavBarItem({ href = "", children }) {
  return (
    <NavLink to={href}>
      <p>{children}</p>
    </NavLink>
  );
}
