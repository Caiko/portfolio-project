import styles from "./ContactPannel.module.scss";

export default function ContactPannel() {
  return (
    <div className={styles.container}>
      <div className={styles["container__heading"]}>
        <h1 className={styles["container__heading__title"]}>.contact</h1>
      </div>
      <div className={styles["container__hobbies"]}></div>
    </div>
  );
}
