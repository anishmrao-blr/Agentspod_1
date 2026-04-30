import { m, useReducedMotion } from "framer-motion";
import { ComponentTextH2Section } from "./PencilComponentLibrary";

type FeaturedWorkCard = {
  industry: string;
  problem: string;
  outcome: string;
  tech: string[];
  image: string;
};

const featuredWorkCards: FeaturedWorkCard[] = [
  {
    industry: "Esports",
    problem: "Replace manual coaching review with automated gameplay analysis",
    outcome: "70% reduction in manual review time",
    tech: ["Computer Vision", "OCR", "Node.js", "Python"],
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&auto=format&q=80"
  },
  {
    industry: "Supply Chain",
    problem: "AI-augment manual spreadsheet-based truck load building at scale",
    outcome: "Measurable spoilage reduction + faster union-branch alignment",
    tech: ["LLM", "SAP Integration", "React", "Python"],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format&q=80"
  },
  {
    industry: "Healthcare / Wellness",
    problem: "Real-time empathetic voice companion for stress, anxiety, and loneliness",
    outcome: "Production voice pipeline with <300ms response latency",
    tech: ["LLaMA-3", "FAISS", "ElevenLabs", "Flask"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&q=80"
  }
];

const staggerContainerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } }
};

const staggerItemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
};

export function FeaturedWork() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="pc-wrap pc-section" id="featured-work" aria-labelledby="featured-work-heading">
      <ComponentTextH2Section id="featured-work-heading">Featured Work</ComponentTextH2Section>
      <m.div
        className="pc-featured-work-grid"
        variants={reduceMotion ? undefined : staggerContainerVariants}
        initial={reduceMotion ? undefined : "hidden"}
        whileInView={reduceMotion ? undefined : "visible"}
        viewport={reduceMotion ? undefined : { once: true, amount: 0.15 }}
      >
        {featuredWorkCards.map((card) => (
          <m.article
            key={card.industry}
            className="pc-featured-work-card"
            variants={reduceMotion ? undefined : staggerItemVariants}
          >
            <div
              className="pc-featured-work-media"
              style={{ backgroundImage: `url(${card.image})` }}
              aria-hidden="true"
            />
            <div className="pc-featured-work-content">
              <span className="pc-featured-work-tag">{card.industry}</span>
              <p className="pc-featured-work-problem">{card.problem}</p>
              <p className="pc-featured-work-outcome">{card.outcome}</p>
              <div className="pc-featured-work-tech">
                {card.tech.map((t) => (
                  <span key={t} className="pc-featured-work-badge">{t}</span>
                ))}
              </div>
              <a href="/projects" className="pc-featured-work-link">View Case Study →</a>
            </div>
          </m.article>
        ))}
      </m.div>
      <div className="pc-featured-work-cta">
        <a href="/projects" className="pc-featured-work-all">See All Projects →</a>
      </div>
    </section>
  );
}
