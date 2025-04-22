import styles from "./EventLine.module.scss";
import Event from "./Event/Event.jsx";
import timeLine from "@/content/timeLine.json";

export default function EventLine() {
  return (
    <div className={styles.container}>
      <h1 className={styles["container__about-me-title"]}>.about-me</h1>

      <div className={styles["container__events"]}>
        <Event
          imageSrc={"/eventLogos/linkBox.png"}
          heading={timeLine.event1.heading}
          description={timeLine.event1.description}
          period={timeLine.event1.period}
        />
        <Event
          imageSrc={"/eventLogos/via.png"}
          heading={timeLine.event2.heading}
          description={timeLine.event2.description}
          period={timeLine.event2.period}
        />

        <Event
          imageSrc={"/eventLogos/linkBox.png"}
          heading={timeLine.event3.heading}
          description={timeLine.event3.description}
          period={timeLine.event3.period}
        />
        <Event
          imageSrc={"/eventLogos/easv.webp"}
          heading={timeLine.event4.heading}
          description={timeLine.event4.description}
          period={timeLine.event4.period}
        />
      </div>
    </div>
  );
}
