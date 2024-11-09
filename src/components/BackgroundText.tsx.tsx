import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface BackgroundTextProps {
  text: string;
}

export const BackgroundText = ({ text }: BackgroundTextProps) => {
  const motionRef = useRef(null);
  const isInView = useInView(motionRef, { once: false });

  const waveVariants = {
    initial: { y: 0 },
    animate: { y: [0, -100, 0] }
  };

  const transition = {
    duration: 1.8,
    ease: "easeInOut",
    repeat: 0,
    staggerChildren: 0.1
  };
  return (
    <div className="flex pb-7" ref={motionRef}>
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          variants={waveVariants}
          initial="initial"
          animate={isInView ? "animate" : "hidden"}
          transition={{ ...transition, delay: index * 0.1 }}
          style={{ display: "inline-block" }}
          className="md:text-9xl text-5xl text-outline text-gray-400"
        >
          {char}
        </motion.span>
      ))}
    </div>
  );
};
