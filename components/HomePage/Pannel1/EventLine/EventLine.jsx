import styles from "./EventLine.module.scss";
import Event from "./Event/Event.jsx";

export default function EventLine() {
  return (
    <div className={styles.container}>
      <Event
        imageSrc="/eventLogos/easv.webp"
        heading="Event 1"
        description="Description of Event 1"
        period="2023-01-01 to 2023-01-02"
      />
    </div>
  );
}
