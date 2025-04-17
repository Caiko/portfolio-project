import Image from "next/image";
import styles from "./Event.module.scss";

export default function Event({ imageSrc, heading, description, period }) {
  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <Image src={imageSrc} alt={heading} className={styles.image} fill />
      </div>
      <div className={styles["container__text"]}>
        <h3 className={`${styles.heading} sm-h1`}>{heading}</h3>
        <h4 className={`${styles.period} sm-h2`}>{period}</h4>
        <p className={`${styles.description} sm-p`}>{description}</p>
      </div>
    </div>
  );
}
