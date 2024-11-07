"use client";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Stairs from "./Stairs";
import "./StairTransition.css";

const StairTransition = () => {
  const pathname = usePathname();
  return (
    <AnimatePresence mode="wait">
      <div key={pathname}>
        <div className="stair-container">
          <Stairs />
        </div>
      </div>
    </AnimatePresence>
  );
};

export default StairTransition;