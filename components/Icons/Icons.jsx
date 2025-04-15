// https://tabler.io/icons use this for the icons next tinme
import styles from "./Icons.module.scss";

export default function Icons() {
  return (
    <div className={styles.container}>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/Caiko"
      >
        <svg className={styles.icon}>
          <use href="/icons/sprite.svg#icon-github"></use>
        </svg>
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/marin-nikolov-22b64b163/"
      >
        <svg className={styles.icon}>
          <use href="/icons/sprite.svg#icon-linkedin"></use>
        </svg>
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.instagram.com/marinenikolov/"
      >
        <svg className={styles.icon}>
          <use href="/icons/sprite.svg#icon-instagram"></use>
        </svg>
      </a>
      <a href="mailto:marinenikolov@gmail.com" aria-label="Send me an email">
        <svg className={styles.icon}>
          <use href="/icons/sprite.svg#icon-mail"></use>
        </svg>
      </a>
    </div>
  );
}

//////// For later use /////////////
export function GitHubIcon({ href }) {
  return (
    <a target="_blank" rel="noopener noreferrer" href={href}>
      <svg className={`${styles.icon} `}>
        <use href="/icons/sprite.svg#icon-github"></use>
      </svg>
    </a>
  );
}

export function NextIcon() {
  return (
    <a target="_blank" rel="noopener noreferrer">
      <svg className={`${styles.icon} `}>
        <use href="/icons/sprite.svg#icon-next-dot-js"></use>
      </svg>
    </a>
  );
}
export function NestIcon() {
  return (
    <a target="_blank" rel="noopener noreferrer">
      <svg className={`${styles.icon} `}>
        <use href="/icons/sprite.svg#icon-Nestjs"></use>
      </svg>
    </a>
  );
}
export function SassIcon() {
  return (
    <a target="_blank" rel="noopener noreferrer">
      <svg className={`${styles.icon} `}>
        <use href="/icons/sprite.svg#icon-sass"></use>
      </svg>
    </a>
  );
}
export function TailwindIcon() {
  return (
    <a target="_blank" rel="noopener noreferrer">
      <svg className={`${styles.icon} `}>
        <use href="/icons/sprite.svg#icon-tailwindcss"></use>
      </svg>
    </a>
  );
}
export function ReactIcon() {
  return (
    <svg className={`${styles.icon} `}>
      <use href="/icons/sprite.svg#icon-react"></use>
    </svg>
  );
}

export const iconMap = {
  React: ReactIcon,
  Next: NextIcon,
  Nest: NestIcon,
  Sass: SassIcon,
  Tailwind: TailwindIcon,
};
