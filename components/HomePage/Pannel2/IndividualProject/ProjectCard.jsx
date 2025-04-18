import React from "react";
import styles from "./ProjectCard.module.scss";
import Image from "next/image";
import { GitHubIcon } from "@/components/Icons/Icons";

export default function ProjectCard({ image, title, description, stack = [] }) {
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
            {stack.map((IconComponent, idx) => (
              <IconComponent key={idx} />
            ))}
          </div>
          <div className={styles["container__card-back__content"]}>
            <div className={styles["container__card-back__content__text"]}>
              <h3 className="sm-h2">{title}</h3>
              <p className="sm-p">{description}</p>
            </div>
            <div className={styles["container__card-back__content__icon"]}>
              <h4>Project:</h4>
              <GitHubIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
