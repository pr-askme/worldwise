import AppNav from "../Components/AppNav";
import Map from "../Components/Map";
import SideBar from "../Components/SideBar";
import styles from "./AppLayout.module.css";

export default function AppLayout() {
  return (
    <div className={styles.app}>
      <SideBar />
      <Map />
    </div>
  );
}
