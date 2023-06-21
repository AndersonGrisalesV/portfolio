import React, { useEffect, useRef } from "react";
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
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default IndividualAnimation;
