"use client";
import React from "react";
import styles from "./ProjectCard.module.scss";
import Image from "next/image";
import { GitHubIcon } from "@/components/Icons/Icons";
import { useState } from "react";

export default function ProjectCard({
  image,
  title,
  href,
  description,
  stack = [],
}) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };
  return (
    <div
      className={`${styles.container} ${isFlipped ? styles.flipped : ""}`}
      onClick={handleCardClick}
    >
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
              <h3 className="sm-h2 color-green">{title}</h3>
              <p className="sm-p py-2">{description}</p>
            </div>
            <div className={styles["container__card-back__content__icon"]}>
              <h4>Project:</h4>
              <GitHubIcon href={href} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
