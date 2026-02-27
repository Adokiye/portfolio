import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const ArticleCard = ({ article, index }) => {
  const card = (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      data-track-card="insights"
      className="relative overflow-hidden border border-zinc-300 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-6 md:p-8 transition-all duration-300 md:hover:-translate-y-1 md:hover:shadow-[8px_8px_0_0_rgba(0,0,0,0.12)] dark:md:hover:shadow-[8px_8px_0_0_rgba(255,255,255,0.08)]"
    >
      <div className="absolute top-0 left-0 h-1 w-28 bg-black dark:bg-white" />

      <h3 className="text-xl md:text-2xl font-bold mb-3 text-black dark:text-white">
        {article.title}
      </h3>
      <p className="text-zinc-700 dark:text-zinc-300 mb-5 leading-relaxed font-avanir">
        {article.description}
      </p>
      <div className="flex flex-wrap gap-2 mb-5">
        {article.tags.map((tag, idx) => (
          <span
            key={idx}
            className="px-3 py-1 text-xs md:text-sm border border-zinc-300 dark:border-zinc-700 text-black dark:text-zinc-100 bg-zinc-100 dark:bg-zinc-900"
          >
            {tag}
          </span>
        ))}
      </div>
      <p className="text-xs md:text-sm uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
        {new Date(article.publishedDate).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
    </motion.article>
  );

  if (article.url) {
    return (
      <a href={article.url} target="_blank" rel="noopener noreferrer">
        {card}
      </a>
    );
  }

  return <Link href={`/articles/${article.slug}`}>{card}</Link>;
};

export default ArticleCard;
