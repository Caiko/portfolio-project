"use client";
import styles from "./NavBar.module.scss";
import ScrambleButton from "../ScrambleButton/ScrambleButton";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header>
      <nav
        aria-label="Main Navigation"
        className={`${styles.nav} ${isScrolled ? styles.scrolled : ""} `}
      >
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
