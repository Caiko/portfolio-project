"use client";
import ProjectCard from "./IndividualProject/ProjectCard";
import styles from "./ProjectsPannel.module.scss";
import { iconMap } from "@/components/Icons/Icons";
import projectsData from "@/content/projectsData.json";

export default function ProjectsPannel() {
  return (
    <div className={styles.container}>
      <div className={styles["container__heading"]}>
        <h1 id="projects" className={styles["container__heading__title"]}>
          .projects
        </h1>
      </div>
      <div className={styles["container__projects"]}>
        <ProjectCard
          title={projectsData.rnm.title}
          gitHref={projectsData.rnm.gitHref}
          href={projectsData.rnm.href}
          description={projectsData.rnm.description}
          image={"/projectCards/rnmBanner.webp"}
          stack={[
            iconMap["React"],
            iconMap["TypeScript"],
            iconMap["ReactQuery"],
            iconMap["GraphQL"],
          ]}
        />
        <ProjectCard
          title={projectsData.holidayPlacepicker.title}
          description={projectsData.holidayPlacepicker.description}
          image={"/projectCards/holidayPlacePickerBanner.webp"}
          stack={[iconMap["React"], iconMap["TypeScript"]]}
          gitHref={projectsData.holidayPlacepicker.gitHref}
          href={projectsData.holidayPlacepicker.href}
        />
        <ProjectCard
          title={projectsData.reactMUI.title}
          description={projectsData.reactMUI.description}
          image={"/projectCards/reactMUIBanner.webp"}
          stack={[iconMap["React"], iconMap["Material"]]}
          gitHref={projectsData.reactMUI.gitHref}
          href={projectsData.reactMUI.href}
        />
        <ProjectCard
          title={projectsData.project1.title}
          description={projectsData.project1.description}
          image={"/projectCards/foodiesBanner.webp"}
          stack={[iconMap["Next"], iconMap["Tailwind"], iconMap["SQLite"]]}
          gitHref={projectsData.project1.gitHref}
          href={projectsData.project1.href}
        />
        <ProjectCard
          title={projectsData.project2.title}
          description={projectsData.project2.description}
          image={"/projectCards/dndBanner.webp"}
          stack={[iconMap["C"], iconMap["Net"], iconMap["SQLite"]]}
          gitHref={projectsData.project2.gitHref}
          href={projectsData.project2.href}
        />

        <ProjectCard
          title={projectsData.project3.title}
          description={projectsData.project3.description}
          image={"/projectCards/nexterBanner.webp"}
          stack={[iconMap["Sass"]]}
          gitHref={projectsData.project3.gitHref}
          href={projectsData.project3.href}
        />
        <ProjectCard
          title={projectsData.project4.title}
          description={projectsData.project4.description}
          image={"/projectCards/pokemonBanner.webp"}
          stack={[iconMap["React"], iconMap["CSS"]]}
          gitHref={projectsData.project4.gitHref}
          href={projectsData.project4.href}
        />

        <ProjectCard
          title={projectsData.project5.title}
          description={projectsData.project5.description}
          image={"/projectCards/webshopBanner.webp"}
          stack={[iconMap["React"], iconMap["CSS"]]}
          gitHref={projectsData.project5.gitHref}
          href={projectsData.project5.href}
        />
        <ProjectCard
          title={projectsData.project7.title}
          description={projectsData.project7.description}
          image={"/projectCards/timerBanner.webp"}
          stack={[iconMap["React"], iconMap["CSS"]]}
          gitHref={projectsData.project7.gitHref}
          href={projectsData.project7.href}
        />
        <ProjectCard
          title={projectsData.project6.title}
          description={projectsData.project6.description}
          image={"/projectCards/pmBanner.webp"}
          stack={[iconMap["React"], iconMap["Tailwind"]]}
          gitHref={projectsData.project6.gitHref}
          href={projectsData.project6.href}
        />
        <ProjectCard
          title={projectsData.project8.title}
          description={projectsData.project8.description}
          image={"/projectCards/trilloBanner.webp"}
          stack={[iconMap["Sass"]]}
          gitHref={projectsData.project8.gitHref}
          href={projectsData.project8.href}
        />
        <ProjectCard
          title={projectsData.project9.title}
          description={projectsData.project9.description}
          image={"/projectCards/tictactoeBanner.webp"}
          stack={[iconMap["React"], iconMap["CSS"]]}
          gitHref={projectsData.project9.gitHref}
          href={projectsData.project9.href}
        />
      </div>
    </div>
  );
}
