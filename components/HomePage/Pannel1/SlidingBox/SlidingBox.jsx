import Icons from "../../../Icons/Icons";
import styles from "./SlidingBox.module.scss";
import data from "@/content/timeLine.json";
export default function SlidingBox() {
  return (
    <div className={styles.container}>
      <div className={styles.slidingBox}>
        <section className="flex flex-col gap-16">
          <div>
            <h2 className="sm-h1 py-4 color-green">{data.slidingBox.title}</h2>
            <h3 className="sm-h2">{data.slidingBox.subTitle}</h3>
            <p className="sm-p py-2">{data.slidingBox.textArea}</p>
            <Icons className={styles.icons} />
          </div>
        </section>
      </div>
    </div>
  );
}
