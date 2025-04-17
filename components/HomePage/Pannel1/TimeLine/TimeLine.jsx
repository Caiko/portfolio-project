import styles from "./TimeLine.module.scss";

export default function TimeLine() {
  return (
    <div className={styles.container}>
      <div className={styles.step}>
        <div className={`${styles.dot} ${styles.yellow}`}></div>
        <div className={styles.connector}></div>
      </div>

      <div className={styles.step}>
        <div className={`${styles.dot} ${styles.greenLight}`}></div>
        <div className={styles.connector}></div>
      </div>

      <div className={styles.step}>
        <div className={`${styles.dot} ${styles.greenLight}`}></div>
        <div className={styles.connector}></div>
      </div>

      <div className={styles.step}>
        <div className={`${styles.dot} ${styles.greenDark}`}></div>
      </div>
    </div>
  );
}
