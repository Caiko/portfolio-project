import ProjectCard from "./IndividualProject/ProjectCard";
import styles from "./ProjectsPannel.module.scss";
import { iconMap } from "@/components/Icons/Icons";

export default function ProjectsPannel() {
  return (
    <div className={styles.container}>
      <div className={styles["container__heading"]}>
        <h1 className={styles["container__heading__title"]}>.projects</h1>
      </div>
      <div className={styles["container__projects"]}>
        <ProjectCard
          title={"Georgi"}
          description={"Atanasov"}
          image={"/projectCards/foodiesBanner.png"}
          stack={[
            iconMap["React"],
            iconMap["Next"],
            iconMap["Sass"],
            iconMap["Tailwind"],
          ]}
        />
        <ProjectCard
          title={"Georgi"}
          description={"Atanasov"}
          image={"/projectCards/foodiesBanner.png"}
          stack={[iconMap["React"], iconMap["Nest"], iconMap["Sass"]]}
        />
        <ProjectCard
          title={"Georgi"}
          description={"Atanasov"}
          image={"/projectCards/foodiesBanner.png"}
        />
        <ProjectCard
          title={"Georgi"}
          description={"Atanasov"}
          image={"/projectCards/foodiesBanner.png"}
        />
        <ProjectCard
          title={"Georgi"}
          description={"Atanasov"}
          image={"/projectCards/foodiesBanner.png"}
        />
      </div>
    </div>
  );
}
