import { getCareersFormsManifest } from "@/lib/careers-forms-config";

export type InternalPageSection = {
  title: string;
  body: string;
  /** When set, the capability card expands in place instead of linking away (e.g. portfolio projects). */
  details?: string;
  /** Overrides page primary CTA for this cardâ€™s â€œLearn moreâ€ link. */
  learnMoreHref?: string;
  /** Background image URL for the card media area. */
  image?: string;
};

/** Plain string chips, or linked chips `{ label, href }` (e.g. careers role â†’ Google Form). */
export type PageHighlight = string | { label: string; href: string };

export type InternalPageData = {
  slug: string;
  title: string;
  description: string;
  heroHeading: string;
  heroBody: string;
  primaryCtaLabel: string;
  primaryCtaHref: string;
  highlights: PageHighlight[];
  /** When set, replaces the default "Technical Capabilities" grid heading. */
  capabilitiesSectionTitle?: string;
  /** Optional grouped presentation for capabilities (used by case studies). */
  capabilityGroups?: Array<{
    title: string;
    items: InternalPageSection[];
  }>;
  capabilities: InternalPageSection[];
  closingHeading: string;
  closingBody: string;
};

function buildCareersPage(): InternalPageData {
  const m = getCareersFormsManifest();
  const application = m.applicationFormUrl;

  return {
    slug: "careers",
    title: "Careers | Agentspod.AI",
    description: "Open engineering, architecture, frontend, and product design roles. Apply via our Google Forms.",
    heroHeading: "Join the Intelligence Revolution",
    heroBody:
      "We are a team of builders, thinkers, and problem solvers shipping AI systems for real-world impact. Each role below links to its application form.",
    primaryCtaLabel: "Send open application",
    primaryCtaHref: application,
    highlights: [
      { label: "Senior Machine Learning Engineer", href: m.roleFormUrls["Senior Machine Learning Engineer"] },
      { label: "AI Solutions Architect", href: m.roleFormUrls["AI Solutions Architect"] },
      { label: "Frontend Engineer (React/Next.js)", href: m.roleFormUrls["Frontend Engineer (React/Next.js)"] },
      { label: "Product Designer", href: m.roleFormUrls["Product Designer"] }
    ],
    capabilitiesSectionTitle: "Why join",
    capabilities: [
      {
        title: "Remote-first team",
        body: "Collaborate globally across engineering, product, and design.",
        learnMoreHref: m.capabilityFormUrls["Remote-first team"],
        image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&auto=format&q=80"
      },
      {
        title: "High-impact work",
        body: "Build AI systems deployed in real enterprise and startup contexts.",
        learnMoreHref: m.capabilityFormUrls["High-impact work"],
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&q=80"
      },
      {
        title: "Cross-functional exposure",
        body: "Work across model, platform, and user experience layers.",
        learnMoreHref: m.capabilityFormUrls["Cross-functional exposure"],
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&q=80"
      },
      {
        title: "Open applications",
        body: "Exceptional talent is always welcome even beyond listed roles.",
        learnMoreHref: m.capabilityFormUrls["Open applications"],
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&q=80"
      }
    ],
    closingHeading: "Don't see your role?",
    closingBody: "Use the open application form or contact us from the home pageâ€”we read every submission."
  };
}

const internalPagesCore = {
  "ai-agents": {
    slug: "ai-agents",
    title: "AI Agents | Agentspod.AI",
    description: "Autonomous digital workers designed to execute complex tasks and integrate with existing workflows.",
    heroHeading: "AI Agents",
    heroBody:
      "Autonomous digital workers designed to execute complex tasks, make decisions, and integrate seamlessly with existing workflows.",
    primaryCtaLabel: "Deploy Agents",
    primaryCtaHref: "/contact",
    highlights: [
      "Customer Support Automation",
      "Lead Qualification & Outreach",
      "Data Entry & Processing",
      "Market Research & Analysis"
    ],
    capabilities: [
      { title: "24/7 Operation", body: "Agents that never sleep, ensuring your business is always on.", image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=800&auto=format&q=80" },
      { title: "Multi-Modal", body: "Process text, voice, and images seamlessly.", image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=800&auto=format&q=80" },
      { title: "Self-Improving", body: "Systems that learn from interactions to get better over time.", image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&auto=format&q=80" },
      { title: "Secure by Design", body: "Enterprise-grade security protocols built into every agent.", image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&auto=format&q=80" }
    ],
    closingHeading: "Ready to Automate?",
    closingBody: "Let's build a custom agent workforce tailored to your specific business needs."
  },
  "gen-ai": {
    slug: "gen-ai",
    title: "Generative AI | Agentspod.AI",
    description: "Industry-tailored large language model systems for legal, real estate, and marketing use cases.",
    heroHeading: "Generative AI",
    heroBody:
      "Harness the power of large language models to create, innovate, and solve business problems with domain-specific intelligence.",
    primaryCtaLabel: "Build A GenAI Solution",
    primaryCtaHref: "/contact",
    highlights: [
      "Legal Contract Analysis & Drafting",
      "Real Estate Listing Generation",
      "Personalized Marketing Campaigns",
      "Automated Compliance Review"
    ],
    capabilities: [
      {
        title: "Industry-Specific Training",
        body: "Models fine-tuned on your sector's proprietary datasets for unmatched relevance.",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&q=80"
      },
      { title: "RAG for Knowledge Work", body: "Instant retrieval across your internal document archive.", image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&auto=format&q=80" },
      { title: "Multi-Modal Content", body: "Generate legal, property, and marketing assets from one platform.", image: "https://images.unsplash.com/photo-1568952433726-3896e3881c65?w=800&auto=format&q=80" },
      { title: "Data Sovereignty", body: "Your data trains your models while preserving privacy and ownership.", image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800&auto=format&q=80" }
    ],
    closingHeading: "Innovate Faster.",
    closingBody: "Deploy custom Generative AI models that create measurable competitive advantage."
  },
  "data-science": {
    slug: "data-science",
    title: "Data Science | Agentspod.AI",
    description: "Predictive modeling, analytics platforms, and data infrastructure for decision intelligence.",
    heroHeading: "Data Science",
    heroBody:
      "Turn raw data into actionable intelligence with rigorous statistical methods and high-performance machine learning systems.",
    primaryCtaLabel: "Analyze Your Data",
    primaryCtaHref: "/contact",
    highlights: [
      "Demand Forecasting & Inventory Optimization",
      "Customer Churn Prediction",
      "Fraud Detection Systems",
      "Dynamic Pricing Engines"
    ],
    capabilities: [
      { title: "Predictive Modeling", body: "Forecast trends, churn, and demand with high-accuracy models.", image: "https://images.unsplash.com/photo-1543286386-713bdd548da4?w=800&auto=format&q=80" },
      { title: "Data Infrastructure", body: "Scalable ETL pipelines and data warehouses for advanced analytics.", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&q=80" },
      { title: "Computer Vision", body: "Extract insights from image and video pipelines for automation.", image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&auto=format&q=80" },
      { title: "NLP & Text Mining", body: "Uncover sentiment and hidden patterns in unstructured text data.", image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&auto=format&q=80" }
    ],
    closingHeading: "Unlock Your Data.",
    closingBody: "Stop guessing and start knowing with analytics systems built for real outcomes."
  },
  "voice-ai": {
    slug: "voice-ai",
    title: "Voice AI | Agentspod.AI",
    description: "Human-like conversational voice systems for support, sales, and workflow automation.",
    heroHeading: "Voice AI",
    heroBody:
      "Conversational AI that sounds human and handles real-world phone and voice workflows with low latency and high reliability.",
    primaryCtaLabel: "Hear the Difference",
    primaryCtaHref: "/contact",
    highlights: [
      "Inbound Customer Support",
      "Outbound Sales & Qualification",
      "Appointment Scheduling",
      "Voice-Activated IoT Control"
    ],
    capabilities: [
      { title: "24/7 Live Support", body: "Scale support capacity instantly with always-on service quality.", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&q=80" },
      { title: "Cost Efficiency", body: "Reduce operational overhead while maintaining quality interactions.", image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&auto=format&q=80" },
      { title: "Ultra-Low Latency", body: "Natural responses with sub-second response loops.", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&q=80" },
      { title: "Emotion Analysis", body: "Detect tone and sentiment to adapt responses dynamically.", image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800&auto=format&q=80" }
    ],
    closingHeading: "Talk to the Future.",
    closingBody: "Deploy voice agents that delight customers and reduce operational costs."
  },
  "software-development": {
    slug: "software-development",
    title: "Software Development | Agentspod.AI",
    description: "Robust, scalable software systems from MVP delivery to production-ready growth architecture.",
    heroHeading: "Software Development",
    heroBody:
      "The backbone of every digital product: robust, scalable, and maintainable software engineered for growth.",
    primaryCtaLabel: "Start Your 50-Day Sprint",
    primaryCtaHref: "/contact",
    highlights: ["Idea to MVP in 25 Days", "MVP to Product in +25 Days", "Polished UI", "Production-Grade Backend"],
    capabilities: [
      { title: "SaaS Development", body: "Multi-tenant products, billing systems, and cloud architecture.", image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&q=80" },
      { title: "App Development", body: "Native and cross-platform mobile apps with resilient offline flows.", image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&q=80" },
      { title: "Modern WebApps", body: "High-performance React and Next.js applications for superior UX.", image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&auto=format&q=80" },
      { title: "Enterprise Tech", body: "Custom internal tools, ERP integrations, and secure data workflows.", image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&q=80" }
    ],
    closingHeading: "Build to Last.",
    closingBody: "Partner with engineers who care about code quality as much as product outcomes."
  },
  projects: {
    slug: "projects",
    title: "Case Studies | Agentspod.AI",
    description:
      "Organized case studies from StellarMind delivery across AI, voice, IoT, computer vision, AR, enterprise analytics, and compliance automation.",
    heroHeading: "Case Studies",
    heroBody:
      "Real-world delivery across industries: explore every case study from the sitemap scrape, organized by domain so teams can quickly find relevant outcomes and architectures.",
    primaryCtaLabel: "Discuss a Similar Build",
    primaryCtaHref: "/contact",
    highlights: [
      "AI Platforms & Automation",
      "Voice AI & Conversational Systems",
      "IoT & Edge Intelligence",
      "Computer Vision & Inspection",
      "AR/3D & Immersive Applications",
      "Compliance, Analytics & Data Engineering"
    ],
    capabilitiesSectionTitle: "Projects Completed",
    capabilityGroups: [
      {
        title: "AI Platforms & Automation",
        items: [
          {
            title: "AI-Driven Sanctions Intelligence & Real-Time Compliance System",
            body:
              "AI-powered aggregation and verification system that continuously collects global sanctions databases and screens users in real time to ensure regulatory compliance.",
            image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&auto=format&q=80",
            details:
              "Overview\nâ€¢ Our client is a compliance-focused organization that requires strict background verification during account onboarding. They needed an automated system to continuously collect and update global sanctions data from multiple government sources and screen users against it in real time. This ensures regulatory compliance while preventing high-risk or restricted individuals from accessing the platform.\n\nTechnology Stack\nâ€¢ Python\nâ€¢ MySQL\nâ€¢ PostgreSQL\nâ€¢ Cron Jobs (Linux)\n\nKey Challenges\nâ€¢ High accuracy required due to legal and financial implications\nâ€¢ False positives/negatives could impact business operations\nâ€¢ Efficient parsing and storage required for large datasets\nâ€¢ Needed near real-time synchronization to avoid outdated checks\nâ€¢ Required deduplication and entity resolution due to name variations\nâ€¢ Lack of standard structure across datasets\nâ€¢ Needed robust retry and error-handling mechanisms due to changing government endpoints\n\nSolutions\nâ€¢ Built a centralized parser to handle XML, Excel, and API responses\nâ€¢ Implemented cron jobs running every 3 hours for continuous synchronization\nâ€¢ Applied name matching, alias mapping, and unique identifiers for normalization\nâ€¢ Added fallback logic and logging for failed scrapes to ensure resilience\nâ€¢ Indexed key fields and optimized database design for fast search\nâ€¢ Integrated database with onboarding workflow for real-time screening\n\nBenefits Delivered\nâ€¢ Automated screening ensures adherence to global regulatory requirements\nâ€¢ Immediate identification of high-risk individuals during account creation\nâ€¢ Eliminated manual verification effort, significantly reducing overhead\nâ€¢ Aggregates data from multiple global authorities\nâ€¢ Provides a consistent, reliable dataset for accurate risk assessment\nâ€¢ Can accommodate future expansion in data sources with minimal changes",
            learnMoreHref: "/contact"
          },
          {
            title: "AI Job Platform for Immigration & PR-Eligible Opportunities",
            body:
              "AI-powered job search platform that helps skilled professionals find immigration-friendly roles and identify employment opportunities aligned with PR pathways.",
            image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&auto=format&q=80",
            details:
              "Overview\nâ€¢ The client is a Canada-focused immigration technology startup aiming to simplify the PR pathway for skilled immigrants worldwide. Their mission is to eliminate the confusion around which jobs genuinely qualify for Canadian Permanent Residency and give newcomers a clear, structured path toward building a life in Canada.\n\nTechnology Stack\nâ€¢ Python\nâ€¢ Next JS\nâ€¢ AWS S3\nâ€¢ Hostinger VPS\nâ€¢ PHP\nâ€¢ Cloudflare\n\nKey Challenges\nâ€¢ Confusion over job eligibility for PR pathways\nâ€¢ No tools directly mapping jobs to PR eligibility criteria\nâ€¢ Need for reliable low-latency infrastructure\nâ€¢ Requirement for scalable and secure file delivery\nâ€¢ Need for cost-efficient deployment without sacrificing reliability\n\nSolutions\nâ€¢ Implemented Cloudflare for enhanced security and performance\nâ€¢ Configured offsite backup storage in AWS S3\nâ€¢ Established immutable backups in AWS S3\nâ€¢ Created comprehensive documentation for operational procedures\n\nBenefits Delivered\nâ€¢ Global performance with low latency through Cloudflare\nâ€¢ Secure and reliable file handling with AWS S3\nâ€¢ Cost-effective infrastructure combining VPS hosting, Cloudflare, and S3",
            learnMoreHref: "/contact"
          },
          {
            title: "Deterministic AI Enterprise Intelligence Platform",
            body:
              "Enterprise intelligence platform combining AI and rule engines to analyze enterprise data and deliver reliable, explainable decision support.",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&q=80",
            details:
              "Overview\nâ€¢ Our client is a technology-driven enterprise organization focused on transforming how businesses analyze data and make operational decisions.\nâ€¢ Traditional enterprise analytics platforms often rely on dashboards, manual analysis, and business intelligence tools that require human interpretation before action can be taken. While large language models (LLMs) provide powerful language capabilities, they often lack deterministic control, auditability, and reliability for enterprise decision-making.\nâ€¢ The client wanted to build a next-generation enterprise intelligence platform that combines the reasoning power of LLMs with deterministic domain logic engines. The goal was to create a system capable of analyzing enterprise data, applying rule-based intelligence, and delivering clear, explainable insights to business users through natural language interfaces.\n\nTechnology Stack\nâ€¢ Python\nâ€¢ FastAPI\nâ€¢ PostgreSQL\nâ€¢ Redis\nâ€¢ RBAC Framework\nâ€¢ Open AI\nâ€¢ Docker\nâ€¢ Pinecone\nâ€¢ Next JS\nâ€¢ Enterprise APIs\n\nKey Challenges\nâ€¢ LLMs can hallucinate information and make inconsistent decisions.\nâ€¢ Black-box AI models fail compliance and audit requirements.\nâ€¢ Same input must always produce the same decision output.\nâ€¢ Different industries require different rules and metrics.\nâ€¢ Need to combine structured and unstructured data sources.\n\nSolutions\nâ€¢ Developed an AI Enterprise Intelligence Platform integrating a deterministic domain logic engine.\nâ€¢ Separated language understanding from decision logic for reliability.\nâ€¢ Used a configuration-driven domain architecture for customization.\nâ€¢ Included a signal computation layer for meaningful metrics.\nâ€¢ Implemented a rule engine for structured decision outputs.\nâ€¢ Created a scoring engine for prioritized intelligence.\nâ€¢ Established enterprise guardrails for compliance controls.\nâ€¢ Controlled LLM integration for natural language capabilities.\n\nBenefits Delivered\nâ€¢ Reliable AI decision intelligence driven by deterministic rules.\nâ€¢ Every insight is traceable to signals, rules, and scores.\nâ€¢ Scalable across industries with minimal effort.\nâ€¢ Faster business insights through natural language queries.\nâ€¢ Enterprise-grade security with access control and audit logging.",
            learnMoreHref: "/contact"
          },
          {
            title: "AI-Powered Consulting Procurement Automation Platform",
            body:
              "AI-powered platform that automates supplier proposal review, pricing checks, and compliance-helping procurement teams save time, reduce risks, and decide faster.",
            image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&auto=format&q=80",
            details:
              "Overview\nâ€¢ Our client is a large company that regularly hires external consultants and service providers for projects - from strategy and IT to operations and transformation. Every time a supplier sends a proposal or Statement of Work (SOW), multiple people (business users, procurement specialists, legal teams) had to carefully read and check dozens of pages to make sure everything followed company policies, pricing guidelines, and strategic rules. This happened many times every month.\n\nTechnology Stack\nâ€¢ Python\nâ€¢ LangChain\nâ€¢ LangGraph\nâ€¢ Azure\nâ€¢ OpenAI\n\nKey Challenges\nâ€¢ Reviewing long proposals took hours or even days.\nâ€¢ Risk of human error in contract clauses and pricing.\nâ€¢ Inconsistent formats of supplier documents.\nâ€¢ Manual price benchmarking against internal rates.\nâ€¢ Lack of clear decision data.\n\nSolutions\nâ€¢ Easy upload and instant reading of proposals.\nâ€¢ Automatic smart checks for compliance and pricing accuracy.\nâ€¢ Clear, human-friendly report with actionable insights.\n\nBenefits Delivered\nâ€¢ Cut proposal review time by 60-80%.\nâ€¢ Far fewer mistakes and compliance problems.\nâ€¢ Real cost savings by identifying overpriced proposals.\nâ€¢ Happier procurement and business teams.\nâ€¢ Consistent decision-making across reviews.\nâ€¢ Better supplier negotiations with clear facts.",
            learnMoreHref: "/contact"
          },
          {
            title: "AI Ticket Opportunity Detection System for Event Brokers",
            body:
              "An AI-powered intelligence platform that monitors ticketing sites, announcements, and emails to instantly alert brokers about presale opportunities in real time.",
            image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&q=80",
            details:
              "Overview\nâ€¢ Our client is a U.S.-based ticket intelligence platform that helps ticket brokers and event professionals identify presale opportunities for concerts, tours, and major live events. The platform focuses on detecting early signals of ticket availability across multiple online sources so brokers can act quickly and secure tickets before they become widely available.\nâ€¢ In the competitive ticket resale industry, timing is critical. Even a few minutes can determine whether an opportunity is captured or missed. To strengthen their capabilities, the client required a robust automated system capable of detecting ticket opportunities in real time and delivering instant alerts to their internal team and broker network.\n\nTechnology Stack\nâ€¢ Python\nâ€¢ FastAPI\nâ€¢ PostgreSQL\nâ€¢ Redis\nâ€¢ Docker\nâ€¢ Playwright\nâ€¢ Gmail API\nâ€¢ Signal CLI\nâ€¢ Twilio\nâ€¢ BeautifulSoup\nâ€¢ Ticketmaster Discovery API\nâ€¢ SendGrid\nâ€¢ Google Custom Search API\n\nKey Challenges\nâ€¢ Monitoring fragmented data sources for presale opportunities was inefficient.\nâ€¢ Need for a system capable of real-time detection of opportunities.\nâ€¢ System required to filter duplicates and avoid irrelevant alerts.\nâ€¢ Alerts had to be delivered across multiple notification channels.\nâ€¢ Needed a reliable system for continuous 24/7 monitoring.\n\nSolutions\nâ€¢ Developed a modular monitoring engine for scanning multiple sources.\nâ€¢ Implemented an intelligent detection engine with classification logic.\nâ€¢ Established a deduplication mechanism for alerts.\nâ€¢ Created a real-time notification engine for instant alerts.\nâ€¢ Built a modular architecture for scalable monitoring.\nâ€¢ Deployed the system in a containerized environment with high availability.\n\nBenefits Delivered\nâ€¢ Faster detection of ticket opportunities across multiple sources.\nâ€¢ Immediate real-time alerts for presale opportunities.\nâ€¢ Reduced need for manual monitoring of platforms.\nâ€¢ Improved quality of signals with reduced alert noise.\nâ€¢ Scalable system for future growth and additional monitoring.",
            learnMoreHref: "/contact"
          },
          {
            title: "Smarter Procurement: Faster, Scalable, Transparent",
            body:
              "Discover how we enhanced an AI-powered procurement system, streamlining processes, boosting productivity, and improving communication for resellers.",
            image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format&q=80",
            details:
              "Overview\nâ€¢ The client is a USA-based software development company that specializes in creating advanced software solutions powered by artificial intelligence (AI). Their flagship platform is an AI-driven automated procurement system designed to streamline and accelerate procurement operations for resellers.\n\nTechnology Stack\nâ€¢ GCP\nâ€¢ Vercel\nâ€¢ React\nâ€¢ Node.js\nâ€¢ Express.js\nâ€¢ MongoDB\n\nKey Challenges\nâ€¢ Manual procurement workflows caused delays.\nâ€¢ Limited visibility due to lack of central dashboard.\nâ€¢ Disorganized communication across different platforms.\nâ€¢ Scalability issues with growing reseller base.\n\nSolutions\nâ€¢ Real-time dashboard for procurement metrics.\nâ€¢ Automated notifications for RFQ management.\nâ€¢ Simplified PO creation and tracking.\nâ€¢ Delivery tracking module for accuracy.\nâ€¢ Centralized vendor records management.\nâ€¢ Insightful analytics reports.\nâ€¢ Streamlined user access control.\nâ€¢ Organized records for contracting officers.\nâ€¢ Automated email and invoice templates.\n\nBenefits Delivered\nâ€¢ 20x improvement in productivity.\nâ€¢ Greater operational transparency.\nâ€¢ Improved communication and coordination.\nâ€¢ 0 error reduction from automated forms.\nâ€¢ Scalable architecture for growing transactions.",
            learnMoreHref: "/contact"
          }
        ]
      },
      {
        title: "Voice AI & Conversational Systems",
        items: [
          {
            title: "SERYNA - Emotionally Intelligent Voice AI Companion",
            body:
              "A seamless fusion of LLaMA3, FAISS, and ElevenLabs delivering real-time empathetic interactions. SERYNA provides non-judgmental support for users seeking emotional clarity during difficult moments.",
            image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=800&auto=format&q=80",
            details:
              "Overview\nâ€¢ The client is a Canada-based IT solutions provider specializing in custom software development, mobile and web applications, and emerging technologies. They envisioned an emotionally intelligent, voice-interactive AI companion for users seeking non-judgmental support in emotionally difficult situations such as loneliness, stress, or anxiety.\n\nTechnology Stack\nâ€¢ Python\nâ€¢ Flask\nâ€¢ LLaMA3\nâ€¢ Hugging Face\nâ€¢ ElevenLabs\nâ€¢ FAISS\n\nKey Challenges\nâ€¢ Large and unstructured dataset requiring significant cleaning and deduplication.\nâ€¢ Computationally demanding embedding of high-volume conversations.\nâ€¢ Need for careful optimization of indexing parameters for FAISS.\nâ€¢ Preservation of emotional and contextual nuance in LLM prompt formatting.\nâ€¢ Secure cross-origin communication for user data privacy during processing.\nâ€¢ Real-time speech-to-text and text-to-speech integration for voice conversations.\nâ€¢ Implementation of a multi-stage cleaning pipeline to remove semantic duplicates.\nâ€¢ Reduced context retrieval time to under 100ms using FAISS.\n\nSolutions\nâ€¢ Optimized hardware utilization and vectorization pipelines for computational efficiency.\nâ€¢ Careful tuning of FAISS indexing parameters for accurate retrieval.\nâ€¢ Focused on emotional and contextual response crafting in AI interactions.\nâ€¢ Enhanced secure integration methodologies for frontend-backend communication.\nâ€¢ Implemented real-time voice synthesis capabilities for seamless interaction.\nâ€¢ A robust multi-stage data cleaning pipeline to improve training data quality.\n\nBenefits Delivered\nâ€¢ 85% improvement in user emotional satisfaction compared to standard bots.\nâ€¢ 40ms reduction in average response latency.\nâ€¢ 10x scalability factor for conversational memory growth.",
            learnMoreHref: "/contact"
          }
        ]
      },
      {
        title: "IoT & Edge Intelligence",
        items: [
          {
            title: "AI Medical Waste Monitoring System for Safe Disposal",
            body:
              "AI-powered system detecting improper medical waste disposal in real time, including sharps. Improves safety, ensures compliance, and provides audit-ready logs.",
            image: "https://images.unsplash.com/photo-1576671081837-49000212a370?w=800&auto=format&q=80",
            details:
              "Overview\nâ€¢ A leading healthcare facility managing high volumes of biomedical and hazardous waste daily. They needed foolproof segregation, instant violation detection, and strong audit documentation all without compromising staff time or patient privacy.\n\nTechnology Stack\nâ€¢ YOLO\nâ€¢ AWS\nâ€¢ SSD (MobileNet)\nâ€¢ OpenCV\nâ€¢ IoT sensors\n\nKey Challenges\nâ€¢ Frequent misplacement of sharps into incorrect bins\nâ€¢ Slow, unreliable manual inspections\nâ€¢ Zero real-time visibility into improper disposals\nâ€¢ Incomplete or inaccurate waste-type tracking for regulatory audits\nâ€¢ Constant pressure to avoid fines and improve safety scores\nâ€¢ Overworked clinical teams unable to take on more monitoring tasks\n\nSolutions\nâ€¢ IoT sensors instantly detect every waste drop\nâ€¢ Advanced AI classifies items as sharps, gloves, general medical waste, or others\nâ€¢ Real-time alerts trigger on wrong item entries or full bins\nâ€¢ Event logs and images uploaded to AWS for review and compliance\nâ€¢ Privacy-first design with no continuous video recording\nâ€¢ User-friendly web dashboard for live bin status and alerts\nâ€¢ Lightning-fast local decisions with secure cloud storage\n\nBenefits Delivered\nâ€¢ Dramatically reduced undetected sharps misplacements\nâ€¢ Immediate staff intervention preventing hazards\nâ€¢ Achieved 85-90% real-world accuracy\nâ€¢ Fully automated waste-type reports for audits\nâ€¢ Continuous model improvement via secure AWS uploads\nâ€¢ Single dashboard visibility across monitored bins\nâ€¢ Lower risk of fines and compliance violations\nâ€¢ Freed up valuable staff time while improving safety",
            learnMoreHref: "/contact"
          },
          {
            title: "AI-Powered IoT for Smarter Home Automation (AIVA)",
            body:
              "Smart IoT solution for homes: experience real-time automation, voice control, and seamless device integration with enhanced privacy.",
            image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&q=80",
            details:
              "Overview\nâ€¢ Smart IoT solution for homes: experience real-time automation, voice control, and seamless device integration with enhanced privacy.\n\nMetadata\nâ€¢ Tags: AI, IoT, Smart Home\nâ€¢ Detail page: Not currently discoverable via browser traversal/crawl in this pass."
          },
          {
            title: "AIVA: Privacy-First Edge AI",
            body:
              "All-in-One Smart Home AI Assistant with Edge Computing. Discover how we built a privacy-first smart home assistant with custom IoT hardware and edge AI for real-time control, biometric access, and device learning.",
            image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&q=80",
            details:
              "Overview\nâ€¢ All-in-One Smart Home AI Assistant with Edge Computing. Discover how we built a privacy-first smart home assistant with custom IoT hardware and edge AI for real-time control, biometric access, and device learning.\n\nMetadata\nâ€¢ Tags: Edge AI, Smart Home, Privacy\nâ€¢ Detail page: Not currently discoverable via browser traversal/crawl in this pass."
          },
          {
            title: "IoT-Based Cost-Effective Electricity Generation and Monitoring System",
            body:
              "An innovative IoT-powered decentralized energy solution with real-time monitoring, remote control, and advanced analytics to optimize electricity generation and management across multiple stations.",
            image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&auto=format&q=80",
            details:
              "Overview\nâ€¢ A forward-thinking client approached us to design a cost-effective, IoT-based electricity generation solution. While similar in concept to solar panel setups, the client's vision expanded into a fully integrated hardware-software ecosystem capable of generating electricity while offering advanced monitoring, control, and analytics for each rooftop-installed unit.\n\nTechnology Stack\nâ€¢ Python\nâ€¢ AWS\nâ€¢ Nodejs\nâ€¢ React\nâ€¢ MongoDB\n\nKey Challenges\nâ€¢ Develop hardware for rooftop electricity generation\nâ€¢ Create a centralized system for remote monitoring and control\nâ€¢ Provide a platform for tracking electricity generation and system adjustments\nâ€¢ Establish an ERP system for device management and integration\nâ€¢ Implement advanced analytics for performance assessment\n\nSolutions\nâ€¢ Designed an IoT-powered energy management ecosystem\nâ€¢ Developed custom PCBs with sensors for environmental monitoring\nâ€¢ Built a responsive frontend using React.js and Next.js\n\nBenefits Delivered\nâ€¢ Enabled real-time insights for administrators and end-users\nâ€¢ Facilitated remote control capabilities\nâ€¢ Optimized performance across multiple locations",
            learnMoreHref: "/contact"
          },
          {
            title: "IoT Integration with ERP for Optimized Production",
            body:
              "IoT-ERP integration for real-time production monitoring and automated data exchange, enhancing operational efficiency and informed decision-making.",
            image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&auto=format&q=80",
            details:
              "Overview\nâ€¢ IoT-ERP integration for real-time production monitoring and automated data exchange, enhancing operational efficiency and informed decision-making.\n\nMetadata\nâ€¢ Tags: IoT, ERP\nâ€¢ Detail page: Not currently discoverable via browser traversal/crawl in this pass."
          },
          {
            title: "Enhancing IoT Capabilities for View",
            body:
              "Enhanced IoT capabilities for View Inc. through comprehensive DevOps, cloud, mobile development, and 24/7 support, driving innovation and operational efficiency.",
            image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&auto=format&q=80",
            details:
              "Overview\nâ€¢ Our client, View Inc., a leader in smart glass and building technology, initially sought a DevOps engineer for infrastructure management. This evolved into a long-term partnership, where we supported their growing needs in full-stack development, mobile apps, IoT integration, and 24/7 infrastructure support, becoming a key part of their engineering team.\n\nTechnology Stack\nâ€¢ AWS\nâ€¢ Kubernetes\nâ€¢ MongoDB\nâ€¢ Redux\nâ€¢ Google Cloud\nâ€¢ Nodejs\nâ€¢ React\nâ€¢ Docker\n\nKey Challenges\nâ€¢ Improve IoT system capabilities for increased efficiency.\nâ€¢ Efficient management of a growing infrastructure.\nâ€¢ Building a team that can work seamlessly across different time zones.\nâ€¢ Scaling development capabilities to handle both full-stack and mobile app development.\nâ€¢ Delivering 24/7 DevOps support to guarantee system availability.\n\nSolutions\nâ€¢ Built a dedicated DevOps team to provide 24/7 operational support.\nâ€¢ Team responsible for monitoring, troubleshooting, and maintaining servers.\nâ€¢ Hired 5 Full-Stack Engineers to work in PST time zone for collaboration.\n\nBenefits Delivered\nâ€¢ Ensured optimal performance and uptime.\nâ€¢ Seamless communication and project execution.\nâ€¢ Comprehensive solutions that ensure the stability and continuous growth.",
            learnMoreHref: "/contact"
          }
        ]
      },
      {
        title: "Computer Vision, Analytics & Compliance",
        items: [
          {
            title: "Secure CaseTracking & Client Management System",
            body:
              "Secure case management platform that enables clients and case managers to track case progress, manage documents, communicate, and schedule appointments.",
            image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&auto=format&q=80",
            details:
              "Overview\nâ€¢ The client required a secure and scalable case management platform to streamline communication and collaboration between clients and case managers. The goal was to build a centralized system where users could track case progress, manage documents, schedule appointments, and communicate efficiently.\n\nTechnology Stack\nâ€¢ React Native\nâ€¢ Next JS\nâ€¢ Node JS\nâ€¢ FireBase\nâ€¢ TypeScript\nâ€¢ MondoDB\nâ€¢ AWS\n\nKey Challenges\nâ€¢ Fragmented communication across emails and manual updates\nâ€¢ Lack of real-time case visibility\nâ€¢ Document management issues\nâ€¢ Complex workflow management\n\nSolutions\nâ€¢ Centralized case management platform\nâ€¢ Real-time case tracking\nâ€¢ Secure document management\nâ€¢ Integrated communication system\nâ€¢ Task and workflow automation\nâ€¢ Role-based access and security\n\nBenefits Delivered\nâ€¢ Improved client transparency\nâ€¢ Better communication\nâ€¢ Efficient case management\nâ€¢ Operational efficiency",
            learnMoreHref: "/contact"
          },
          {
            title: "AI Platform for DPDP Compliance & Data Governance",
            body:
              "AI-powered DPDP compliance platform that automates policy management, evidence collection, and auditor reviews with secure BYOC storage in AWS, GCP, or SharePoint.",
            image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&q=80",
            details:
              "Overview\nâ€¢ Indian fintech company required to comply with the Digital Personal Data Protection (DPDP) Act 2023. They needed a centralized compliance system that never stores sensitive data outside their own cloud.\n\nTechnology Stack\nâ€¢ React JS\nâ€¢ Node JS\nâ€¢ TypeScript\nâ€¢ PostgreSQL\nâ€¢ Docker\nâ€¢ SendGrid\nâ€¢ OpenAI\nâ€¢ AWS S3\nâ€¢ Pinecone\nâ€¢ AWS\nâ€¢ GCP\nâ€¢ SharePoint adapters\n\nKey Challenges\nâ€¢ Manual tracking of 50+ DPDP controls was slow and error-prone.\nâ€¢ Strict data sovereignty rules prohibited external file uploads.\nâ€¢ Repetitive TPRM questionnaires wasted hours on manual research.\nâ€¢ Inefficient auditor reviews due to full-access sharing.\nâ€¢ No real-time compliance score or automated reports for audits.\nâ€¢ Complex support for multiple storage providers.\n\nSolutions\nâ€¢ Tenant isolation via PostgreSQL Row-Level Security and subdomain-based routing.\nâ€¢ Storage abstraction layer using signed URLs and Microsoft Graph.\nâ€¢ Pre-loaded DPDP framework for status tracking and compliance scoring.\nâ€¢ Evidence & Policy modules with tagging and expiry alerts.\nâ€¢ AI Questionnaire Assistant for auto-generated responses.\nâ€¢ Task management with email reminders and secure Auditor Portal.\n\nBenefits Delivered\nâ€¢ 70% reduction in manual compliance work.\nâ€¢ 100% data sovereignty with zero sensitive files on servers.\nâ€¢ AI reduces TPRM questionnaire time by ~75%.\nâ€¢ Real-time compliance score and instant auditor-ready reports.\nâ€¢ Secure auditor access without data risk.\nâ€¢ Single platform works seamlessly across AWS, GCP, and SharePoint.",
            learnMoreHref: "/contact"
          },
          {
            title: "AI Knowledge Graph Platform for Enterprise Data Intelligence",
            body:
              "AI-powered knowledge graph platform that connects ERP systems, emails, and operational data into a unified system enabling semantic search, natural language queries, and insights.",
            image: "https://images.unsplash.com/photo-1545987796-200677ee1011?w=800&auto=format&q=80",
            details:
              "Overview\nâ€¢ Our client is a Netherlands-based manufacturing company specializing in precision laser cutting services for industrial clients. The company manages a large volume of operational data, including customer records, production orders, invoices, support tickets, and email communications.\nâ€¢ Over time, these data sources were stored in different systems such as ERP databases and email servers. While each system served a specific operational purpose, the lack of integration between them created challenges in accessing comprehensive information about customers, orders, and support issues.\nâ€¢ The organization needed a solution that could connect these fragmented data sources and allow employees to retrieve insights quickly without navigating multiple systems.\n\nTechnology Stack\nâ€¢ Python\nâ€¢ FastAPI\nâ€¢ Neo4j\nâ€¢ Pandas\nâ€¢ huggingface\nâ€¢ NumPy\nâ€¢ Playwright\nâ€¢ Streamlit\nâ€¢ OpenAI\n\nKey Challenges\nâ€¢ Fragmented Business Data\nâ€¢ Manual Cross-Referencing\nâ€¢ Limited Data Insights\nâ€¢ Complex Database Structure\nâ€¢ Lack of Natural Interaction\n\nSolutions\nâ€¢ Data Integration Pipeline\nâ€¢ Graph-Based Data Modeling\nâ€¢ Taxonomy and Controlled Vocabulary\nâ€¢ AI-Powered Natural Language Query Engine\nâ€¢ Semantic Search Using Embeddings\nâ€¢ Interactive Chat Interface\n\nBenefits Delivered\nâ€¢ Unified Business Data\nâ€¢ Faster Information Retrieval\nâ€¢ Improved Operational Visibility\nâ€¢ Semantic Search Capabilities\nâ€¢ Scalable Data Architecture",
            learnMoreHref: "/contact"
          },
          {
            title: "Casino Analytics: User Engagement Analysis",
            body:
              "Improving player engagement through high-velocity data analytics and secure engineering. Ingesting and analyzing terabytes of player data to drive behavioral insights while ensuring the highest level of security and regulatory compliance.",
            image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&auto=format&q=80",
            details:
              "Overview\nâ€¢ Explore Stellarmind.ai's AI, IoT, and AR solutions to boost efficiency and innovation. Discover custom software solutions tailored to meet your business needs.\n\nTechnology Stack\nâ€¢ Python\nâ€¢ Django\nâ€¢ Airflow\nâ€¢ Snowflake\n\nKey Challenges\nâ€¢ Fragmented data sources\nâ€¢ Massive volumes of data\nâ€¢ Hindered real-time decision-making\nâ€¢ Inadequate player profiling\n\nSolutions\nâ€¢ Implemented Apache Airflow for data orchestration\nâ€¢ Built ingestion engines using Snowpark and Python\nâ€¢ Embedded rigorous data governance with dynamic masking and encryption\n\nBenefits Delivered\nâ€¢ 30% improvement in player engagement\nâ€¢ 500+ daily concurrent pipelines\nâ€¢ 40% reduction in compute costs\nâ€¢ GDPR & AML compliance with role-based access control",
            learnMoreHref: "/contact"
          },
          {
            title: "Automated SOC 2 Audit Review with Mistral AI",
            body:
              "AI-driven solution automated SOC 2 report evaluation for a cybersecurity firm, enhancing report accuracy, reducing manual efforts, and boosting compliance.",
            image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format&q=80",
            details:
              "Overview\nâ€¢ The client is a USA-based cybersecurity firm offering end-to-end solutions in data protection, privacy, and regulatory compliance. Their services span penetration testing, vulnerability assessments, and comprehensive audits for frameworks like SOC 2, ISO 27001, HIPAA, and GDPR.\n\nTechnology Stack\nâ€¢ Python\nâ€¢ Hugging Face\nâ€¢ Mistral-7B\nâ€¢ AWS (EC2)\nâ€¢ AWS (S3)\nâ€¢ MongoDB\n\nKey Challenges\nâ€¢ Inconsistent formats of reports with varying structures and language.\nâ€¢ Lack of a uniform schema complicating content mapping to Trust Services Criteria (TSC).\nâ€¢ Subjective evaluation of report quality based on nuanced factors like clarity and completeness.\nâ€¢ Need for a robust multi-dimensional scoring framework for fair evaluations.\nâ€¢ Requirement to chunk and embed SOC 2 documents without losing context.\n\nSolutions\nâ€¢ Preprocessed SOC 2 reports by removing noise and normalizing structures.\nâ€¢ Segmented data into categories corresponding to the Trust Services Criteria.\nâ€¢ Model evaluated categories and returned quality scores with justifications.\nâ€¢ Parsed tables from PDF reports for TSC mappings and audit procedures.\nâ€¢ Designed token-efficient prompts for context-aware LLM use.\nâ€¢ Converted document segments into embeddings for efficient retrieval.\n\nBenefits Delivered\nâ€¢ Significantly reduced manual effort in SOC 2 report review.\nâ€¢ Delivered structured evaluations that minimize human bias.\nâ€¢ Enabled intelligent retrieval ensuring only relevant information is analyzed.\nâ€¢ Provided detailed explanations for scores, enhancing transparency.\nâ€¢ Improved compliance documentation by identifying gaps in reports.",
            learnMoreHref: "/contact"
          },
          {
            title: "AI-Powered Gameplay Analysis System",
            body:
              "Transforming screen recordings into actionable performance insights with high-fidelity computer vision and neural networks for competitive gaming.",
            image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&auto=format&q=80",
            details:
              "Overview\nâ€¢ Our client is a UAE-based esports organization specializing in competitive gaming and event management\n\nTechnology Stack\nâ€¢ Python\nâ€¢ YoloV8\nâ€¢ Scikit_Learn\nâ€¢ Tesseract_OCR\nâ€¢ OpenCV\nâ€¢ Next.js\nâ€¢ Node.js\nâ€¢ MongoDB\n\nKey Challenges\nâ€¢ Manual review time is slow.\nâ€¢ Restricted game APIs block functionality.\nâ€¢ Handling diverse resolutions and visual skins.\nâ€¢ Need to process 60 frames per second.\nâ€¢ Dynamic lighting changes affect OCR reliability.\nâ€¢ Balancing depth of analysis with processing cost.\n\nSolutions\nâ€¢ Optimized video pipeline reduces redundant computation by 40%.\nâ€¢ Custom-trained YOLOv8 weights for event detection.\nâ€¢ Insight engine correlates positioning with win rates.\n\nBenefits Delivered\nâ€¢ 60-70% reduction in session review time.\nâ€¢ Automated tagging of gameplay clips.\nâ€¢ Immediate feedback through low-latency processing.\nâ€¢ Deep insights into positioning, timing, and aim.",
            learnMoreHref: "/contact"
          },
          {
            title: "Implementing Sentiment Analysis Using AI/ML Techniques",
            body:
              "Implemented sentiment analysis for an e-commerce company, categorizing customer reviews into positive, neutral, or negative sentiments using advanced AI/ML techniques.",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&q=80",
            details:
              "Overview\nâ€¢ Implemented sentiment analysis for an e-commerce company, categorizing customer reviews into positive, neutral, or negative sentiments using advanced AI/ML techniques.\n\nMetadata\nâ€¢ Tags: AI/ML, Sentiment Analysis\nâ€¢ Detail page: Not currently discoverable via browser traversal/crawl in this pass."
          },
          {
            title: "AI-Powered Employee Engagement System",
            body:
              "Developed an AI-powered system to enhance employee engagement by tracking behavior, monitoring moods, and delivering personalized greetings. Integrated with the HRMS to streamline attendance tracking and mood analysis.",
            image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&q=80",
            details:
              "Overview\nâ€¢ Our client sought to enhance employee engagement by leveraging AI and machine learning to track office behavior, monitor moods, and deliver personalized greetings. The solution also needed to integrate with their HRMS tool to streamline attendance and improve overall employee satisfaction.\n\nTechnology Stack\nâ€¢ AWS\nâ€¢ FFmpeg\nâ€¢ Opencv\nâ€¢ Pytorch\nâ€¢ Tensorflow\nâ€¢ Node Js\nâ€¢ React\n\nKey Challenges\nâ€¢ Improve employee engagement\nâ€¢ Assess moods\nâ€¢ Automated attendance tracking\nâ€¢ Integrate with HRMS tool\nâ€¢ Detect office absences\n\nSolutions\nâ€¢ Developed AI-powered engagement system\nâ€¢ Integrated facial recognition for employee tracking\nâ€¢ Automated attendance tracking via HRMS\n\nBenefits Delivered\nâ€¢ Real-time mood analysis\nâ€¢ Enhanced workplace interactions\nâ€¢ Valuable insights into employee well-being",
            learnMoreHref: "/contact"
          }
        ]
      },
      {
        title: "AR/3D, Creative & Mobile Apps",
        items: [
          {
            title: "Krushiratn: Digital Agriculture Marketplace Platform",
            body:
              "Smart agriculture platform that helps farmers access crop advisory, connect with agribusinesses, and use digital tools and AI insights to improve productivity.",
            image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800&auto=format&q=80",
            details:
              "Overview\nâ€¢ The client aimed to build Krushiratn, a digital agriculture platform designed to empower farmers with technology-driven solutions. The goal was to create a unified ecosystem where farmers can access crop information, sell produce, connect with companies, and receive AI-powered assistance for agricultural queries.\n\nTechnology Stack\nâ€¢ Python\nâ€¢ FastAPI\nâ€¢ React JS\nâ€¢ Express JS\nâ€¢ Node JS\nâ€¢ Groq\nâ€¢ Google Translator APIs\nâ€¢ OpenAI\nâ€¢ MySQL\nâ€¢ RAG\nâ€¢ Sarvam AI\n\nKey Challenges\nâ€¢ Fragmented Agricultural Marketplace\nâ€¢ Lack of Digital Access for Farmers\nâ€¢ Inefficient Crop Trading Process\nâ€¢ Language and Communication Barriers\nâ€¢ Difficulty Accessing Agricultural Knowledge\n\nSolutions\nâ€¢ AI-Powered Agricultural Assistant\nâ€¢ Digital Crop Marketplace\nâ€¢ Buy-Sell Marketplace for Agricultural Products\nâ€¢ Crop Advisory and Information System\nâ€¢ Admin Management System\n\nBenefits Delivered\nâ€¢ Improved Market Access for Farmers\nâ€¢ Localized AI Assistance\nâ€¢ Streamlined Crop Trading\nâ€¢ Increased Transparency\nâ€¢ Scalable Agriculture Ecosystem",
            learnMoreHref: "/contact"
          },
          {
            title: "AI-Powered Automated Forex Trading & Intelligence System",
            body:
              "Discover how we transformed an unstable forex trading platform into a robust, scalable intelligence system with AI-powered automation, real-time synchronization, and intelligent risk management.",
            image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&auto=format&q=80",
            details:
              "Overview\nâ€¢ The client operates a forex and stock market trading platform focused on enabling automated, data-driven trading. Their platform leverages market signals, algorithmic strategies, and real-time analytics to help users execute trades and monitor performance efficiently.\n\nTechnology Stack\nâ€¢ Python\nâ€¢ FastAPI\nâ€¢ SQLite\nâ€¢ TypeScript\nâ€¢ Node JS\nâ€¢ Docker\nâ€¢ Digital Ocean\nâ€¢ TradingView API\nâ€¢ OANDA API\nâ€¢ Next JS\nâ€¢ JWT\n\nKey Challenges\nâ€¢ System instability and inconsistent results\nâ€¢ No accurate trade synchronization\nâ€¢ Slow and difficult debugging\nâ€¢ Incorrect calculations impacting risk\nâ€¢ Security and system gaps\n\nSolutions\nâ€¢ System stabilization and reliability fixes\nâ€¢ Real-time trade synchronization engine\nâ€¢ Faster debugging with local environment setup\nâ€¢ Improved risk and position management\nâ€¢ Security and backend strengthening\nâ€¢ Complete trading ecosystem development\nâ€¢ Deployment and live trading enablement\nâ€¢ AI-powered intelligence layer\n\nBenefits Delivered\nâ€¢ Reliable and stable trading system\nâ€¢ Accurate and real-time data\nâ€¢ Faster issue resolution\nâ€¢ Safer risk management\nâ€¢ Production-ready security\nâ€¢ Scalable trading platform\nâ€¢ AI-driven performance growth",
            learnMoreHref: "/contact"
          },
          {
            title: "Next-Gen Archery with AR, AI & 3D Tools",
            body:
              "A cutting-edge iOS application combining Augmented Reality (AR), Artificial Intelligence (AI), and 3D visualization to revolutionize archery performance tracking, delivering real-time trajectory insights and precision shot analysis.",
            image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&auto=format&q=80",
            details:
              "Overview\nâ€¢ A cutting-edge iOS application combining Augmented Reality (AR), Artificial Intelligence (AI), and 3D visualization to revolutionize archery performance tracking, delivering real-time trajectory insights and precision shot analysis.\n\nMetadata\nâ€¢ Tags: AR, AI, 3D Visualization, Sports Technology\nâ€¢ Detail page: Not currently discoverable via browser traversal/crawl in this pass."
          },
          {
            title: "AR Educational App for Children",
            body:
              "Developed an interactive AR educational app for children, combining 3D characters, real-time AI interactions, and book-based learning for an engaging experience.",
            image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&auto=format&q=80",
            details:
              "Overview\nâ€¢ Our client approached us with an innovative idea to develop an augmented reality (AR) application for children. The goal was to create an interactive educational app that would enhance learning by bringing book characters to life and enabling interactive conversations.\n\nTechnology Stack\nâ€¢ Nodejs\nâ€¢ React\nâ€¢ PostgreSQL\nâ€¢ MongoDB\nâ€¢ Google Cloud\nâ€¢ Docker\nâ€¢ Unity 3D\nâ€¢ Maya 3D\nâ€¢ AI Interaction\n\nKey Challenges\nâ€¢ Real-Time AR Interaction\nâ€¢ Unity 3D for AR Development\nâ€¢ Book Page Scanning\nâ€¢ Character Animation\nâ€¢ Voice Integration\nâ€¢ AI Interaction\nâ€¢ Maya 3D for Character Creation\nâ€¢ Interactive Narration and Q&A\n\nSolutions\nâ€¢ Designed an AR app with interactive elements for children.\nâ€¢ Utilized Unity 3D to develop the AR functionalities, enabling real-time character activation and interaction.\n\nBenefits Delivered\nâ€¢ Enhances children's learning experiences.\nâ€¢ Creates lifelike 3D characters.\nâ€¢ Meets complex requirements for educational technology projects.",
            learnMoreHref: "/contact"
          },
          {
            title: "Photo and Video Editing Mobile App",
            body:
              "Developed a custom mobile app for advanced photo and video editing with real-time effects, artistic filters, and Bitmoji integration, without using third-party SDKs.",
            image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&auto=format&q=80",
            details:
              "Overview\nâ€¢ Our client approached us with the ambitious goal of creating a mobile app for photo and video editing with advanced functionalities, without relying on any third-party SDKs. The app needed to be robust and feature-rich, catering to both iOS and Android platforms.\n\nTechnology Stack\nâ€¢ AWS\nâ€¢ Kubernetes\nâ€¢ Nodejs\nâ€¢ React\nâ€¢ PostgreSQL\nâ€¢ MongoDB\nâ€¢ NextdotJS\nâ€¢ Docker\n\nKey Challenges\nâ€¢ No Third-Party SDKs\nâ€¢ Create Touch Fast/Slow Motion Editing While Recording\nâ€¢ Convert Pictures to Beautiful Art\nâ€¢ Quickly Trim, Cut, Crop, and Share\nâ€¢ Add Snapchat Bitmojis Directly to Videos\nâ€¢ Add Filters Like Snapchat and Instagram\nâ€¢ Core Camera Features for iOS\nâ€¢ Core Camera Features and FFmpeg for Android\nâ€¢ Custom Filters and Effects\n\nSolutions\nâ€¢ Enabled fast and slow-motion effects during video recording with one touch\nâ€¢ Applied artistic filters and effects to transform photos\n\nBenefits Delivered\nâ€¢ Feature-rich photo and video editing app\nâ€¢ Advanced functionalities like fast/slow motion editing\nâ€¢ Artistic photo transformation\nâ€¢ Bitmoji integration",
            learnMoreHref: "/contact"
          }
        ]
      }
    ],
    capabilities: [
      // Fallback flat list retained for existing tests and consumers.
      // Grouped rendering uses `capabilityGroups` above.
      {
        title: "AI-Driven Sanctions Intelligence & Real-Time Compliance System",
        body:
          "AI-powered aggregation and verification system that continuously collects global sanctions databases and screens users in real time to ensure regulatory compliance.",
        details:
          "Overview\nâ€¢ Our client is a compliance-focused organization that requires strict background verification during account onboarding. They needed an automated system to continuously collect and update global sanctions data from multiple government sources and screen users against it in real time. This ensures regulatory compliance while preventing high-risk or restricted individuals from accessing the platform.\n\nTechnology Stack\nâ€¢ Python\nâ€¢ MySQL\nâ€¢ PostgreSQL\nâ€¢ Cron Jobs (Linux)\n\nKey Challenges\nâ€¢ High accuracy required due to legal and financial implications\nâ€¢ False positives/negatives could impact business operations\nâ€¢ Efficient parsing and storage required for large datasets\nâ€¢ Needed near real-time synchronization to avoid outdated checks\nâ€¢ Required deduplication and entity resolution due to name variations\nâ€¢ Lack of standard structure across datasets\nâ€¢ Needed robust retry and error-handling mechanisms due to changing government endpoints\n\nSolutions\nâ€¢ Built a centralized parser to handle XML, Excel, and API responses\nâ€¢ Implemented cron jobs running every 3 hours for continuous synchronization\nâ€¢ Applied name matching, alias mapping, and unique identifiers for normalization\nâ€¢ Added fallback logic and logging for failed scrapes to ensure resilience\nâ€¢ Indexed key fields and optimized database design for fast search\nâ€¢ Integrated database with onboarding workflow for real-time screening\n\nBenefits Delivered\nâ€¢ Automated screening ensures adherence to global regulatory requirements\nâ€¢ Immediate identification of high-risk individuals during account creation\nâ€¢ Eliminated manual verification effort, significantly reducing overhead\nâ€¢ Aggregates data from multiple global authorities\nâ€¢ Provides a consistent, reliable dataset for accurate risk assessment\nâ€¢ Can accommodate future expansion in data sources with minimal changes",
        learnMoreHref: "/contact"
      },
      {
        title: "AI Job Platform for Immigration & PR-Eligible Opportunities",
        body:
          "AI-powered job search platform that helps skilled professionals find immigration-friendly roles and identify employment opportunities aligned with PR pathways.",
        details:
          "Overview\nâ€¢ The client is a Canada-focused immigration technology startup aiming to simplify the PR pathway for skilled immigrants worldwide. Their mission is to eliminate the confusion around which jobs genuinely qualify for Canadian Permanent Residency and give newcomers a clear, structured path toward building a life in Canada.\n\nTechnology Stack\nâ€¢ Python\nâ€¢ Next JS\nâ€¢ AWS S3\nâ€¢ Hostinger VPS\nâ€¢ PHP\nâ€¢ Cloudflare\n\nKey Challenges\nâ€¢ Confusion over job eligibility for PR pathways\nâ€¢ No tools directly mapping jobs to PR eligibility criteria\nâ€¢ Need for reliable low-latency infrastructure\nâ€¢ Requirement for scalable and secure file delivery\nâ€¢ Need for cost-efficient deployment without sacrificing reliability\n\nSolutions\nâ€¢ Implemented Cloudflare for enhanced security and performance\nâ€¢ Configured offsite backup storage in AWS S3\nâ€¢ Established immutable backups in AWS S3\nâ€¢ Created comprehensive documentation for operational procedures\n\nBenefits Delivered\nâ€¢ Global performance with low latency through Cloudflare\nâ€¢ Secure and reliable file handling with AWS S3\nâ€¢ Cost-effective infrastructure combining VPS hosting, Cloudflare, and S3",
        learnMoreHref: "/contact"
      },
      {
        title: "Deterministic AI Enterprise Intelligence Platform",
        body:
          "Enterprise intelligence platform combining AI and rule engines to analyze enterprise data and deliver reliable, explainable decision support.",
        details:
          "Overview\nâ€¢ Our client is a technology-driven enterprise organization focused on transforming how businesses analyze data and make operational decisions.\nâ€¢ Traditional enterprise analytics platforms often rely on dashboards, manual analysis, and business intelligence tools that require human interpretation before action can be taken. While large language models (LLMs) provide powerful language capabilities, they often lack deterministic control, auditability, and reliability for enterprise decision-making.\nâ€¢ The client wanted to build a next-generation enterprise intelligence platform that combines the reasoning power of LLMs with deterministic domain logic engines. The goal was to create a system capable of analyzing enterprise data, applying rule-based intelligence, and delivering clear, explainable insights to business users through natural language interfaces.\n\nTechnology Stack\nâ€¢ Python\nâ€¢ FastAPI\nâ€¢ PostgreSQL\nâ€¢ Redis\nâ€¢ RBAC Framework\nâ€¢ Open AI\nâ€¢ Docker\nâ€¢ Pinecone\nâ€¢ Next JS\nâ€¢ Enterprise APIs\n\nKey Challenges\nâ€¢ LLMs can hallucinate information and make inconsistent decisions.\nâ€¢ Black-box AI models fail compliance and audit requirements.\nâ€¢ Same input must always produce the same decision output.\nâ€¢ Different industries require different rules and metrics.\nâ€¢ Need to combine structured and unstructured data sources.\n\nSolutions\nâ€¢ Developed an AI Enterprise Intelligence Platform integrating a deterministic domain logic engine.\nâ€¢ Separated language understanding from decision logic for reliability.\nâ€¢ Used a configuration-driven domain architecture for customization.\nâ€¢ Included a signal computation layer for meaningful metrics.\nâ€¢ Implemented a rule engine for structured decision outputs.\nâ€¢ Created a scoring engine for prioritized intelligence.\nâ€¢ Established enterprise guardrails for compliance controls.\nâ€¢ Controlled LLM integration for natural language capabilities.\n\nBenefits Delivered\nâ€¢ Reliable AI decision intelligence driven by deterministic rules.\nâ€¢ Every insight is traceable to signals, rules, and scores.\nâ€¢ Scalable across industries with minimal effort.\nâ€¢ Faster business insights through natural language queries.\nâ€¢ Enterprise-grade security with access control and audit logging.",
        learnMoreHref: "/contact"
      },
      {
        title: "Secure CaseTracking & Client Management System",
        body:
          "Secure case management platform that enables clients and case managers to track case progress, manage documents, communicate, and schedule appointments.",
        details:
          "Overview\nâ€¢ The client required a secure and scalable case management platform to streamline communication and collaboration between clients and case managers. The goal was to build a centralized system where users could track case progress, manage documents, schedule appointments, and communicate efficiently.\n\nTechnology Stack\nâ€¢ React Native\nâ€¢ Next JS\nâ€¢ Node JS\nâ€¢ FireBase\nâ€¢ TypeScript\nâ€¢ MondoDB\nâ€¢ AWS\n\nKey Challenges\nâ€¢ Fragmented communication across emails and manual updates\nâ€¢ Lack of real-time case visibility\nâ€¢ Document management issues\nâ€¢ Complex workflow management\n\nSolutions\nâ€¢ Centralized case management platform\nâ€¢ Real-time case tracking\nâ€¢ Secure document management\nâ€¢ Integrated communication system\nâ€¢ Task and workflow automation\nâ€¢ Role-based access and security\n\nBenefits Delivered\nâ€¢ Improved client transparency\nâ€¢ Better communication\nâ€¢ Efficient case management\nâ€¢ Operational efficiency",
        learnMoreHref: "/contact"
      },
      {
        title: "AI-Powered Consulting Procurement Automation Platform",
        body:
          "AI-powered platform that automates supplier proposal review, pricing checks, and compliance-helping procurement teams save time, reduce risks, and decide faster.",
        details:
          "Overview\nâ€¢ Our client is a large company that regularly hires external consultants and service providers for projects - from strategy and IT to operations and transformation. Every time a supplier sends a proposal or Statement of Work (SOW), multiple people (business users, procurement specialists, legal teams) had to carefully read and check dozens of pages to make sure everything followed company policies, pricing guidelines, and strategic rules. This happened many times every month.\n\nTechnology Stack\nâ€¢ Python\nâ€¢ LangChain\nâ€¢ LangGraph\nâ€¢ Azure\nâ€¢ OpenAI\n\nKey Challenges\nâ€¢ Reviewing long proposals took hours or even days.\nâ€¢ Risk of human error in contract clauses and pricing.\nâ€¢ Inconsistent formats of supplier documents.\nâ€¢ Manual price benchmarking against internal rates.\nâ€¢ Lack of clear decision data.\n\nSolutions\nâ€¢ Easy upload and instant reading of proposals.\nâ€¢ Automatic smart checks for compliance and pricing accuracy.\nâ€¢ Clear, human-friendly report with actionable insights.\n\nBenefits Delivered\nâ€¢ Cut proposal review time by 60-80%.\nâ€¢ Far fewer mistakes and compliance problems.\nâ€¢ Real cost savings by identifying overpriced proposals.\nâ€¢ Happier procurement and business teams.\nâ€¢ Consistent decision-making across reviews.\nâ€¢ Better supplier negotiations with clear facts.",
        learnMoreHref: "/contact"
      },
      {
        title: "AI Platform for DPDP Compliance & Data Governance",
        body:
          "AI-powered DPDP compliance platform that automates policy management, evidence collection, and auditor reviews with secure BYOC storage in AWS, GCP, or SharePoint.",
        details:
          "Overview\nâ€¢ Indian fintech company required to comply with the Digital Personal Data Protection (DPDP) Act 2023. They needed a centralized compliance system that never stores sensitive data outside their own cloud.\n\nTechnology Stack\nâ€¢ React JS\nâ€¢ Node JS\nâ€¢ TypeScript\nâ€¢ PostgreSQL\nâ€¢ Docker\nâ€¢ SendGrid\nâ€¢ OpenAI\nâ€¢ AWS S3\nâ€¢ Pinecone\nâ€¢ AWS\nâ€¢ GCP\nâ€¢ SharePoint adapters\n\nKey Challenges\nâ€¢ Manual tracking of 50+ DPDP controls was slow and error-prone.\nâ€¢ Strict data sovereignty rules prohibited external file uploads.\nâ€¢ Repetitive TPRM questionnaires wasted hours on manual research.\nâ€¢ Inefficient auditor reviews due to full-access sharing.\nâ€¢ No real-time compliance score or automated reports for audits.\nâ€¢ Complex support for multiple storage providers.\n\nSolutions\nâ€¢ Tenant isolation via PostgreSQL Row-Level Security and subdomain-based routing.\nâ€¢ Storage abstraction layer using signed URLs and Microsoft Graph.\nâ€¢ Pre-loaded DPDP framework for status tracking and compliance scoring.\nâ€¢ Evidence & Policy modules with tagging and expiry alerts.\nâ€¢ AI Questionnaire Assistant for auto-generated responses.\nâ€¢ Task management with email reminders and secure Auditor Portal.\n\nBenefits Delivered\nâ€¢ 70% reduction in manual compliance work.\nâ€¢ 100% data sovereignty with zero sensitive files on servers.\nâ€¢ AI reduces TPRM questionnaire time by ~75%.\nâ€¢ Real-time compliance score and instant auditor-ready reports.\nâ€¢ Secure auditor access without data risk.\nâ€¢ Single platform works seamlessly across AWS, GCP, and SharePoint.",
        learnMoreHref: "/contact"
      },
      {
        title: "Krushiratn: Digital Agriculture Marketplace Platform",
        body:
          "Smart agriculture platform that helps farmers access crop advisory, connect with agribusinesses, and use digital tools and AI insights to improve productivity.",
        details:
          "Overview\nâ€¢ The client aimed to build Krushiratn, a digital agriculture platform designed to empower farmers with technology-driven solutions. The goal was to create a unified ecosystem where farmers can access crop information, sell produce, connect with companies, and receive AI-powered assistance for agricultural queries.\n\nTechnology Stack\nâ€¢ Python\nâ€¢ FastAPI\nâ€¢ React JS\nâ€¢ Express JS\nâ€¢ Node JS\nâ€¢ Groq\nâ€¢ Google Translator APIs\nâ€¢ OpenAI\nâ€¢ MySQL\nâ€¢ RAG\nâ€¢ Sarvam AI\n\nKey Challenges\nâ€¢ Fragmented Agricultural Marketplace\nâ€¢ Lack of Digital Access for Farmers\nâ€¢ Inefficient Crop Trading Process\nâ€¢ Language and Communication Barriers\nâ€¢ Difficulty Accessing Agricultural Knowledge\n\nSolutions\nâ€¢ AI-Powered Agricultural Assistant\nâ€¢ Digital Crop Marketplace\nâ€¢ Buy-Sell Marketplace for Agricultural Products\nâ€¢ Crop Advisory and Information System\nâ€¢ Admin Management System\n\nBenefits Delivered\nâ€¢ Improved Market Access for Farmers\nâ€¢ Localized AI Assistance\nâ€¢ Streamlined Crop Trading\nâ€¢ Increased Transparency\nâ€¢ Scalable Agriculture Ecosystem",
        learnMoreHref: "/contact"
      },
      {
        title: "AI-Powered Automated Forex Trading & Intelligence System",
        body:
          "Discover how we transformed an unstable forex trading platform into a robust, scalable intelligence system with AI-powered automation, real-time synchronization, and intelligent risk management.",
        details:
          "Overview\nâ€¢ The client operates a forex and stock market trading platform focused on enabling automated, data-driven trading. Their platform leverages market signals, algorithmic strategies, and real-time analytics to help users execute trades and monitor performance efficiently.\n\nTechnology Stack\nâ€¢ Python\nâ€¢ FastAPI\nâ€¢ SQLite\nâ€¢ TypeScript\nâ€¢ Node JS\nâ€¢ Docker\nâ€¢ Digital Ocean\nâ€¢ TradingView API\nâ€¢ OANDA API\nâ€¢ Next JS\nâ€¢ JWT\n\nKey Challenges\nâ€¢ System instability and inconsistent results\nâ€¢ No accurate trade synchronization\nâ€¢ Slow and difficult debugging\nâ€¢ Incorrect calculations impacting risk\nâ€¢ Security and system gaps\n\nSolutions\nâ€¢ System stabilization and reliability fixes\nâ€¢ Real-time trade synchronization engine\nâ€¢ Faster debugging with local environment setup\nâ€¢ Improved risk and position management\nâ€¢ Security and backend strengthening\nâ€¢ Complete trading ecosystem development\nâ€¢ Deployment and live trading enablement\nâ€¢ AI-powered intelligence layer\n\nBenefits Delivered\nâ€¢ Reliable and stable trading system\nâ€¢ Accurate and real-time data\nâ€¢ Faster issue resolution\nâ€¢ Safer risk management\nâ€¢ Production-ready security\nâ€¢ Scalable trading platform\nâ€¢ AI-driven performance growth",
        learnMoreHref: "/contact"
      },
      {
        title: "AI Knowledge Graph Platform for Enterprise Data Intelligence",
        body:
          "AI-powered knowledge graph platform that connects ERP systems, emails, and operational data into a unified system enabling semantic search, natural language queries, and insights.",
        details:
          "Overview\nâ€¢ Our client is a Netherlands-based manufacturing company specializing in precision laser cutting services for industrial clients. The company manages a large volume of operational data, including customer records, production orders, invoices, support tickets, and email communications.\nâ€¢ Over time, these data sources were stored in different systems such as ERP databases and email servers. While each system served a specific operational purpose, the lack of integration between them created challenges in accessing comprehensive information about customers, orders, and support issues.\nâ€¢ The organization needed a solution that could connect these fragmented data sources and allow employees to retrieve insights quickly without navigating multiple systems.\n\nTechnology Stack\nâ€¢ Python\nâ€¢ FastAPI\nâ€¢ Neo4j\nâ€¢ Pandas\nâ€¢ huggingface\nâ€¢ NumPy\nâ€¢ Playwright\nâ€¢ Streamlit\nâ€¢ OpenAI\n\nKey Challenges\nâ€¢ Fragmented Business Data\nâ€¢ Manual Cross-Referencing\nâ€¢ Limited Data Insights\nâ€¢ Complex Database Structure\nâ€¢ Lack of Natural Interaction\n\nSolutions\nâ€¢ Data Integration Pipeline\nâ€¢ Graph-Based Data Modeling\nâ€¢ Taxonomy and Controlled Vocabulary\nâ€¢ AI-Powered Natural Language Query Engine\nâ€¢ Semantic Search Using Embeddings\nâ€¢ Interactive Chat Interface\n\nBenefits Delivered\nâ€¢ Unified Business Data\nâ€¢ Faster Information Retrieval\nâ€¢ Improved Operational Visibility\nâ€¢ Semantic Search Capabilities\nâ€¢ Scalable Data Architecture",
        learnMoreHref: "/contact"
      },
      {
        title: "AI Medical Waste Monitoring System for Safe Disposal",
        body:
          "AI-powered system detecting improper medical waste disposal in real time, including sharps. Improves safety, ensures compliance, and provides audit-ready logs.",
        details:
          "Overview\nâ€¢ A leading healthcare facility managing high volumes of biomedical and hazardous waste daily. They needed foolproof segregation, instant violation detection, and strong audit documentation all without compromising staff time or patient privacy.\n\nTechnology Stack\nâ€¢ YOLO\nâ€¢ AWS\nâ€¢ SSD (MobileNet)\nâ€¢ OpenCV\nâ€¢ IoT sensors\n\nKey Challenges\nâ€¢ Frequent misplacement of sharps into incorrect bins\nâ€¢ Slow, unreliable manual inspections\nâ€¢ Zero real-time visibility into improper disposals\nâ€¢ Incomplete or inaccurate waste-type tracking for regulatory audits\nâ€¢ Constant pressure to avoid fines and improve safety scores\nâ€¢ Overworked clinical teams unable to take on more monitoring tasks\n\nSolutions\nâ€¢ IoT sensors instantly detect every waste drop\nâ€¢ Advanced AI classifies items as sharps, gloves, general medical waste, or others\nâ€¢ Real-time alerts trigger on wrong item entries or full bins\nâ€¢ Event logs and images uploaded to AWS for review and compliance\nâ€¢ Privacy-first design with no continuous video recording\nâ€¢ User-friendly web dashboard for live bin status and alerts\nâ€¢ Lightning-fast local decisions with secure cloud storage\n\nBenefits Delivered\nâ€¢ Dramatically reduced undetected sharps misplacements\nâ€¢ Immediate staff intervention preventing hazards\nâ€¢ Achieved 85-90% real-world accuracy\nâ€¢ Fully automated waste-type reports for audits\nâ€¢ Continuous model improvement via secure AWS uploads\nâ€¢ Single dashboard visibility across monitored bins\nâ€¢ Lower risk of fines and compliance violations\nâ€¢ Freed up valuable staff time while improving safety",
        learnMoreHref: "/contact"
      },
      {
        title: "AI Ticket Opportunity Detection System for Event Brokers",
        body:
          "An AI-powered intelligence platform that monitors ticketing sites, announcements, and emails to instantly alert brokers about presale opportunities in real time.",
        details:
          "Overview\nâ€¢ Our client is a U.S.-based ticket intelligence platform that helps ticket brokers and event professionals identify presale opportunities for concerts, tours, and major live events. The platform focuses on detecting early signals of ticket availability across multiple online sources so brokers can act quickly and secure tickets before they become widely available.\nâ€¢ In the competitive ticket resale industry, timing is critical. Even a few minutes can determine whether an opportunity is captured or missed. To strengthen their capabilities, the client required a robust automated system capable of detecting ticket opportunities in real time and delivering instant alerts to their internal team and broker network.\n\nTechnology Stack\nâ€¢ Python\nâ€¢ FastAPI\nâ€¢ PostgreSQL\nâ€¢ Redis\nâ€¢ Docker\nâ€¢ Playwright\nâ€¢ Gmail API\nâ€¢ Signal CLI\nâ€¢ Twilio\nâ€¢ BeautifulSoup\nâ€¢ Ticketmaster Discovery API\nâ€¢ SendGrid\nâ€¢ Google Custom Search API\n\nKey Challenges\nâ€¢ Monitoring fragmented data sources for presale opportunities was inefficient.\nâ€¢ Need for a system capable of real-time detection of opportunities.\nâ€¢ System required to filter duplicates and avoid irrelevant alerts.\nâ€¢ Alerts had to be delivered across multiple notification channels.\nâ€¢ Needed a reliable system for continuous 24/7 monitoring.\n\nSolutions\nâ€¢ Developed a modular monitoring engine for scanning multiple sources.\nâ€¢ Implemented an intelligent detection engine with classification logic.\nâ€¢ Established a deduplication mechanism for alerts.\nâ€¢ Created a real-time notification engine for instant alerts.\nâ€¢ Built a modular architecture for scalable monitoring.\nâ€¢ Deployed the system in a containerized environment with high availability.\n\nBenefits Delivered\nâ€¢ Faster detection of ticket opportunities across multiple sources.\nâ€¢ Immediate real-time alerts for presale opportunities.\nâ€¢ Reduced need for manual monitoring of platforms.\nâ€¢ Improved quality of signals with reduced alert noise.\nâ€¢ Scalable system for future growth and additional monitoring.",
        learnMoreHref: "/contact"
      },
      {
        title: "Casino Analytics: User Engagement Analysis",
        body:
          "Improving player engagement through high-velocity data analytics and secure engineering. Ingesting and analyzing terabytes of player data to drive behavioral insights while ensuring the highest level of security and regulatory compliance.",
        details:
          "Overview\nâ€¢ Explore Stellarmind.ai's AI, IoT, and AR solutions to boost efficiency and innovation. Discover custom software solutions tailored to meet your business needs.\n\nTechnology Stack\nâ€¢ Python\nâ€¢ Django\nâ€¢ Airflow\nâ€¢ Snowflake\n\nKey Challenges\nâ€¢ Fragmented data sources\nâ€¢ Massive volumes of data\nâ€¢ Hindered real-time decision-making\nâ€¢ Inadequate player profiling\n\nSolutions\nâ€¢ Implemented Apache Airflow for data orchestration\nâ€¢ Built ingestion engines using Snowpark and Python\nâ€¢ Embedded rigorous data governance with dynamic masking and encryption\n\nBenefits Delivered\nâ€¢ 30% improvement in player engagement\nâ€¢ 500+ daily concurrent pipelines\nâ€¢ 40% reduction in compute costs\nâ€¢ GDPR & AML compliance with role-based access control",
        learnMoreHref: "/contact"
      },
      {
        title: "FMCG Multi Tool Integrator \\| Data Analyst",
        body:
          "Architecting Real-Time Data Synchronization for Enterprise Sales. A sophisticated data engineering solution designed to unify fragmented sales tools into a single source of truth.",
        details:
          "Overview\nâ€¢ Architecting Real-Time Data Synchronization for Enterprise Sales. A sophisticated data engineering solution designed to unify fragmented sales tools into a single source of truth.\n\nMetadata\nâ€¢ Tags: Enterprise Architecture, Data Engineering\nâ€¢ Detail page: Not currently discoverable via browser traversal/crawl in this pass."
      },
      {
        title: "AI-Powered IoT for Smarter Home Automation (AIVA)",
        body:
          "Smart IoT solution for homes: experience real-time automation, voice control, and seamless device integration with enhanced privacy.",
        details:
          "Overview\nâ€¢ Smart IoT solution for homes: experience real-time automation, voice control, and seamless device integration with enhanced privacy.\n\nMetadata\nâ€¢ Tags: AI, IoT, Smart Home\nâ€¢ Detail page: Not currently discoverable via browser traversal/crawl in this pass."
      },
      {
        title: "AIVA: Privacy-First Edge AI",
        body:
          "All-in-One Smart Home AI Assistant with Edge Computing. Discover how we built a privacy-first smart home assistant with custom IoT hardware and edge AI for real-time control, biometric access, and device learning.",
        details:
          "Overview\nâ€¢ All-in-One Smart Home AI Assistant with Edge Computing. Discover how we built a privacy-first smart home assistant with custom IoT hardware and edge AI for real-time control, biometric access, and device learning.\n\nMetadata\nâ€¢ Tags: Edge AI, Smart Home, Privacy\nâ€¢ Detail page: Not currently discoverable via browser traversal/crawl in this pass."
      },
      {
        title: "SERYNA - Emotionally Intelligent Voice AI Companion",
        body:
          "A seamless fusion of LLaMA3, FAISS, and ElevenLabs delivering real-time empathetic interactions. SERYNA provides non-judgmental support for users seeking emotional clarity during difficult moments.",
        details:
          "Overview\nâ€¢ The client is a Canada-based IT solutions provider specializing in custom software development, mobile and web applications, and emerging technologies. They envisioned an emotionally intelligent, voice-interactive AI companion for users seeking non-judgmental support in emotionally difficult situations such as loneliness, stress, or anxiety.\n\nTechnology Stack\nâ€¢ Python\nâ€¢ Flask\nâ€¢ LLaMA3\nâ€¢ Hugging Face\nâ€¢ ElevenLabs\nâ€¢ FAISS\n\nKey Challenges\nâ€¢ Large and unstructured dataset requiring significant cleaning and deduplication.\nâ€¢ Computationally demanding embedding of high-volume conversations.\nâ€¢ Need for careful optimization of indexing parameters for FAISS.\nâ€¢ Preservation of emotional and contextual nuance in LLM prompt formatting.\nâ€¢ Secure cross-origin communication for user data privacy during processing.\nâ€¢ Real-time speech-to-text and text-to-speech integration for voice conversations.\nâ€¢ Implementation of a multi-stage cleaning pipeline to remove semantic duplicates.\nâ€¢ Reduced context retrieval time to under 100ms using FAISS.\n\nSolutions\nâ€¢ Optimized hardware utilization and vectorization pipelines for computational efficiency.\nâ€¢ Careful tuning of FAISS indexing parameters for accurate retrieval.\nâ€¢ Focused on emotional and contextual response crafting in AI interactions.\nâ€¢ Enhanced secure integration methodologies for frontend-backend communication.\nâ€¢ Implemented real-time voice synthesis capabilities for seamless interaction.\nâ€¢ A robust multi-stage data cleaning pipeline to improve training data quality.\n\nBenefits Delivered\nâ€¢ 85% improvement in user emotional satisfaction compared to standard bots.\nâ€¢ 40ms reduction in average response latency.\nâ€¢ 10x scalability factor for conversational memory growth.",
        learnMoreHref: "/contact"
      },
      {
        title: "Automated SOC 2 Audit Review with Mistral AI",
        body:
          "AI-driven solution automated SOC 2 report evaluation for a cybersecurity firm, enhancing report accuracy, reducing manual efforts, and boosting compliance.",
        details:
          "Overview\nâ€¢ The client is a USA-based cybersecurity firm offering end-to-end solutions in data protection, privacy, and regulatory compliance. Their services span penetration testing, vulnerability assessments, and comprehensive audits for frameworks like SOC 2, ISO 27001, HIPAA, and GDPR.\n\nTechnology Stack\nâ€¢ Python\nâ€¢ Hugging Face\nâ€¢ Mistral-7B\nâ€¢ AWS (EC2)\nâ€¢ AWS (S3)\nâ€¢ MongoDB\n\nKey Challenges\nâ€¢ Inconsistent formats of reports with varying structures and language.\nâ€¢ Lack of a uniform schema complicating content mapping to Trust Services Criteria (TSC).\nâ€¢ Subjective evaluation of report quality based on nuanced factors like clarity and completeness.\nâ€¢ Need for a robust multi-dimensional scoring framework for fair evaluations.\nâ€¢ Requirement to chunk and embed SOC 2 documents without losing context.\n\nSolutions\nâ€¢ Preprocessed SOC 2 reports by removing noise and normalizing structures.\nâ€¢ Segmented data into categories corresponding to the Trust Services Criteria.\nâ€¢ Model evaluated categories and returned quality scores with justifications.\nâ€¢ Parsed tables from PDF reports for TSC mappings and audit procedures.\nâ€¢ Designed token-efficient prompts for context-aware LLM use.\nâ€¢ Converted document segments into embeddings for efficient retrieval.\n\nBenefits Delivered\nâ€¢ Significantly reduced manual effort in SOC 2 report review.\nâ€¢ Delivered structured evaluations that minimize human bias.\nâ€¢ Enabled intelligent retrieval ensuring only relevant information is analyzed.\nâ€¢ Provided detailed explanations for scores, enhancing transparency.\nâ€¢ Improved compliance documentation by identifying gaps in reports.",
        learnMoreHref: "/contact"
      },
      {
        title: "Smarter Procurement: Faster, Scalable, Transparent",
        body:
          "Discover how we enhanced an AI-powered procurement system, streamlining processes, boosting productivity, and improving communication for resellers.",
        details:
          "Overview\nâ€¢ The client is a USA-based software development company that specializes in creating advanced software solutions powered by artificial intelligence (AI). Their flagship platform is an AI-driven automated procurement system designed to streamline and accelerate procurement operations for resellers.\n\nTechnology Stack\nâ€¢ GCP\nâ€¢ Vercel\nâ€¢ React\nâ€¢ Node.js\nâ€¢ Express.js\nâ€¢ MongoDB\n\nKey Challenges\nâ€¢ Manual procurement workflows caused delays.\nâ€¢ Limited visibility due to lack of central dashboard.\nâ€¢ Disorganized communication across different platforms.\nâ€¢ Scalability issues with growing reseller base.\n\nSolutions\nâ€¢ Real-time dashboard for procurement metrics.\nâ€¢ Automated notifications for RFQ management.\nâ€¢ Simplified PO creation and tracking.\nâ€¢ Delivery tracking module for accuracy.\nâ€¢ Centralized vendor records management.\nâ€¢ Insightful analytics reports.\nâ€¢ Streamlined user access control.\nâ€¢ Organized records for contracting officers.\nâ€¢ Automated email and invoice templates.\n\nBenefits Delivered\nâ€¢ 20x improvement in productivity.\nâ€¢ Greater operational transparency.\nâ€¢ Improved communication and coordination.\nâ€¢ 0 error reduction from automated forms.\nâ€¢ Scalable architecture for growing transactions.",
        learnMoreHref: "/contact"
      },
      {
        title: "AI-Powered Gameplay Analysis System",
        body:
          "Transforming screen recordings into actionable performance insights with high-fidelity computer vision and neural networks for competitive gaming.",
        details:
          "Overview\nâ€¢ Our client is a UAE-based esports organization specializing in competitive gaming and event management\n\nTechnology Stack\nâ€¢ Python\nâ€¢ YoloV8\nâ€¢ Scikit_Learn\nâ€¢ Tesseract_OCR\nâ€¢ OpenCV\nâ€¢ Next.js\nâ€¢ Node.js\nâ€¢ MongoDB\n\nKey Challenges\nâ€¢ Manual review time is slow.\nâ€¢ Restricted game APIs block functionality.\nâ€¢ Handling diverse resolutions and visual skins.\nâ€¢ Need to process 60 frames per second.\nâ€¢ Dynamic lighting changes affect OCR reliability.\nâ€¢ Balancing depth of analysis with processing cost.\n\nSolutions\nâ€¢ Optimized video pipeline reduces redundant computation by 40%.\nâ€¢ Custom-trained YOLOv8 weights for event detection.\nâ€¢ Insight engine correlates positioning with win rates.\n\nBenefits Delivered\nâ€¢ 60-70% reduction in session review time.\nâ€¢ Automated tagging of gameplay clips.\nâ€¢ Immediate feedback through low-latency processing.\nâ€¢ Deep insights into positioning, timing, and aim.",
        learnMoreHref: "/contact"
      },
      {
        title: "IoT-Based Cost-Effective Electricity Generation and Monitoring System",
        body:
          "An innovative IoT-powered decentralized energy solution with real-time monitoring, remote control, and advanced analytics to optimize electricity generation and management across multiple stations.",
        details:
          "Overview\nâ€¢ A forward-thinking client approached us to design a cost-effective, IoT-based electricity generation solution. While similar in concept to solar panel setups, the client's vision expanded into a fully integrated hardware-software ecosystem capable of generating electricity while offering advanced monitoring, control, and analytics for each rooftop-installed unit.\n\nTechnology Stack\nâ€¢ Python\nâ€¢ AWS\nâ€¢ Nodejs\nâ€¢ React\nâ€¢ MongoDB\n\nKey Challenges\nâ€¢ Develop hardware for rooftop electricity generation\nâ€¢ Create a centralized system for remote monitoring and control\nâ€¢ Provide a platform for tracking electricity generation and system adjustments\nâ€¢ Establish an ERP system for device management and integration\nâ€¢ Implement advanced analytics for performance assessment\n\nSolutions\nâ€¢ Designed an IoT-powered energy management ecosystem\nâ€¢ Developed custom PCBs with sensors for environmental monitoring\nâ€¢ Built a responsive frontend using React.js and Next.js\n\nBenefits Delivered\nâ€¢ Enabled real-time insights for administrators and end-users\nâ€¢ Facilitated remote control capabilities\nâ€¢ Optimized performance across multiple locations",
        learnMoreHref: "/contact"
      },
      {
        title: "Next-Gen Archery with AR, AI & 3D Tools",
        body:
          "A cutting-edge iOS application combining Augmented Reality (AR), Artificial Intelligence (AI), and 3D visualization to revolutionize archery performance tracking, delivering real-time trajectory insights and precision shot analysis.",
        details:
          "Overview\nâ€¢ A cutting-edge iOS application combining Augmented Reality (AR), Artificial Intelligence (AI), and 3D visualization to revolutionize archery performance tracking, delivering real-time trajectory insights and precision shot analysis.\n\nMetadata\nâ€¢ Tags: AR, AI, 3D Visualization, Sports Technology\nâ€¢ Detail page: Not currently discoverable via browser traversal/crawl in this pass."
      },
      {
        title: "IoT Integration with ERP for Optimized Production",
        body:
          "IoT-ERP integration for real-time production monitoring and automated data exchange, enhancing operational efficiency and informed decision-making.",
        details:
          "Overview\nâ€¢ IoT-ERP integration for real-time production monitoring and automated data exchange, enhancing operational efficiency and informed decision-making.\n\nMetadata\nâ€¢ Tags: IoT, ERP\nâ€¢ Detail page: Not currently discoverable via browser traversal/crawl in this pass."
      },
      {
        title: "AR Educational App for Children",
        body:
          "Developed an interactive AR educational app for children, combining 3D characters, real-time AI interactions, and book-based learning for an engaging experience.",
        details:
          "Overview\nâ€¢ Our client approached us with an innovative idea to develop an augmented reality (AR) application for children. The goal was to create an interactive educational app that would enhance learning by bringing book characters to life and enabling interactive conversations.\n\nTechnology Stack\nâ€¢ Nodejs\nâ€¢ React\nâ€¢ PostgreSQL\nâ€¢ MongoDB\nâ€¢ Google Cloud\nâ€¢ Docker\nâ€¢ Unity 3D\nâ€¢ Maya 3D\nâ€¢ AI Interaction\n\nKey Challenges\nâ€¢ Real-Time AR Interaction\nâ€¢ Unity 3D for AR Development\nâ€¢ Book Page Scanning\nâ€¢ Character Animation\nâ€¢ Voice Integration\nâ€¢ AI Interaction\nâ€¢ Maya 3D for Character Creation\nâ€¢ Interactive Narration and Q&A\n\nSolutions\nâ€¢ Designed an AR app with interactive elements for children.\nâ€¢ Utilized Unity 3D to develop the AR functionalities, enabling real-time character activation and interaction.\n\nBenefits Delivered\nâ€¢ Enhances children's learning experiences.\nâ€¢ Creates lifelike 3D characters.\nâ€¢ Meets complex requirements for educational technology projects.",
        learnMoreHref: "/contact"
      },
      {
        title: "Photo and Video Editing Mobile App",
        body:
          "Developed a custom mobile app for advanced photo and video editing with real-time effects, artistic filters, and Bitmoji integration, without using third-party SDKs.",
        details:
          "Overview\nâ€¢ Our client approached us with the ambitious goal of creating a mobile app for photo and video editing with advanced functionalities, without relying on any third-party SDKs. The app needed to be robust and feature-rich, catering to both iOS and Android platforms.\n\nTechnology Stack\nâ€¢ AWS\nâ€¢ Kubernetes\nâ€¢ Nodejs\nâ€¢ React\nâ€¢ PostgreSQL\nâ€¢ MongoDB\nâ€¢ NextdotJS\nâ€¢ Docker\n\nKey Challenges\nâ€¢ No Third-Party SDKs\nâ€¢ Create Touch Fast/Slow Motion Editing While Recording\nâ€¢ Convert Pictures to Beautiful Art\nâ€¢ Quickly Trim, Cut, Crop, and Share\nâ€¢ Add Snapchat Bitmojis Directly to Videos\nâ€¢ Add Filters Like Snapchat and Instagram\nâ€¢ Core Camera Features for iOS\nâ€¢ Core Camera Features and FFmpeg for Android\nâ€¢ Custom Filters and Effects\n\nSolutions\nâ€¢ Enabled fast and slow-motion effects during video recording with one touch\nâ€¢ Applied artistic filters and effects to transform photos\n\nBenefits Delivered\nâ€¢ Feature-rich photo and video editing app\nâ€¢ Advanced functionalities like fast/slow motion editing\nâ€¢ Artistic photo transformation\nâ€¢ Bitmoji integration",
        learnMoreHref: "/contact"
      },
      {
        title: "Enhancing IoT Capabilities for View",
        body:
          "Enhanced IoT capabilities for View Inc. through comprehensive DevOps, cloud, mobile development, and 24/7 support, driving innovation and operational efficiency.",
        details:
          "Overview\nâ€¢ Our client, View Inc., a leader in smart glass and building technology, initially sought a DevOps engineer for infrastructure management. This evolved into a long-term partnership, where we supported their growing needs in full-stack development, mobile apps, IoT integration, and 24/7 infrastructure support, becoming a key part of their engineering team.\n\nTechnology Stack\nâ€¢ AWS\nâ€¢ Kubernetes\nâ€¢ MongoDB\nâ€¢ Redux\nâ€¢ Google Cloud\nâ€¢ Nodejs\nâ€¢ React\nâ€¢ Docker\n\nKey Challenges\nâ€¢ Improve IoT system capabilities for increased efficiency.\nâ€¢ Efficient management of a growing infrastructure.\nâ€¢ Building a team that can work seamlessly across different time zones.\nâ€¢ Scaling development capabilities to handle both full-stack and mobile app development.\nâ€¢ Delivering 24/7 DevOps support to guarantee system availability.\n\nSolutions\nâ€¢ Built a dedicated DevOps team to provide 24/7 operational support.\nâ€¢ Team responsible for monitoring, troubleshooting, and maintaining servers.\nâ€¢ Hired 5 Full-Stack Engineers to work in PST time zone for collaboration.\n\nBenefits Delivered\nâ€¢ Ensured optimal performance and uptime.\nâ€¢ Seamless communication and project execution.\nâ€¢ Comprehensive solutions that ensure the stability and continuous growth.",
        learnMoreHref: "/contact"
      },
      {
        title: "Implementing Sentiment Analysis Using AI/ML Techniques",
        body:
          "Implemented sentiment analysis for an e-commerce company, categorizing customer reviews into positive, neutral, or negative sentiments using advanced AI/ML techniques.",
        details:
          "Overview\nâ€¢ Implemented sentiment analysis for an e-commerce company, categorizing customer reviews into positive, neutral, or negative sentiments using advanced AI/ML techniques.\n\nMetadata\nâ€¢ Tags: AI/ML, Sentiment Analysis\nâ€¢ Detail page: Not currently discoverable via browser traversal/crawl in this pass."
      },
      {
        title: "AI-Powered Employee Engagement System",
        body:
          "Developed an AI-powered system to enhance employee engagement by tracking behavior, monitoring moods, and delivering personalized greetings. Integrated with the HRMS to streamline attendance tracking and mood analysis.",
        details:
          "Overview\nâ€¢ Our client sought to enhance employee engagement by leveraging AI and machine learning to track office behavior, monitor moods, and deliver personalized greetings. The solution also needed to integrate with their HRMS tool to streamline attendance and improve overall employee satisfaction.\n\nTechnology Stack\nâ€¢ AWS\nâ€¢ FFmpeg\nâ€¢ Opencv\nâ€¢ Pytorch\nâ€¢ Tensorflow\nâ€¢ Node Js\nâ€¢ React\n\nKey Challenges\nâ€¢ Improve employee engagement\nâ€¢ Assess moods\nâ€¢ Automated attendance tracking\nâ€¢ Integrate with HRMS tool\nâ€¢ Detect office absences\n\nSolutions\nâ€¢ Developed AI-powered engagement system\nâ€¢ Integrated facial recognition for employee tracking\nâ€¢ Automated attendance tracking via HRMS\n\nBenefits Delivered\nâ€¢ Real-time mood analysis\nâ€¢ Enhanced workplace interactions\nâ€¢ Valuable insights into employee well-being",
        learnMoreHref: "/contact"
      }
    ],
    closingHeading: "Need outcomes like these?",
    closingBody: "Share your use case and we will map the fastest architecture, delivery plan, and production path for your team."
  },
  contact: {
    slug: "contact",
    title: "Contact | Agentspod.AI",
    description: "Connect with the engineering team for strategy calls, architecture reviews, and enterprise planning.",
    heroHeading: "Contact Us",
    heroBody: "Ready to build? Tell us about your project and we will map how to engineer it with you.",
    primaryCtaLabel: "Book a Strategy Call",
    primaryCtaHref: "https://cal.com/swami-tpxjxh",
    highlights: [
      "hello@agentspod.ai",
      "Global Presence: India, USA, Europe, Canada, Australia",
      "Founder Architectural Reviews",
      "Enterprise Security and Scale Assessments"
    ],
    capabilities: [
      { title: "For Founders", body: "Free 30-minute architectural review for qualified startups." },
      { title: "For Enterprises", body: "Security audits, scalability assessments, and integration roadmaps." },
      { title: "Consultation Scope", body: "Technical risks, delivery strategy, and platform planning." },
      { title: "Post-Delivery Support", body: "Ongoing support options aligned to your operating model." }
    ],
    closingHeading: "Ready to Start?",
    closingBody: "Book a free 30-minute strategy call to discuss your project."
  },
  privacy: {
    slug: "privacy",
    title: "Privacy Policy | Agentspod.AI",
    description: "Privacy policy for Agentspod.AI website and service interactions.",
    heroHeading: "Privacy Policy",
    heroBody: "Last Updated: November 2024",
    primaryCtaLabel: "Email Us",
    primaryCtaHref: "mailto:hello@agentspod.ai",
    highlights: ["Introduction", "Information We Collect", "How We Use Your Information", "Data Security"],
    capabilities: [
      {
        title: "Information Collection",
        body: "Data provided through contact forms, job applications, and direct communication."
      },
      { title: "Use of Information", body: "Service delivery, support responses, and administrative updates." },
      { title: "Security Measures", body: "Technical and organizational measures to protect personal information." },
      { title: "Contact", body: "Questions can be sent to hello@agentspod.ai." }
    ],
    closingHeading: "Privacy Questions?",
    closingBody: "If you have privacy concerns, contact hello@agentspod.ai."
  },
  terms: {
    slug: "terms",
    title: "Terms of Service | Agentspod.AI",
    description: "Terms governing use of website and services.",
    heroHeading: "Terms of Service",
    heroBody: "Last Updated: November 2024",
    primaryCtaLabel: "Contact Us",
    primaryCtaHref: "mailto:hello@agentspod.ai",
    highlights: ["Acceptance of Terms", "Use of Services", "Intellectual Property", "Limitation of Liability"],
    capabilities: [
      { title: "Acceptance", body: "By using the website, you agree to be bound by these terms." },
      { title: "Lawful Use", body: "Services must be used in compliance with applicable laws." },
      { title: "Ownership", body: "Site content and functionality are protected intellectual property." },
      { title: "Governing Law", body: "Terms are governed by the jurisdiction where Agentspod.AI operates." }
    ],
    closingHeading: "Need Clarification?",
    closingBody: "Reach out to hello@agentspod.ai for terms-related questions."
  }
};

export const internalPages: Record<string, InternalPageData> = {
  ...internalPagesCore,
  careers: buildCareersPage()
};


