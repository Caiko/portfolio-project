import Icons from "../Icons/Icons";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles["container__heading"]}>
        <h1 id="contact" className={styles["container__heading__title"]}>
          .contact
        </h1>
      </div>
      <div className={styles["container__contact"]}>
        <div className={styles["container__contact__text"]}>
          <h1>Email: marinenikolov@gmail.com</h1>
          <h1>Phone: +45 50 24 11 45</h1>
        </div>
        <div className={`${styles["container__contact__icons"]}`}>
          <Icons />
        </div>
      </div>
    </div>
  );
}
