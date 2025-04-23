import { Fragment } from "react";
import Icons, { Icon } from "../../../Icons/Icons";
import styles from "./SlidingBox.module.scss";
import data from "@/content/timeLine.json";

export default function SlidingBox() {
  return (
    <div className={styles.container}>
      <div className={styles.slidingBox}>
        <section className="flex flex-col gap-16">
          <div>
            <h2 className="sm-h1 py-4 color-green">{data.slidingBox.title}</h2>
            <p className="sm-p ">
              {data.slidingBox.textArea.split("/n").map((line, key) => (
                <Fragment key={key}>
                  {line}
                  <br />
                  <br />
                </Fragment>
              ))}
            </p>
            {/* <div className="flex">
              <Icon name="react" />
              <Icon name="next-dot-js" />
              <Icon name="TypeScript" />
              <Icon name="tailwindcss" />
              <Icon name="sass" />
              <Icon name="node-dot-js" />
              <Icon name="Nestjs" />
            </div> */}
            <h2 className="sm-h1 py-4 color-green">
              {data.slidingBox.subTitle}
            </h2>

            <Icons className={styles.icons} />
          </div>
        </section>
      </div>
    </div>
  );
}
