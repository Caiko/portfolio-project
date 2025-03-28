import styles from "./Header.module.scss";

export default function Header({ parentStyles }) {
  return (
    <header className={`${styles.container} ${parentStyles}`}>
      <div className={styles["header__1"]}>
        <div className={styles["header__1-inner"]}></div>
      </div>
      <div className={styles["header__2"]}>twobox</div>
      <div className={styles["header__3"]}>threebox</div>
    </header>
  );
}
