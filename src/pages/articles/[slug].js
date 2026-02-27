import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { marked } from "marked";
import hljs from "highlight.js";
import Header from "components/portfolio/Header";
import MouseTrail from "components/portfolio/MouseTrail";
import SocialProofModal from "components/portfolio/SocialProofModal";
import CommentForm from "components/portfolio/CommentForm";
import { articles } from "data/articles";
import { profile } from "data/profile";

marked.setOptions({
  highlight: function (code, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(code, { language: lang }).value;
      } catch {}
    }
    return hljs.highlightAuto(code).value;
  },
  breaks: true,
  gfm: true,
});

export default function ArticleDetail({ article }) {
  const [showSocialModal, setShowSocialModal] = useState(false);

  useEffect(() => {
    document.querySelectorAll("pre code").forEach((block) => {
      hljs.highlightElement(block);
    });
  }, [article]);

  if (!article) {
    return <div>Article not found</div>;
  }

  const htmlContent = marked(article.content);
  const pageTitle = `${article.title} - ${profile.name}`;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={article.description} />
        <link rel="icon" type="image/svg+xml" href="/favicon-pi.svg" />
      </Head>

      <MouseTrail enabled={true} />
      <SocialProofModal
        isOpen={showSocialModal}
        onClose={() => setShowSocialModal(false)}
      />

      <div className="min-h-screen bg-zinc-50 dark:bg-black text-black dark:text-white transition-colors duration-200 relative">
        <div className="fixed inset-0 pointer-events-none z-0 opacity-40 [background-image:linear-gradient(to_right,rgba(24,24,27,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(24,24,27,0.06)_1px,transparent_1px)] [background-size:36px_36px] dark:[background-image:linear-gradient(to_right,rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.07)_1px,transparent_1px)]" />
        <Header onSocialProofClick={() => setShowSocialModal(true)} />

        <div className="pt-28 md:pt-32 relative z-20">
          <main className="max-w-4xl mx-auto px-4 md:px-8 py-10">
            <Link
              href="/?section=thoughts"
              className="inline-flex items-center gap-2 text-xs md:text-sm uppercase tracking-[0.2em] text-zinc-600 dark:text-zinc-300 hover:text-black dark:hover:text-white transition-colors"
            >
              <span>←</span>
              <span>Back to insights</span>
            </Link>

            <article className="mt-7 border border-zinc-300 dark:border-zinc-800 bg-white/90 dark:bg-zinc-950/90 p-6 md:p-10">
              <header className="mb-8 border-b border-zinc-300 dark:border-zinc-800 pb-6">
                <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
                  {article.title}
                </h1>
                <p className="text-zinc-700 dark:text-zinc-300 mb-5 font-avanir leading-relaxed">
                  {article.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs md:text-sm border border-zinc-300 dark:border-zinc-700 text-black dark:text-zinc-100 bg-zinc-100 dark:bg-zinc-900"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <time className="text-xs md:text-sm uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                  {new Date(article.publishedDate).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </header>

              <div className="prose prose-lg max-w-none">
                <div
                  className="article-content leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: htmlContent }}
                />
              </div>
            </article>

            <CommentForm articleTitle={article.title} />
          </main>
        </div>
      </div>

      <style jsx global>{`
        .article-content {
          line-height: 1.9;
          color: inherit;
          font-family: var(--font-avanir), "Avenir", sans-serif;
        }

        .article-content h1,
        .article-content h2,
        .article-content h3,
        .article-content h4 {
          font-family: var(--font-space-mono), monospace;
          letter-spacing: -0.01em;
        }

        .article-content h1 {
          font-size: 2rem;
          font-weight: 700;
          margin-top: 2rem;
          margin-bottom: 1rem;
        }

        .article-content h2 {
          font-size: 1.5rem;
          font-weight: 700;
          margin-top: 1.6rem;
          margin-bottom: 0.7rem;
        }

        .article-content h3 {
          font-size: 1.2rem;
          font-weight: 700;
          margin-top: 1.4rem;
          margin-bottom: 0.5rem;
        }

        .article-content p {
          margin-bottom: 1rem;
        }

        .article-content ul,
        .article-content ol {
          margin-left: 1.3rem;
          margin-bottom: 1rem;
        }

        .article-content li {
          margin-bottom: 0.4rem;
        }

        .article-content code {
          font-family: var(--font-space-mono), monospace;
          font-size: 0.85em;
          background-color: #ededed;
          padding: 0.2em 0.4em;
          color: #0a0a0a;
          border: 1px solid #d4d4d4;
        }

        .article-content pre {
          background-color: #f4f4f5;
          border: 1px solid #d4d4d8;
          padding: 14px;
          overflow-x: auto;
          margin: 1.3rem 0;
        }

        .article-content pre code {
          background-color: transparent;
          padding: 0;
          border: 0;
        }

        .article-content blockquote {
          border-left: 3px solid #52525b;
          padding-left: 0.9rem;
          margin: 1rem 0;
          color: #3f3f46;
        }

        .article-content hr {
          border: none;
          border-top: 1px solid #d4d4d8;
          margin: 2rem 0;
        }

        .article-content a {
          color: inherit;
          text-decoration: underline;
          text-underline-offset: 3px;
        }

        html.dark .article-content code {
          background-color: #18181b;
          color: #fafafa;
          border-color: #3f3f46;
        }

        html.dark .article-content pre {
          background-color: #09090b;
          border-color: #27272a;
        }

        html.dark .article-content blockquote {
          border-left-color: #71717a;
          color: #e4e4e7;
        }

        html.dark .article-content hr {
          border-top-color: #3f3f46;
        }
      `}</style>
    </>
  );
}

export async function getStaticPaths() {
  const paths = articles.map((article) => ({
    params: { slug: article.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const article = articles.find((a) => a.slug === params.slug);

  return {
    props: {
      article: article || null,
    },
  };
}
