import styles from "./Header.module.css";
export default function Header({ children, className }) {
  return <header className={className}>{children}</header>;
}
