import Hero from "@/components/HomePage/Header/Hero/Hero";
import styles from "./page.module.scss";
import Header from "@/components/HomePage/Header/Header";
import data from "@/content/hero.json";
import SlidingBox from "@/components/HomePage/Pannel1/SlidingBox/SlidingBox";
import EventLine from "@/components/HomePage/Pannel1/EventLine/EventLine";
import ProjectsPannel from "@/components/HomePage/Pannel2/ProjectsPannel.jsx";

export default function Home() {
  return (
    <div className={styles["container"]}>
      <Header />
      <Hero
        title={data.hero.title}
        textArea={data.hero.textArea}
        subTitle={data.hero.subTitle}
      />
      <div className={styles["container__about-me"]}>
        <SlidingBox />
      </div>
      <div className={styles["container__about-me__events"]}>
        <EventLine />
      </div>
      <div className={styles["container__projects"]}>
        <ProjectsPannel />
      </div>
    </div>
  );
}
