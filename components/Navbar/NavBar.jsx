"use client";
import Link from "next/link";
import styles from "./NavBar.module.scss"; // or .module.scss
import ScrambleButton from "../ScrambleButton/ScrambleButton";

export default function Navbar() {
  return (
    <header>
      <nav aria-label="Main Navigation" className={styles.nav}>
        <ul className={styles.pages}>
          <li>
            <ScrambleButton content=".home" parentStyles={styles.link}>
              <Link href="/">.home</Link>
            </ScrambleButton>
          </li>
          <li>
            <ScrambleButton content=".about-me" parentStyles={styles.link}>
              <Link href="/about" className={styles.link}></Link>
            </ScrambleButton>
          </li>
          <li>
            <ScrambleButton content=".projects" parentStyles={styles.link}>
              <Link href="/projects" className={styles.link}></Link>
            </ScrambleButton>
          </li>
          <li>
            <ScrambleButton content=".hobbies" parentStyles={styles.link}>
              <Link href="/contact" className={styles.link}></Link>
            </ScrambleButton>
          </li>
        </ul>
      </nav>
    </header>
  );
}
