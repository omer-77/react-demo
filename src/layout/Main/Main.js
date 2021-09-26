import Sidebar from "../Sidebar/Sidebar";
import Content from "../Content/Content";
import styles from './Main.module.css';

function Main() {
  return (
    <div className={styles.main}>
      <Sidebar></Sidebar>
      <Content></Content>
    </div>
  );
}

export default Main;
