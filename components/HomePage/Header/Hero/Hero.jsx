import Image from "next/image";
import styles from "./Hero.module.scss";

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
              {title} <span className="color-green">Marin!</span>
            </h1>
            <h2 className="h2 ">
              {subTitle} <span className="color-green">Web Developer!</span>
            </h2>
            <p className="p">{textArea}</p>
            <a
              className="btn"
              href="/cv/marin-nikolov-cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              View CV
            </a>
          </header>
        </section>
      </div>
      <div className={styles["hero-container__hero-image-container"]}>
        <Image
          // src="/marinnikolov.png"
          src="/marin.png"
          alt="Image of Marin Nikolov"
          priority={true} // Preloads the image for better performance
          className={styles["hero-container__hero-image-container__image"]}
          fill
        />
      </div>
    </div>
  );
}
