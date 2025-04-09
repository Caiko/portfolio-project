import Image from "next/image";
import styles from "./Event.module.scss";

export default function Event(imageSrc, heading, description) {
  return (
    <div className={styles.card}>
      <Image src={imageSrc} alt={heading} className={styles.image} />
      <h3 className={styles.heading}>{heading}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
}
