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
          stack={[iconMap["Next"], iconMap["Tailwind"], iconMap["SQLite"]]}
        />
        <ProjectCard
          title={"Georgi"}
          description={"Atanasov"}
          image={"/projectCards/dndBanner.png"}
          stack={[iconMap["C"], iconMap["Net"], iconMap["SQLite"]]}
        />

        <ProjectCard
          title={"Georgi"}
          description={"Atanasov"}
          image={"/projectCards/nexterBanner.png"}
          stack={[
            iconMap["Sass"],
            iconMap["HTML"],
            iconMap["CSS"],
            iconMap["Post"],
          ]}
        />
        <ProjectCard
          title={"Georgi"}
          description={"Atanasov"}
          image={"/projectCards/pokemonBanner.png"}
          stack={[iconMap["React"], iconMap["Node"]]}
        />

        <ProjectCard
          title={"Georgi"}
          description={"Atanasov"}
          image={"/projectCards/webshopBanner.png"}
          stack={[iconMap["React"], iconMap["CSS"]]}
        />
        <ProjectCard
          title={"Georgi"}
          description={"Atanasov"}
          image={"/projectCards/pmBanner.png"}
          stack={[iconMap["React"], iconMap["Tailwind"]]}
        />
        <ProjectCard
          title={"Georgi"}
          description={"Atanasov"}
          image={"/projectCards/timerBanner.png"}
          stack={[iconMap["React"], iconMap["CSS"]]}
        />
        <ProjectCard
          title={"Georgi"}
          description={"Atanasov"}
          image={"/projectCards/trilloBanner.png"}
          stack={[
            iconMap["Sass"],
            iconMap["CSS"],
            iconMap["HTML"],
            iconMap["Post"],
          ]}
        />
        <ProjectCard
          title={"Georgi"}
          description={"Atanasov"}
          image={"/projectCards/tictactoeBanner.png"}
          stack={[iconMap["React"], iconMap["CSS"]]}
        />
      </div>
    </div>
  );
}
