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
        />
        <ProjectCard
          title={"Georgi"}
          description={"Atanasov"}
          image={"/projectCards/pokemonBanner.png"}
        />

        <ProjectCard
          title={"Georgi"}
          description={"Atanasov"}
          image={"/projectCards/webshopBanner.png"}
          git
        />
        <ProjectCard
          title={"Georgi"}
          description={"Atanasov"}
          image={"/projectCards/pmBanner.png"}
        />
        <ProjectCard
          title={"Georgi"}
          description={"Atanasov"}
          image={"/projectCards/timerBanner.png"}
        />
        <ProjectCard
          title={"Georgi"}
          description={"Atanasov"}
          image={"/projectCards/trilloBanner.png"}
        />
        <ProjectCard
          title={"Georgi"}
          description={"Atanasov"}
          image={"/projectCards/tictactoeBanner.png"}
        />
      </div>
    </div>
  );
}
