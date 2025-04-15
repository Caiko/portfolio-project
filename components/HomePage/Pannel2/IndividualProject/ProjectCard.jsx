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
          <h3>{title}</h3>
          <p>{description}</p>
          <GitHubIcon />
        </div>
      </div>
    </div>
  );
}
