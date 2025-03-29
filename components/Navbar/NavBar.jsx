import Link from "next/link";
import styles from "./NavBar.module.scss"; // or .module.scss

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.pages}>
        <Link href="/" className={styles.link}>
          .home
        </Link>
        <Link href="/about" className={styles.link}>
          .about-me
        </Link>
        <Link href="/projects" className={styles.link}>
          .projects
        </Link>
        <Link href="/contact" className={styles.link}>
          .hobbies
        </Link>
      </div>
    </nav>
  );
}
