import styles from "./ProjectsPannel.module.scss";

export default function ProjectsPannel() {
  return (
    <div className={styles.container}>
      <div className={styles["container__heading"]}>
        <h1 className={styles["container__heading__title"]}>.projects</h1>
      </div>
      <div className={styles["container__projects"]}></div>
    </div>
  );
}
