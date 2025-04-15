import React from "react";
import styles from "./ProjectCard.module.scss";
import Image from "next/image";
import { GitHubIcon } from "@/components/Icons/Icons";

export default function ProjectCard({ image, title, description }) {
  console.log("Image URL:", image);
  return (
    <div className={styles.container}>
      <div className={styles["container__card"]}>
        {/* Front side*/}
        <div className={styles["container__card-front"]}>
          <Image
            src={image}
            alt={title}
            className={styles["container__card-front-image"]}
            fill
          />
        </div>

        {/* Back side*/}
        <div className={styles["container__card-back"]}>
          <div className={styles["container__card-back__stack"]}>
            <h4>Stack:</h4>
          </div>
          <div className={styles["container__card-back__text"]}>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
          <div className={styles["container__card-back__icon"]}>
            <h4>Visit:</h4>
            <GitHubIcon />
          </div>
        </div>
      </div>
    </div>
  );
}
