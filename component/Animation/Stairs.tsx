import { motion } from "framer-motion";
import "./StairTransition.css";

const stairAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
    transition: { duration: 1 },
  },
  exit: {
    top: ["100%", "0%"],
  },
};

const reverseIndex = (index: number) => {
  const totalSteps = 6;
  return totalSteps - index - 1;
};

const Stairs = () => {
  return (
    <>
      {Array.from({ length: 6 }).map((_, index) => {
        return (
          <motion.div
            key={index}
            variants={stairAnimation}
            initial="initial"
            exit="exit"
            animate="animate"
            transition={{
              duration: 0.7,
              ease: "easeInOut",
              delay: reverseIndex(index) * 0.1,
            }}
            className="animation"
          />
        );
      })}
    </>
  );
};

export default Stairs;