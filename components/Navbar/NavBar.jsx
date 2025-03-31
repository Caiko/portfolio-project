"use client";
import styles from "./NavBar.module.scss";
import ScrambleButton from "../ScrambleButton/ScrambleButton";

export default function Navbar() {
  return (
    <header>
      <nav aria-label="Main Navigation" className={styles.nav}>
        <ul className={styles.pages}>
          <li>
            <ScrambleButton
              content=".home"
              href="/"
              parentStyles={styles.link}
            />
          </li>
          <li>
            <ScrambleButton
              content=".about-me"
              href="/about"
              parentStyles={styles.link}
            />
          </li>
          <li>
            <ScrambleButton
              content=".projects"
              href="/projects"
              parentStyles={styles.link}
            />
          </li>
          <li>
            <ScrambleButton
              content=".hobbies"
              href="/hobbies"
              parentStyles={styles.link}
            />
          </li>
        </ul>
      </nav>
    </header>
  );
}
