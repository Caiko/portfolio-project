import styles from "./EventLine.module.scss";
import Event from "./Event/Event.jsx";

export default function EventLine() {
  return (
    <div className={styles.container}>
      <h1 className={styles["container__about-me-title"]}>.about-me</h1>
      <div className={styles["container__events"]}>
        <Event
          imageSrc="/eventLogos/easv.webp"
          heading="Event 1"
          description="Description of Event 1"
          period="2023-01-01 to 2023-01-02"
        />
        <Event
          imageSrc="/eventLogos/easv.webp"
          heading="Event 1"
          description="Description of Event 1"
          period="2023-01-01 to 2023-01-02"
        />
        <Event
          imageSrc="/eventLogos/easv.webp"
          heading="Event 1"
          description="Description of Event 1"
          period="2023-01-01 to 2023-01-02"
        />
        <Event
          imageSrc="/eventLogos/easv.webp"
          heading="Event 1"
          description="Description of Event 1"
          period="2023-01-01 to 2023-01-02"
        />
        <Event
          imageSrc="/eventLogos/easv.webp"
          heading="Event 1"
          description="Description of Event 1"
          period="2023-01-01 to 2023-01-02"
        />
        <Event
          imageSrc="/eventLogos/easv.webp"
          heading="Event 1"
          description="Description of Event 1"
          period="2023-01-01 to 2023-01-02"
        />
      </div>
    </div>
  );
}
