import React, { useState, useLayoutEffect } from "react";

export default function ScrollPosition() {
  const [pos, setPos] = useState(0);

  useLayoutEffect(() => {
    function handleScroll() {
      setPos(window.scrollY);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return <h2>Scroll Y Position: {pos}px</h2>;
}
