import styles from "./EventLine.module.scss";
import Event from "./Event/Event.jsx";
import timeLine from "@/content/timeLine.json";
import data from "@/content/timeLine.json";
import Icons, { Icon } from "@/components/Icons/Icons.jsx";

export default function EventLine() {
  return (
    <div className={styles.container}>
      <h1 id="about-me" className={styles["container__about-me-title"]}>
        .about-me
      </h1>

      <div className={styles.skills}>
        <h2 className="sm-h1 py-4 color-green">{data.slidingBox.title}</h2>
        <div className="flex">
          <Icon name="TypeScript" />
          <Icon name="react" />
          <Icon name="next-dot-js" />
          <Icon name="tailwindcss" />
          <Icon name="sass" />
          <Icon name="materialui-original" />
          <Icon name="react-query" />
          <Icon name="GraphQL" />
          <Icon name="jest-plain" />
          <Icon name="githubactions-original" />
        </div>
        <h2 className="sm-h1 py-4 color-green">{data.slidingBox.subTitle}</h2>
        <Icons className={styles.icons} />
      </div>

      <div className={styles["container__events"]}>
        <Event
          imageSrc={"/eventLogos/bestseller.webp"}
          heading={timeLine.event5.heading}
          description={timeLine.event5.description}
          period={timeLine.event5.period}
        />
        <Event
          imageSrc={"/eventLogos/via.webp"}
          heading={timeLine.event2.heading}
          description={timeLine.event2.description}
          period={timeLine.event2.period}
        />
        <Event
          imageSrc={"/eventLogos/linkbox.webp"}
          heading={timeLine.event1.heading}
          description={timeLine.event1.description}
          period={timeLine.event1.period}
        />
        <Event
          imageSrc={"/eventLogos/easv.webp"}
          heading={timeLine.event4.heading}
          description={timeLine.event4.description}
          period={timeLine.event4.period}
        />
        <Event
          imageSrc={"/eventLogos/linkbox.webp"}
          heading={timeLine.event3.heading}
          description={timeLine.event3.description}
          period={timeLine.event3.period}
        />
      </div>
    </div>
  );
}
