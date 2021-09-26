import Sidebar from "../Sidebar/Sidebar";
import Content from "../Content/Content";
import styles from "./Main.module.css";

function Main() {
  return (
    <div className={styles.main}>
      <Sidebar />
      <Content />
    </div>
  );
}

export default Main;
