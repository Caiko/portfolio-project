import Image from "next/image";
import styles from "./Hero.module.scss";
import meImage from "@/public/m2.png";

export default function Hero({ title, textArea, subTitle }) {
  return (
    <div className={`${styles["hero-container"]}`}>
      <div className={styles["hero-container__hero-text-container"]}>
        <section
          aria-labelledby="intro-heading"
          className={styles["hero-container__hero-text-container__section"]}
        >
          <header
            className={
              styles["hero-container__hero-text-container__section__header"]
            }
          >
            <h1 id="intro-heading" className="h1">
              {title}
            </h1>
            <h2 className="h2">{subTitle}</h2>
            <p className="p">{textArea}</p>
            <button className="btn">Contant/Cv</button>
          </header>
        </section>
      </div>
      <div className={styles["hero-container__hero-image-container"]}>
        <Image
          src={meImage}
          alt="Image of Marin Nikolov"
          priority={true} // Preloads the image for better performance
          className={styles["hero-container__hero-image-container__image"]}
          fill
        />
      </div>
    </div>
  );
}
