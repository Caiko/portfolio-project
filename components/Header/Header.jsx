import styles from "./Header.module.scss";
import Image from "next/image";
import cityImage from "@/public/city.jpg"; // Adjust the path as necessary

export default function Header({ parentStyles, title, textArea }) {
  return (
    <div className={`${styles.container} ${parentStyles}`}>
      <div className={styles["header__1"]}>
        <Image
          src={cityImage}
          alt="City Background"
          layout="fill" // Filling the parent container
          objectFit="cover" // Aspect ration and cropping
          quality={50} // Controlls compression - 0-100, 0 = worst quality smaller file size, 100 = best quality, largest file size, I use blur so np quality needed
          priority={true} // Preloads the image for better performance
          className={styles["header__1-inner"]}
        />
      </div>
      <div className={styles["header__2"]}>twobox</div>
      <div className={styles["header__3"]}>threebox</div>
    </div>
  );
}

// <div className={styles["header__1-inner"]}>
