import Hero from "@/components/HomePage/Header/Hero/Hero";
import styles from "./page.module.scss";
import Header from "@/components/HomePage/Header/Header";
import data from "@/content/data.json";
import SlidingBox from "@/components/HomePage/Pannel1/SlidingBox/SlidingBox";
import TimeLine from "@/components/HomePage/Pannel1/TimeLine/TimeLine";
import EventLine from "@/components/HomePage/Pannel1/EventLine/EventLine";

export default function Home() {
  return (
    <div className={styles["container"]}>
      <Header />
      <Hero
        title={data.hero.title}
        textArea={data.hero.textArea}
        subTitle={data.hero.subTitle}
      ></Hero>
      <div className={styles["about-me__slidebox"]}>
        <SlidingBox />
      </div>
      <div className={styles["about-me__timeline"]}></div>
      <div className={styles["about-me__events"]}>
        <EventLine />
      </div>
      <div className={styles["container-2"]}></div>

      {/* <div className="container-3">There is some content here</div>
      <div className="container-4">There is some content here</div>
      <div className="container-5">There is some content here</div> */}
    </div>
  );

  // <div className={styles["about-me__events"]}>
  //       <EventLine />
  //     </div>
}
