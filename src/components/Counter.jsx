import React, { useEffect, useRef } from "react";
import { useMotionValue, animate, useInView } from "framer-motion";

const Counter = ({ value, duration = 1.5, immediate = false }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px" });
  
  const numericValue = parseInt(value.replace(/[^0-9]/g, ""), 10) || 0;
  const suffix = value.replace(/[0-9]/g, "");
  
  const count = useMotionValue(0);

  useEffect(() => {
    if (immediate || isInView) {
      const controls = animate(count, numericValue, {
        duration: duration,
        ease: [0.16, 1, 0.3, 1], // Custom fast-out ease
        onUpdate: (latest) => {
          if (ref.current) {
            ref.current.textContent = Math.floor(latest) + suffix;
          }
        },
      });
      return () => controls.stop();
    }
  }, [isInView, numericValue, immediate, duration, suffix, count]);

  return <span ref={ref}>0{suffix}</span>;
};

export default Counter;
