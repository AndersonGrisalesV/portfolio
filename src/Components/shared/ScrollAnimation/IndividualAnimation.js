import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const IndividualAnimation = ({
  children,
  onDuration = null,
  onDelay = null,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
    // const mq = window.matchMedia("(min-width: 1601px)");

    // const handleMediaQueryChange = (event) => {
    //   if (event.matches) {
    //     setBigScreenSize(true);
    //     setOnlyOnce(true);
    //   } else {
    //     setBigScreenSize(false);
    //   }
    // };

    // mq.addEventListener("change", handleMediaQueryChange); // Use 'change' event instead

    // // Initial check when component mounts
    // if (mq.matches) {
    //   setBigScreenSize(true);
    // }

    // // Cleanup function to remove listener
    // return () => {
    //   mq.removeEventListener("change", handleMediaQueryChange);
    // };
  }, [isInView, mainControls]);

  return (
    <div ref={ref} style={{ position: "relative" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{
          duration: onDuration ? onDuration : 0.4,
          //   ease: [0, 0.71, 0.2, 1.01],
          delay: onDelay ? onDelay : 0,
          // delay: bigScreenSize ? 4 : o,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default IndividualAnimation;
