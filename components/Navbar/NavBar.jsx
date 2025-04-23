"use client";
import styles from "./NavBar.module.scss";
import ScrambleButton from "../ScrambleButton/ScrambleButton";
import { MenuIcon } from "../Icons/Icons";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

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
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsMobile(!isMobile);
    console.log("Menu toggled");
    console.log(isMobile);
  };

  return (
    <header>
      <nav
        aria-label="Main Navigation"
        className={`${styles.nav} ${isScrolled ? styles.scrolled : ""} ${
          isMobile ? styles["nav__open-bg"] : ""
        } `}
      >
        <div className={styles["menu-icon"]} onClick={toggleMenu}>
          <MenuIcon />
        </div>
        <ul className={`${styles.pages} ${isMobile ? styles["open"] : ""}`}>
          <li>
            <ScrambleButton
              content=".home"
              href="/"
              parentStyles={`${styles.link} ${
                isScrolled && styles["link__scrolled"]
              }`}
            />
          </li>
          <li>
            <ScrambleButton
              content=".about-me"
              href="/about"
              parentStyles={`${styles.link} ${
                isScrolled && styles["link__scrolled"]
              }`}
            />
          </li>
          <li>
            <ScrambleButton
              content=".projects"
              href="/projects"
              parentStyles={`${styles.link} ${
                isScrolled && styles["link__scrolled"]
              }`}
            />
          </li>
          <li>
            <ScrambleButton
              content=".contact"
              href="/contact"
              parentStyles={`${styles.link} ${
                isScrolled && styles["link__scrolled"]
              }`}
            />
          </li>
        </ul>
      </nav>
    </header>
  );
}
