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

// //////// For later use /////////////
// export function gitHubIcon() {
//   return (
//     <a
//       target="_blank"
//       rel="noopener noreferrer"
//       href="https://github.com/Caiko"
//     >
//       <svg className={styles.icon}>
//         <use href="/icons/sprite.svg#icon-github"></use>
//       </svg>
//     </a>
//   );
// }
