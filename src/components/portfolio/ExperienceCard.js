import React from "react";
import { motion } from "framer-motion";

const ExperienceCard = ({ experience, index, trackingGroup }) => {
  const handleClick = () => {
    if (experience.link) {
      window.open(experience.link, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <motion.article
      data-track-card={trackingGroup}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      onClick={handleClick}
      className={`relative overflow-hidden border border-zinc-300 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-6 md:p-8 transition-all duration-300 md:hover:-translate-y-1 md:hover:shadow-[8px_8px_0_0_rgba(0,0,0,0.12)] dark:md:hover:shadow-[8px_8px_0_0_rgba(255,255,255,0.08)] ${
        experience.link ? "cursor-pointer" : ""
      }`}
    >
      <div className="absolute top-0 left-0 h-1 w-28 bg-black dark:bg-white" />

      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <h3 className="text-xl md:text-2xl font-bold text-black dark:text-white leading-tight">
          {experience.title}
        </h3>
        <p className="text-xs md:text-sm uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
          {experience.year}
        </p>
      </div>

      <p className="mt-4 text-zinc-700 dark:text-zinc-300 leading-relaxed font-avanir">
        {experience.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {experience.tags.map((tag, idx) => (
          <span
            key={idx}
            className="px-3 py-1 text-xs md:text-sm border border-zinc-300 dark:border-zinc-700 text-black dark:text-zinc-100 bg-zinc-100 dark:bg-zinc-900"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.article>
  );
};

export default ExperienceCard;
