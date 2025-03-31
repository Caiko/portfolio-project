import Link from "next/link";
import { useState } from "react";

export default function ScrambleButton({ content, parentStyles, href }) {
  const [text, setText] = useState(content);
  const originalText = content;
  const randomChars = "#$%&*<>|~!?";

  function scrambleText() {
    let iterations = 0;
    const interval = setInterval(() => {
      setText((text) =>
        text
          .split("")
          .map((char, index) => {
            if (index < iterations) return originalText[index];
            return randomChars[Math.floor(Math.random() * randomChars.length)];
          })
          .join("")
      );

      if (iterations >= originalText.length) clearInterval(interval);
      iterations += 1 / 3;
    }, 30);
  }

  return (
    <button className={parentStyles}>
      <Link
        href={href}
        onMouseEnter={scrambleText}
        onMouseLeave={() => setText(originalText)}
      >
        {text}
      </Link>
    </button>
  );
}
