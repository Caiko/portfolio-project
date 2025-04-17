import styles from "./Header.module.scss";
import Image from "next/image";
import cityImage from "@/public/city.jpg"; // Adjust the path as necessary
import VantaBackground from "./VantaBackground/VantaBackground";

export default function Header({ parentStyles, title, textArea }) {
  return (
    <div className={`${styles.container} ${parentStyles}`}>
      <div className={styles["header__1"]}>
        <VantaBackground />
        {/* <Image
          src={cityImage}
          alt="City Background"
          priority={true} // Preloads the image for better performance
          className={styles["header__1-inner"]}
        /> */}
      </div>
      <div className={styles["header__2"]}></div>
      <div className={styles["header__3"]}></div>
    </div>
  );
}
