import Icons from "../Icons/Icons";
import styles from "./SlidingBox.module.scss";
export default function SlidingBox() {
  return (
    <div className={styles.container}>
      <div className={styles.slidingBox}>
        <section className="flex flex-col gap-16">
          <div>
            <h2>Bat Caiko</h2>
            <h3>Web developer</h3>
            <p>
              My expertise spans over software development, data analysis, and
            </p>
            <Icons />
          </div>
        </section>
      </div>
    </div>
  );
}
