import styles from "./Icons.module.scss";

export default function Icons() {
  return (
    <div className={styles.container}>
      <svg className={styles.icon}>
        <use href="/icons/sprite.svg#icon-github"></use>
      </svg>
      <svg className={styles.icon}>
        <use href="/icons/sprite.svg#icon-linkedin"></use>
      </svg>
      <svg className={styles.icon}>
        <use href="/icons/sprite.svg#icon-instagram"></use>
      </svg>
      <svg className={styles.icon}>
        <use href="/icons/sprite.svg#icon-mail"></use>
      </svg>
    </div>
  );
}
