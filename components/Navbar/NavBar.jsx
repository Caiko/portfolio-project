import Link from "next/link";
import styles from "./NavBar.module.scss"; // or .module.scss

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.pages}>
        <Link href="/" className={styles.link}>
          Home
        </Link>
        <Link href="/about" className={styles.link}>
          About Me
        </Link>
        <Link href="/projects" className={styles.link}>
          Projects
        </Link>
        <Link href="/contact" className={styles.link}>
          Contact
        </Link>
      </div>
    </nav>
  );
}
