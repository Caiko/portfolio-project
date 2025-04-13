import Image from "next/image";
import styles from "./Event.module.scss";

export default function Event({ imageSrc, heading, description, period }) {
  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <Image src={imageSrc} alt={heading} className={styles.image} fill />
      </div>

      <h3 className={styles.heading}>{heading}</h3>
      <h4 className={styles.period}>period</h4>
      <p className={styles.description}>{description}</p>
    </div>
  );
}
