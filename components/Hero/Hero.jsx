import Image from "next/image";
import styles from "./Hero.module.scss";

export default function Hero({ title, textArea, partentStyles }) {
  return (
    <div className={`${styles["hero-container"]} ${partentStyles}`}>
      <section aria-labelledby="intro-heading">
        <header>
          <h1 id="intro-heading">{title}</h1>
          <p>{textArea}</p>
        </header>
      </section>
      {/* <Image /> */}
    </div>
  );
}
