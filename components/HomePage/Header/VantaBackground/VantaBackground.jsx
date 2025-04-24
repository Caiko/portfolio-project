"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import NET from "vanta/dist/vanta.net.min";
import styles from "./VantaBackground.module.scss";

export default function VantaBackground() {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (!vantaEffect) {
      const effect = NET({
        el: vantaRef.current,
        THREE: THREE, // important to pass THREE
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200,
        minWidth: 200,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0x64ffda, // Line color
        backgroundColor: 0x1a1a1a, // Background
        points: 10.0, // Number of points
        maxDistance: 23.0, // Distance to link points
        spacing: 20.0, // Space between points
      });
      setVantaEffect(effect);
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return <div ref={vantaRef} className={styles.vanta} />;
}
