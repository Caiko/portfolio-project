import styles from "./HobbiesPannel.module.scss";

export default function HobbiesPannel() {
  return (
    <div className={styles.container}>
      <div className={styles["container__heading"]}>
        <h1 className={styles["container__heading__title"]}>.hobbies</h1>
      </div>
      <div className={styles["container__hobbies"]}></div>
    </div>
  );
}
