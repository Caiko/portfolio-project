"use client";
import React from "react";
import styles from "./ProjectCard.module.scss";
import Image from "next/image";
import { GitHubIcon, SphereIcon } from "@/components/Icons/Icons";
import { useState } from "react";

export default function ProjectCard({
  image,
  title,
  gitHref,
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
              <p className="sm-p py-2 color-green">{description}</p>
            </div>
            <div className="flex flex-row justify-end">
              {gitHref && (
                <div className={styles["container__card-back__content__icon"]}>
                  <GitHubIcon href={gitHref} />
                </div>
              )}
              {href && (
                <div className={styles["container__card-back__content__icon"]}>
                  <SphereIcon href={href} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
