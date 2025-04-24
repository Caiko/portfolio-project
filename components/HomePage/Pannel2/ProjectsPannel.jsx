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
          title={projectsData.project1.title}
          description={projectsData.project1.description}
          image={"/projectCards/foodiesBanner.png"}
          stack={[iconMap["Next"], iconMap["Tailwind"], iconMap["SQLite"]]}
          href={projectsData.project1.href}
        />
        <ProjectCard
          title={projectsData.project2.title}
          description={projectsData.project2.description}
          image={"/projectCards/dndBanner.png"}
          stack={[iconMap["C"], iconMap["Net"], iconMap["SQLite"]]}
          href={projectsData.project2.href}
        />

        <ProjectCard
          title={projectsData.project3.title}
          description={projectsData.project3.description}
          image={"/projectCards/nexterBanner.png"}
          stack={[iconMap["Sass"]]}
          href={projectsData.project3.href}
        />
        <ProjectCard
          title={projectsData.project4.title}
          description={projectsData.project4.description}
          image={"/projectCards/pokemonBanner.png"}
          stack={[iconMap["React"], iconMap["CSS"]]}
          href={projectsData.project4.href}
        />

        <ProjectCard
          title={projectsData.project5.title}
          description={projectsData.project5.description}
          image={"/projectCards/webshopBanner.png"}
          stack={[iconMap["React"], iconMap["CSS"]]}
          href={projectsData.project5.href}
        />
        <ProjectCard
          title={projectsData.project6.title}
          description={projectsData.project6.description}
          image={"/projectCards/pmBanner.png"}
          stack={[iconMap["React"], iconMap["Tailwind"]]}
          href={projectsData.project6.href}
        />
        <ProjectCard
          title={projectsData.project7.title}
          description={projectsData.project7.description}
          image={"/projectCards/timerBanner.png"}
          stack={[iconMap["React"], iconMap["CSS"]]}
          href={projectsData.project7.href}
        />
        <ProjectCard
          title={projectsData.project8.title}
          description={projectsData.project8.description}
          image={"/projectCards/trilloBanner.png"}
          stack={[iconMap["Sass"]]}
          href={projectsData.project8.href}
        />
        <ProjectCard
          title={projectsData.project9.title}
          description={projectsData.project9.description}
          image={"/projectCards/tictactoeBanner.png"}
          stack={[iconMap["React"], iconMap["CSS"]]}
          href={projectsData.project9.href}
        />
      </div>
    </div>
  );
}
