import Icons from "../Icons/Icons";
import styles from "./SlidingBox.module.scss";
export default function SlidingBox() {
  return (
    <div className={styles.container}>
      <div className={styles.slidingBox}>
        <section className="flex flex-col gap-16">
          <div>
            <h2>Bat Caiko</h2>
            <h3>Web developer</h3>
            <p>
              My expertise spans over software development, data analysis, and
            </p>
            <Icons></Icons>

            {/* Navigation Links
            <nav className="mt-7 flex flex-col space-y-4 text-gray-400 text-sm">
              <a
                href="/#experience"
                className="hover:text-white-dark hover:underline underline-offset-8"
              >
                EXPERIENCE
              </a>
              <a
                href="/#projects"
                className="hover:text-white-dark hover:underline underline-offset-8"
              >
                PROJECTS
              </a>
            </nav> */}
          </div>

          {/* Social Icons
          <div className="mt-8 flex text-white-dark">
            <ul className="flex gap-4">
              <li>
                <a
                  href="mailto:contact@dimitarterziev.com"
                  target="_blank"
                  className="hover:underline underline-offset-8 flex items-center gap-2"
                >
                  <IconMail
                    stroke={2}
                    className="min-w-6 hover:text-orange-dark"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/dimitar-terziev/"
                  target="_blank"
                  className="hover:underline underline-offset-8 flex items-center gap-2"
                >
                  <IconBrandLinkedin
                    stroke={2}
                    className="min-w-6 hover:text-orange-dark"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/terzievdimitar"
                  target="_blank"
                  className="hover:underline underline-offset-8 flex items-center gap-2"
                >
                  <IconBrandGithub
                    stroke={2}
                    className="min-w-6 hover:text-orange-dark"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/DimitarTerziev_"
                  target="_blank"
                  className="hover:underline underline-offset-8 flex items-center gap-2"
                >
                  <IconBrandX
                    stroke={2}
                    className="min-w-6 hover:text-orange-dark"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://medium.com/@dimitarterziev_9098"
                  target="_blank"
                  className="hover:underline underline-offset-8 flex items-center gap-2"
                >
                  <IconBrandMedium
                    stroke={2}
                    className="min-w-6 hover:text-orange-dark"
                  />
                </a>
              </li>
            </ul>
          </div> */}
        </section>
      </div>
    </div>
  );
}

// "use client";
// import { useEffect, useRef, useState } from "react";
// import styles from "./SlidingBox.module.scss";

// export default function SlidingBox({ title, textArea }) {
//   const [topPosition, setTopPosition] = useState(0);
//   const containerRef = useRef(null);
//   const slidingboxRef = useRef(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (!containerRef.current) return;

//       const containerDimensions = containerRef.current.getBoundingClientRect();
//       const slidingboxHeight =
//         slidingboxRef.current.getBoundingClientRect().height;
//       const windowHeight = window.innerHeight;

//       const maxTop = containerDimensions.height - slidingboxHeight; // Subtracting these gives the maximum distance the sliding box can move before it hits the bottom of the parent container.

//       const scrollTop = Math.max(
//         0,
//         windowHeight / 2 - slidingboxHeight / 2 - containerDimensions.top
//       ); // This calculates the top position of the sliding box based on the scroll position.
//       const clampedTop = Math.min(maxTop, Math.max(0, scrollTop)); // Math.max(0, scrollTop) - Prevents the sliding box from moving above the parent container.
//       //  Math.min(maxTop, ...) - Prevents the sliding box from moving below the parent container.
//       setTopPosition(clampedTop);
//     };

//     window.addEventListener("scroll", handleScroll);
//     handleScroll(); // Trigger the calculation initially, so the position is correct even without scrolling

//     return () => window.removeEventListener("scroll", handleScroll); // Cleanup when component unmounts
//   }, []);

//   return (
//     <div ref={containerRef} className={styles.container}>
//       <div
//         ref={slidingboxRef}
//         className={styles.slidingBox}
//         style={{ top: `${topPosition}px` }}
//       >
//         <h1>{title}</h1>
//         <p>{textArea}</p>
//       </div>
//     </div>
//   );
// }
