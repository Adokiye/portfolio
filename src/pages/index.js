import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { AnimatePresence, motion } from "framer-motion";
import Header from "components/portfolio/Header";
import ExperienceCard from "components/portfolio/ExperienceCard";
import ArticleCard from "components/portfolio/ArticleCard";
import MouseTrail from "components/portfolio/MouseTrail";
import SocialProofModal from "components/portfolio/SocialProofModal";
import SectionToggle from "components/portfolio/SectionToggle";
import ScrollCardBall from "components/portfolio/ScrollCardBall";
import { allExperiences } from "data/experiences";
import { articles } from "data/articles";
import { profile } from "data/profile";

export default function Portfolio() {
  const router = useRouter();
  const [showSocialModal, setShowSocialModal] = useState(false);
  const [currentSection, setCurrentSection] = useState("experience");

  useEffect(() => {
    if (router.query.section === "thoughts") {
      setCurrentSection("thoughts");
    } else {
      setCurrentSection("experience");
    }
  }, [router.query.section]);

  const handleToggleSection = () => {
    const newSection =
      currentSection === "experience" ? "thoughts" : "experience";
    setCurrentSection(newSection);
    window.scrollTo({ top: 0, behavior: "smooth" });

    if (newSection === "thoughts") {
      router.push("/?section=thoughts", undefined, { shallow: true });
    } else {
      router.push("/", undefined, { shallow: true });
    }
  };

  const sectionVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 120 : -120,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 120 : -120,
      opacity: 0,
    }),
  };

  const direction = currentSection === "thoughts" ? 1 : -1;
  const pageTitle = `${profile.name} - ${profile.role}`;
  const pageDescription = `${profile.summary} ${profile.impact}`;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <link rel="icon" type="image/svg+xml" href="/favicon-pi.svg" />
      </Head>

      <MouseTrail enabled={true} />
      <SocialProofModal
        isOpen={showSocialModal}
        onClose={() => setShowSocialModal(false)}
      />
      <ScrollCardBall
        enabled={currentSection === "experience" || currentSection === "thoughts"}
        selector={
          currentSection === "experience"
            ? '[data-track-card="experience"]'
            : '[data-track-card="insights"]'
        }
        anchor={currentSection === "thoughts" ? "top" : "center"}
      />
      <SectionToggle
        currentSection={currentSection}
        onToggle={handleToggleSection}
      />

      <div className="min-h-screen bg-zinc-50 dark:bg-black text-black dark:text-white transition-colors duration-200 relative">
        <div className="fixed inset-0 pointer-events-none z-0 opacity-40 [background-image:linear-gradient(to_right,rgba(24,24,27,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(24,24,27,0.06)_1px,transparent_1px)] [background-size:36px_36px] dark:[background-image:linear-gradient(to_right,rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.07)_1px,transparent_1px)]" />

        <Header onSocialProofClick={() => setShowSocialModal(true)} />

        <div className="pt-28 md:pt-32 relative z-20">
          <main className="max-w-6xl mx-auto px-4 md:px-8 pb-16">
            <section className="grid lg:grid-cols-12 gap-6 mb-14">
              <div className="lg:col-span-7 border border-zinc-300 dark:border-zinc-800 bg-white/90 dark:bg-zinc-950/90 p-6 md:p-8">
                <p className="text-xs uppercase tracking-[0.2em] text-zinc-600 dark:text-zinc-400 mb-3">
                  {profile.role}
                </p>
                <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-4">
                  {profile.name}
                </h2>
                <p className="text-lg md:text-xl text-zinc-700 dark:text-zinc-300 mb-4 font-avanir">
                  {profile.headline}
                </p>
                <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed font-avanir">
                  {profile.summary}
                </p>
                <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed mt-3 font-avanir">
                  {profile.impact}
                </p>
                <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-400 mt-4 font-avanir">
                  {profile.education}
                </p>

                <div className="flex flex-wrap gap-3 mt-7">
                  <button
                    onClick={() => setShowSocialModal(true)}
                    className="px-5 py-3 bg-black text-white dark:bg-white dark:text-black uppercase tracking-[0.15em] text-xs hover:opacity-85 transition-opacity"
                  >
                    Contact
                  </button>
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3 border border-zinc-400 dark:border-zinc-700 uppercase tracking-[0.15em] text-xs hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
                  >
                    LinkedIn
                  </a>
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3 border border-zinc-400 dark:border-zinc-700 uppercase tracking-[0.15em] text-xs hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
                  >
                    GitHub
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5 space-y-6">
                <div className="grid grid-cols-2 gap-3">
                  {profile.metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="border border-zinc-300 dark:border-zinc-800 bg-white/90 dark:bg-zinc-950/90 p-4"
                    >
                      <p className="text-2xl md:text-3xl font-bold mb-1">{metric.value}</p>
                      <p className="text-xs uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                        {metric.label}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="border border-zinc-300 dark:border-zinc-800 bg-white/90 dark:bg-zinc-950/90 p-5">
                  <h3 className="text-sm uppercase tracking-[0.15em] mb-4 text-zinc-500 dark:text-zinc-400">
                    Executive Competencies
                  </h3>
                  <ul className="space-y-2">
                    {profile.competencies.map((item) => (
                      <li
                        key={item}
                        className="text-sm md:text-base text-zinc-700 dark:text-zinc-300 font-avanir"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border border-zinc-300 dark:border-zinc-800 bg-white/90 dark:bg-zinc-950/90 p-5">
                  <h3 className="text-sm uppercase tracking-[0.15em] mb-4 text-zinc-500 dark:text-zinc-400">
                    Stack Overview
                  </h3>
                  <div className="space-y-4">
                    {profile.skills.map((skillGroup) => (
                      <div key={skillGroup.group}>
                        <p className="text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-400 mb-1.5">
                          {skillGroup.group}
                        </p>
                        <p className="text-sm md:text-base text-zinc-700 dark:text-zinc-300 font-avanir">
                          {skillGroup.items.join(" · ")}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-9">
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight">
                {currentSection === "experience"
                  ? "Career Impact"
                  : "Leadership Insights"}
              </h3>
              <p className="mt-2 text-zinc-600 dark:text-zinc-300 font-avanir">
                {currentSection === "experience"
                  ? "Execution highlights across fintech, marketplace, and cloud platform leadership."
                  : "Practical notes on operating engineering organizations for revenue, speed, and reliability."}
              </p>
            </section>

            <AnimatePresence initial={false} custom={direction} mode="wait">
              {currentSection === "experience" ? (
                <motion.section
                  key="experience"
                  custom={direction}
                  variants={sectionVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 32 },
                    opacity: { duration: 0.18 },
                  }}
                >
                  <div className="space-y-5">
                    {allExperiences.map((experience, index) => (
                      <ExperienceCard
                        key={experience.id}
                        experience={experience}
                        index={index}
                        trackingGroup="experience"
                      />
                    ))}
                  </div>
                </motion.section>
              ) : (
                <motion.section
                  key="thoughts"
                  custom={direction}
                  variants={sectionVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 32 },
                    opacity: { duration: 0.18 },
                  }}
                >
                  <div className="space-y-5">
                    {articles.map((article, index) => (
                      <ArticleCard key={article.id} article={article} index={index} />
                    ))}
                  </div>
                </motion.section>
              )}
            </AnimatePresence>
          </main>
        </div>
      </div>
    </>
  );
}
