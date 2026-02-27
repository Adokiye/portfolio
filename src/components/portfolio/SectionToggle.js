import React from "react";
import { motion } from "framer-motion";

const SectionToggle = ({ currentSection, onToggle }) => {
  const isInsights = currentSection === "thoughts";

  return (
    <motion.button
      onClick={onToggle}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.35, duration: 0.35 }}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      className="fixed bottom-5 right-5 md:bottom-8 md:right-8 border border-zinc-400 dark:border-zinc-700 bg-white/95 dark:bg-zinc-950/95 text-black dark:text-white px-4 py-3 shadow-lg backdrop-blur-sm transition-colors duration-200 z-30 flex items-center gap-2 uppercase tracking-wider text-xs md:text-sm"
    >
      <span>{isInsights ? "Experience" : "Insights"}</span>
      <motion.svg
        animate={{ rotate: isInsights ? 180 : 0 }}
        transition={{ duration: 0.25 }}
        width="14"
        height="14"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M8 12L3 7L4.5 5.5L8 9L11.5 5.5L13 7L8 12Z" fill="currentColor" />
      </motion.svg>
    </motion.button>
  );
};

export default SectionToggle;
