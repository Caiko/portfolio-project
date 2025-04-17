import Icons from "../../../Icons/Icons";
import styles from "./SlidingBox.module.scss";
import data from "@/content/timeLine.json";
export default function SlidingBox() {
  return (
    <div className={styles.container}>
      <div className={styles.slidingBox}>
        <section className="flex flex-col gap-16">
          <div>
            <h2>{data.slidingBox.title}</h2>
            <h3>{data.slidingBox.subTitle}</h3>
            <p>{data.slidingBox.textArea}</p>
            <Icons />
          </div>
        </section>
      </div>
    </div>
  );
}
