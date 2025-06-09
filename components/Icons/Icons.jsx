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
      <svg className={`${styles.gitIcon} `}>
        <use href="/icons/sprite.svg#icon-github"></use>
      </svg>
    </a>
  );
}

export function NextIcon() {
  return (
    <svg className={`${styles.icon} `}>
      <use href="/icons/sprite.svg#icon-next-dot-js"></use>
    </svg>
  );
}
export function NestIcon() {
  return (
    <svg className={`${styles.icon} `}>
      <use href="/icons/sprite.svg#icon-Nestjs"></use>
    </svg>
  );
}
export function SassIcon() {
  return (
    <svg className={`${styles.icon}`}>
      <use href="/icons/sprite.svg#icon-sass"></use>
    </svg>
  );
}
export function TailwindIcon() {
  return (
    <svg className={`${styles.icon}`}>
      <use href="/icons/sprite.svg#icon-tailwindcss"></use>
    </svg>
  );
}
export function ReactQueryIcon() {
  return (
    <svg className={`${styles.icon}`}>
      <use href="/icons/sprite.svg#icon-react-query"></use>
    </svg>
  );
}
export function ReactIcon() {
  return (
    <svg className={`${styles.icon} `}>
      <use href="/icons/sprite.svg#icon-react"></use>
    </svg>
  );
}

export function MenuIcon() {
  return (
    <svg className={`${styles.menu} `}>
      <use href="/icons/sprite.svg#icon-menu"></use>
    </svg>
  );
}

export function ThreejsIcon() {
  return (
    <svg className={`${styles.icon} `}>
      <use href="/icons/sprite.svg#icon-Threejs"></use>
    </svg>
  );
}

export function FirebaseIcon() {
  return (
    <svg className={`${styles.icon} `}>
      <use href="/icons/sprite.svg#icon-Firebase"></use>
    </svg>
  );
}

export function NetIcon() {
  return (
    <svg className={`${styles.icon} `}>
      <use href="/icons/sprite.svg#icon-NET"></use>
    </svg>
  );
}

export function MongoDBIcon() {
  return (
    <svg className={`${styles.icon} `}>
      <use href="/icons/sprite.svg#icon-MongoDB"></use>
    </svg>
  );
}
export function CIcon() {
  return (
    <svg className={`${styles.icon} `}>
      <use href="/icons/sprite.svg#icon-C"></use>
    </svg>
  );
}
export function SQLiteIcon() {
  return (
    <svg className={`${styles.icon} `}>
      <use href="/icons/sprite.svg#icon-SQLite"></use>
    </svg>
  );
}
export function PostgresSQLIcon() {
  return (
    <svg className={`${styles.icon} `}>
      <use href="/icons/sprite.svg#icon-PostgresSQL"></use>
    </svg>
  );
}
export function MongooseIcon() {
  return (
    <svg className={`${styles.icon} `}>
      <use href="/icons/sprite.svg#icon-Mongoosejs"></use>
    </svg>
  );
}
export function CSSIcon() {
  return (
    <svg className={`${styles.icon} `}>
      <use href="/icons/sprite.svg#icon-css3"></use>
    </svg>
  );
}
export function PostIcon() {
  return (
    <svg className={`${styles.icon} `}>
      <use href="/icons/sprite.svg#icon-PostCSS"></use>
    </svg>
  );
}
export function NodeIcon() {
  return (
    <svg className={`${styles.icon} `}>
      <use href="/icons/sprite.svg#icon-node-dot-js"></use>
    </svg>
  );
}

export function HTMLIcon() {
  return (
    <svg className={`${styles.icon} `}>
      <use href="/icons/sprite.svg#icon-html5"></use>
    </svg>
  );
}

export function GraphQLIcon() {
  return (
    <svg className={`${styles.icon} `}>
      <use href="/icons/sprite.svg#icon-GraphQL"></use>
    </svg>
  );
}

export function TypeScriptIcon() {
  return (
    <svg className={`${styles.icon} `}>
      <use href="/icons/sprite.svg#icon-TypeScript"></use>
    </svg>
  );
}

export const iconMap = {
  React: ReactIcon,
  Next: NextIcon,
  Nest: NestIcon,
  Sass: SassIcon,
  Tailwind: TailwindIcon,
  Threejs: ThreejsIcon,
  Firebase: FirebaseIcon,
  Net: NetIcon,
  MongoDB: MongoDBIcon,
  C: CIcon,
  SQLite: SQLiteIcon,
  PostgresSQL: PostgresSQLIcon,
  Mongoose: MongooseIcon,
  CSS: CSSIcon,
  Post: PostIcon,
  Node: NodeIcon,
  HTML: HTMLIcon,
  ReactQuery: ReactQueryIcon,
  GraphQL: GraphQLIcon,
  TypeScript: TypeScriptIcon,
};

export function Icon({ name, href }) {
  const iconSvg = (
    <svg className={styles.icon}>
      <use href={`/icons/sprite.svg#icon-${name}`}></use>
    </svg>
  );

  if (href) {
    return (
      <a target="_blank" rel="noopener noreferrer" href={href}>
        {iconSvg}
      </a>
    );
  }

  return iconSvg;
}
