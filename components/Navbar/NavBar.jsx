import Link from "next/link";
import styles from "./NavBar.module.scss"; // or .module.scss

export default function Navbar() {
  return (
    <header>
      <nav aria-label="Main Navigation" className={styles.nav}>
        <ul className={styles.pages}>
          <li>
            <Link href="/" className={styles.link}>
              .home
            </Link>
          </li>
          <li>
            <Link href="/about" className={styles.link}>
              .about-me
            </Link>
          </li>
          <li>
            <Link href="/projects" className={styles.link}>
              .projects
            </Link>
          </li>
          <li>
            <Link href="/contact" className={styles.link}>
              .hobbies
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
