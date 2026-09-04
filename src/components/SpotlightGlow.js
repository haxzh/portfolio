import React, { useEffect, useState } from "react";

function SpotlightGlow() {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleMouseMove = (e) => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setPos({ x: e.clientX, y: e.clientY });
          setOpacity(1);
          ticking = false;
        });
        ticking = true;
      }
    };

    const handleMouseLeave = () => setOpacity(0);

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      className="ambient-spotlight-follower"
      style={{
        transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
        opacity: opacity,
      }}
    />
  );
}

export default React.memo(SpotlightGlow);
