import styles from "./Header.module.scss";
import VantaBackground from "./VantaBackground/VantaBackground";

export default function Header({ parentStyles, title, textArea }) {
  return (
    <div className={`${styles.container} ${parentStyles}`}>
      <div className={styles["header__1"]}>
        <VantaBackground />
        <div className={styles["header__1-inner"]}></div>
      </div>
      <div className={styles["header__2"]}></div>
      <div className={styles["header__3"]}></div>
    </div>
  );
}
