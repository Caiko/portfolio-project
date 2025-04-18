import styles from "./EventLine.module.scss";
import Event from "./Event/Event.jsx";
import TimeLine from "../TimeLine/TimeLine";
import easvLogo from "@/public//eventLogos/easv.webp";
import viaLogo from "@/public/eventLogos/via.png";
import linkBoxLogo from "@/public/eventLogos/linkBox.png";
import timeLine from "@/content/timeLine.json";

export default function EventLine() {
  return (
    <div className={styles.container}>
      <h1 className={styles["container__about-me-title"]}>.about-me</h1>
      <TimeLine />
      <div className={styles["container__events"]}>
        <Event
          imageSrc={linkBoxLogo}
          heading={timeLine.event1.heading}
          description={timeLine.event1.description}
          period={timeLine.event1.period}
        />
        <Event
          imageSrc={viaLogo}
          heading={timeLine.event2.heading}
          description={timeLine.event2.description}
          period={timeLine.event2.period}
        />

        <Event
          imageSrc={linkBoxLogo}
          heading={timeLine.event3.heading}
          description={timeLine.event3.description}
          period={timeLine.event3.period}
        />
        <Event
          imageSrc={easvLogo}
          heading={timeLine.event4.heading}
          description={timeLine.event4.description}
          period={timeLine.event4.period}
        />
      </div>
    </div>
  );
}
