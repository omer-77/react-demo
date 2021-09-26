import styles from "./Header.module.css";
import logo from "../../assets/logo.png";

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles["logo-container"]}>
        <img src={logo} alt="Logo" className={styles.logo} />
      </div>
      <div className={styles["header-right"]}>
        <a>Home</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
      </div>
    </div>
  );
}

export default Header;
