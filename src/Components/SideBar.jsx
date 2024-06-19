import AppNav from "./AppNav";
import Logo from "./Logo";
import styles from "./SideBar.module.css";

export default function SideBar() {
  return (
    <div className={styles.SideBar}>
      <Logo />
      <AppNav />
      <p>List of cities</p>
      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy; Copyright {new Date().getFullYear()} by WorldWise Inc.
        </p>
      </footer>
    </div>
  );
}
