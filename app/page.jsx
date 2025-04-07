import Hero from "@/components/Hero/Hero";
import styles from "./page.module.scss";
import Header from "@/components/Header/Header";
import data from "@/content/data.json";
import SlidingBox from "@/components/SlidingBox/SlidingBox";

export default function Home() {
  return (
    <div className={styles["container"]}>
      <Header />
      <Hero
        title={data.hero.title}
        textArea={data.hero.textArea}
        subTitle={data.hero.subTitle}
      ></Hero>
      <div className={styles["container-1"]}>
        <SlidingBox className={styles["container-1-slidebox"]}></SlidingBox>
        <div className={styles["container-1-content"]}>
          There is some content here
        </div>
      </div>
      <div className={styles["container-2"]}></div>

      {/* <div className="container-3">There is some content here</div>
      <div className="container-4">There is some content here</div>
      <div className="container-5">There is some content here</div> */}
    </div>
  );
}
