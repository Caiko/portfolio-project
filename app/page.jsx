import styles from "./page.module.scss";
import Header from "@/components/Header/Header";

export default function Home() {
  return (
    <div className={styles["container"]}>
      <Header parentStyles={styles.header} />
      <div className="hero"></div>

      <div className={styles["container-1"]}>There is some content here</div>
      <div className={styles["container-2"]}>There is some content here</div>
      {/* <div className="container-3">There is some content here</div>
      <div className="container-4">There is some content here</div>
      <div className="container-5">There is some content here</div> */}
    </div>
  );
}
