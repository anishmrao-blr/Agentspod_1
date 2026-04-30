import Head from "next/head";
import { InternalContentPage } from "@/components/landing/InternalContentPage";
import { internalPages } from "@/components/landing/internalPages";
import { ProjectCard } from "@/components/landing/ProjectCard";

const deepCaseStudies = [
  {
    industry: "Esports",
    title: "AI Gameplay Analysis Platform",
    problem:
      "Coaching teams spent hours manually reviewing gameplay footage with no standardized feedback framework, making it impossible to scale player development.",
    solution:
      "Built a computer vision + OCR pipeline that processes recordings frame-by-frame, detects in-game events, and generates structured coach-like feedback reports automatically.",
    outcome:
      "70% reduction in manual review time. Consistent, data-driven player improvement tracking that scales across any number of players.",
    metricCallout: "70% less manual review",
    tech: ["Python", "Computer Vision", "OCR", "Node.js", "scikit-learn", "Tesseract", "TypeScript"],
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200&auto=format&q=80"
  },
  {
    industry: "Healthcare / Wellness",
    title: "Voice AI for Emotional Support",
    problem:
      "Users experiencing stress, anxiety, or loneliness had no accessible, empathetic real-time support channel that felt personal and non-judgmental.",
    solution:
      "Developed an emotionally intelligent voice companion combining LLMs, FAISS semantic retrieval, and real-time speech pipelines to deliver context-aware, empathetic responses.",
    outcome:
      "Production-ready platform with <300ms end-to-end voice latency. Deployed for wellness and coaching applications with 85% improvement in user emotional satisfaction.",
    metricCallout: "<300ms voice response latency",
    tech: ["Python", "LLaMA-3", "FAISS", "ElevenLabs", "Flask", "React"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&auto=format&q=80"
  },
  {
    industry: "Cybersecurity / Enterprise",
    title: "SOC 2 Compliance Automation",
    problem:
      "Manual SOC 2 report evaluation was slow, inconsistent, and couldn't scale across ISO 27001, HIPAA, and GDPR frameworks simultaneously.",
    solution:
      "AI platform using LLM-based scoring (Mistral-7B), semantic retrieval, and structured preprocessing to deliver consistent, explainable compliance evaluations across multiple frameworks.",
    outcome:
      "Scalable enterprise-ready compliance automation across three regulatory frameworks, eliminating inconsistent manual review and accelerating audit cycles.",
    metricCallout: "3 frameworks automated",
    tech: ["Python", "Mistral-7B", "MongoDB", "AWS", "Amazon Bedrock", "S3"],
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=1200&auto=format&q=80"
  }
];

export default function ProjectsPage() {
  return (
    <>
      <Head>
        <title>Case Studies | Agentspod.AI</title>
        <meta
          name="description"
          content="Anonymized case studies from our delivery team across AI agents, voice AI, IoT, computer vision, and compliance automation."
        />
      </Head>
      <div className="pc-projects-deep">
        <div className="pc-wrap pc-section">
          <h1 className="pc-text-h2-section">Featured Case Studies</h1>
          <div className="pc-project-cards-stack">
            {deepCaseStudies.map((cs) => (
              <ProjectCard key={cs.title} {...cs} />
            ))}
          </div>
        </div>
      </div>
      <InternalContentPage page={internalPages.projects} />
    </>
  );
}
