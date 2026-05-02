import { getCareersFormsManifest } from "@/lib/careers-forms-config";

export type InternalPageSection = {
  title: string;
  body: string;
  /** When set, the capability card expands in place instead of linking away (e.g. portfolio projects). */
  details?: string;
  /** Overrides page primary CTA for this card’s “Learn more” link. */
  learnMoreHref?: string;
  /** Background image URL for the card media area. */
  image?: string;
};

/** Plain string chips, or linked chips `{ label, href }` (e.g. careers role → Google Form). */
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
    closingBody: "Use the open application form or contact us from the home page—we read every submission."
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
      "Multi-Step Ticket Triage with LangGraph Agents",
      "Autonomous SDR Agents with CRM Write-Back",
      "Agentic IDP for Contracts, Claims & Manifests",
      "Stateful Research Agents with Human-in-the-Loop"
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
      "SOW & Contract Review via LangChain Pipelines",
      "Fine-Tuned LLMs on Proprietary Domain Datasets",
      "Multi-Modal RAG for Content & Knowledge Operations",
      "DPDP / SOC 2 Automation with Mistral & GPT-4o"
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
      "Behavioral Churn Modeling with Snowflake Pipelines",
      "Real-Time Fraud Scoring on Streaming Event Data",
      "ML-Driven Dynamic Pricing with Feature Stores"
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
      "Sub-300ms Inbound Voice Agents (ElevenLabs + STT)",
      "Outbound SDR Bots with CRM Sync",
      "Natural Language Scheduling with Calendar Integration",
      "Edge Voice Control for IoT & Smart Environments"
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
    highlights: ["Idea to MVP in 25 Days", "MVP to Product in +25 Days", "React/Next.js Frontend with Design Systems", "Multi-Tenant SaaS Architecture on AWS/GCP"],
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
              "Overview\n• Our client is a compliance-focused organization that requires strict background verification during account onboarding. They needed an automated system to continuously collect and update global sanctions data from multiple government sources and screen users against it in real time. This ensures regulatory compliance while preventing high-risk or restricted individuals from accessing the platform.\n\nTechnology Stack\n• Python\n• MySQL\n• PostgreSQL\n• Cron Jobs (Linux)\n\nKey Challenges\n• High accuracy required due to legal and financial implications\n• False positives/negatives could impact business operations\n• Efficient parsing and storage required for large datasets\n• Needed near real-time synchronization to avoid outdated checks\n• Required deduplication and entity resolution due to name variations\n• Lack of standard structure across datasets\n• Needed robust retry and error-handling mechanisms due to changing government endpoints\n\nSolutions\n• Built a centralized parser to handle XML, Excel, and API responses\n• Implemented cron jobs running every 3 hours for continuous synchronization\n• Applied name matching, alias mapping, and unique identifiers for normalization\n• Added fallback logic and logging for failed scrapes to ensure resilience\n• Indexed key fields and optimized database design for fast search\n• Integrated database with onboarding workflow for real-time screening\n\nBenefits Delivered\n• Automated screening ensures adherence to global regulatory requirements\n• Immediate identification of high-risk individuals during account creation\n• Eliminated manual verification effort, significantly reducing overhead\n• Aggregates data from multiple global authorities\n• Provides a consistent, reliable dataset for accurate risk assessment\n• Can accommodate future expansion in data sources with minimal changes",
            learnMoreHref: "/contact"
          },
          {
            title: "AI Job Platform for Immigration & PR-Eligible Opportunities",
            body:
              "AI-powered job search platform that helps skilled professionals find immigration-friendly roles and identify employment opportunities aligned with PR pathways.",
            image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&auto=format&q=80",
            details:
              "Overview\n• The client is a Canada-focused immigration technology startup aiming to simplify the PR pathway for skilled immigrants worldwide. Their mission is to eliminate the confusion around which jobs genuinely qualify for Canadian Permanent Residency and give newcomers a clear, structured path toward building a life in Canada.\n\nTechnology Stack\n• Python\n• Next JS\n• AWS S3\n• Hostinger VPS\n• PHP\n• Cloudflare\n\nKey Challenges\n• Confusion over job eligibility for PR pathways\n• No tools directly mapping jobs to PR eligibility criteria\n• Need for reliable low-latency infrastructure\n• Requirement for scalable and secure file delivery\n• Need for cost-efficient deployment without sacrificing reliability\n\nSolutions\n• Implemented Cloudflare for enhanced security and performance\n• Configured offsite backup storage in AWS S3\n• Established immutable backups in AWS S3\n• Created comprehensive documentation for operational procedures\n\nBenefits Delivered\n• Global performance with low latency through Cloudflare\n• Secure and reliable file handling with AWS S3\n• Cost-effective infrastructure combining VPS hosting, Cloudflare, and S3",
            learnMoreHref: "/contact"
          },
          {
            title: "Deterministic AI Enterprise Intelligence Platform",
            body:
              "Enterprise intelligence platform combining AI and rule engines to analyze enterprise data and deliver reliable, explainable decision support.",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&q=80",
            details:
              "Overview\n• Our client is a technology-driven enterprise organization focused on transforming how businesses analyze data and make operational decisions.\n• Traditional enterprise analytics platforms often rely on dashboards, manual analysis, and business intelligence tools that require human interpretation before action can be taken. While large language models (LLMs) provide powerful language capabilities, they often lack deterministic control, auditability, and reliability for enterprise decision-making.\n• The client wanted to build a next-generation enterprise intelligence platform that combines the reasoning power of LLMs with deterministic domain logic engines. The goal was to create a system capable of analyzing enterprise data, applying rule-based intelligence, and delivering clear, explainable insights to business users through natural language interfaces.\n\nTechnology Stack\n• Python\n• FastAPI\n• PostgreSQL\n• Redis\n• RBAC Framework\n• Open AI\n• Docker\n• Pinecone\n• Next JS\n• Enterprise APIs\n\nKey Challenges\n• LLMs can hallucinate information and make inconsistent decisions.\n• Black-box AI models fail compliance and audit requirements.\n• Same input must always produce the same decision output.\n• Different industries require different rules and metrics.\n• Need to combine structured and unstructured data sources.\n\nSolutions\n• Developed an AI Enterprise Intelligence Platform integrating a deterministic domain logic engine.\n• Separated language understanding from decision logic for reliability.\n• Used a configuration-driven domain architecture for customization.\n• Included a signal computation layer for meaningful metrics.\n• Implemented a rule engine for structured decision outputs.\n• Created a scoring engine for prioritized intelligence.\n• Established enterprise guardrails for compliance controls.\n• Controlled LLM integration for natural language capabilities.\n\nBenefits Delivered\n• Reliable AI decision intelligence driven by deterministic rules.\n• Every insight is traceable to signals, rules, and scores.\n• Scalable across industries with minimal effort.\n• Faster business insights through natural language queries.\n• Enterprise-grade security with access control and audit logging.",
            learnMoreHref: "/contact"
          },
          {
            title: "AI-Powered Consulting Procurement Automation Platform",
            body:
              "AI-powered platform that automates supplier proposal review, pricing checks, and compliance-helping procurement teams save time, reduce risks, and decide faster.",
            image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&auto=format&q=80",
            details:
              "Overview\n• Our client is a large company that regularly hires external consultants and service providers for projects - from strategy and IT to operations and transformation. Every time a supplier sends a proposal or Statement of Work (SOW), multiple people (business users, procurement specialists, legal teams) had to carefully read and check dozens of pages to make sure everything followed company policies, pricing guidelines, and strategic rules. This happened many times every month.\n\nTechnology Stack\n• Python\n• LangChain\n• LangGraph\n• Azure\n• OpenAI\n\nKey Challenges\n• Reviewing long proposals took hours or even days.\n• Risk of human error in contract clauses and pricing.\n• Inconsistent formats of supplier documents.\n• Manual price benchmarking against internal rates.\n• Lack of clear decision data.\n\nSolutions\n• Easy upload and instant reading of proposals.\n• Automatic smart checks for compliance and pricing accuracy.\n• Clear, human-friendly report with actionable insights.\n\nBenefits Delivered\n• Cut proposal review time by 60-80%.\n• Far fewer mistakes and compliance problems.\n• Real cost savings by identifying overpriced proposals.\n• Happier procurement and business teams.\n• Consistent decision-making across reviews.\n• Better supplier negotiations with clear facts.",
            learnMoreHref: "/contact"
          },
          {
            title: "AI Ticket Opportunity Detection System for Event Brokers",
            body:
              "An AI-powered intelligence platform that monitors ticketing sites, announcements, and emails to instantly alert brokers about presale opportunities in real time.",
            image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&q=80",
            details:
              "Overview\n• Our client is a U.S.-based ticket intelligence platform that helps ticket brokers and event professionals identify presale opportunities for concerts, tours, and major live events. The platform focuses on detecting early signals of ticket availability across multiple online sources so brokers can act quickly and secure tickets before they become widely available.\n• In the competitive ticket resale industry, timing is critical. Even a few minutes can determine whether an opportunity is captured or missed. To strengthen their capabilities, the client required a robust automated system capable of detecting ticket opportunities in real time and delivering instant alerts to their internal team and broker network.\n\nTechnology Stack\n• Python\n• FastAPI\n• PostgreSQL\n• Redis\n• Docker\n• Playwright\n• Gmail API\n• Signal CLI\n• Twilio\n• BeautifulSoup\n• Ticketmaster Discovery API\n• SendGrid\n• Google Custom Search API\n\nKey Challenges\n• Monitoring fragmented data sources for presale opportunities was inefficient.\n• Need for a system capable of real-time detection of opportunities.\n• System required to filter duplicates and avoid irrelevant alerts.\n• Alerts had to be delivered across multiple notification channels.\n• Needed a reliable system for continuous 24/7 monitoring.\n\nSolutions\n• Developed a modular monitoring engine for scanning multiple sources.\n• Implemented an intelligent detection engine with classification logic.\n• Established a deduplication mechanism for alerts.\n• Created a real-time notification engine for instant alerts.\n• Built a modular architecture for scalable monitoring.\n• Deployed the system in a containerized environment with high availability.\n\nBenefits Delivered\n• Faster detection of ticket opportunities across multiple sources.\n• Immediate real-time alerts for presale opportunities.\n• Reduced need for manual monitoring of platforms.\n• Improved quality of signals with reduced alert noise.\n• Scalable system for future growth and additional monitoring.",
            learnMoreHref: "/contact"
          },
          {
            title: "Smarter Procurement: Faster, Scalable, Transparent",
            body:
              "Discover how we enhanced an AI-powered procurement system, streamlining processes, boosting productivity, and improving communication for resellers.",
            image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format&q=80",
            details:
              "Overview\n• The client is a USA-based software development company that specializes in creating advanced software solutions powered by artificial intelligence (AI). Their flagship platform is an AI-driven automated procurement system designed to streamline and accelerate procurement operations for resellers.\n\nTechnology Stack\n• GCP\n• Vercel\n• React\n• Node.js\n• Express.js\n• MongoDB\n\nKey Challenges\n• Manual procurement workflows caused delays.\n• Limited visibility due to lack of central dashboard.\n• Disorganized communication across different platforms.\n• Scalability issues with growing reseller base.\n\nSolutions\n• Real-time dashboard for procurement metrics.\n• Automated notifications for RFQ management.\n• Simplified PO creation and tracking.\n• Delivery tracking module for accuracy.\n• Centralized vendor records management.\n• Insightful analytics reports.\n• Streamlined user access control.\n• Organized records for contracting officers.\n• Automated email and invoice templates.\n\nBenefits Delivered\n• 20x improvement in productivity.\n• Greater operational transparency.\n• Improved communication and coordination.\n• 0 error reduction from automated forms.\n• Scalable architecture for growing transactions.",
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
              "Overview\n• The client is a Canada-based IT solutions provider specializing in custom software development, mobile and web applications, and emerging technologies. They envisioned an emotionally intelligent, voice-interactive AI companion for users seeking non-judgmental support in emotionally difficult situations such as loneliness, stress, or anxiety.\n\nTechnology Stack\n• Python\n• Flask\n• LLaMA3\n• Hugging Face\n• ElevenLabs\n• FAISS\n\nKey Challenges\n• Large and unstructured dataset requiring significant cleaning and deduplication.\n• Computationally demanding embedding of high-volume conversations.\n• Need for careful optimization of indexing parameters for FAISS.\n• Preservation of emotional and contextual nuance in LLM prompt formatting.\n• Secure cross-origin communication for user data privacy during processing.\n• Real-time speech-to-text and text-to-speech integration for voice conversations.\n• Implementation of a multi-stage cleaning pipeline to remove semantic duplicates.\n• Reduced context retrieval time to under 100ms using FAISS.\n\nSolutions\n• Optimized hardware utilization and vectorization pipelines for computational efficiency.\n• Careful tuning of FAISS indexing parameters for accurate retrieval.\n• Focused on emotional and contextual response crafting in AI interactions.\n• Enhanced secure integration methodologies for frontend-backend communication.\n• Implemented real-time voice synthesis capabilities for seamless interaction.\n• A robust multi-stage data cleaning pipeline to improve training data quality.\n\nBenefits Delivered\n• 85% improvement in user emotional satisfaction compared to standard bots.\n• 40ms reduction in average response latency.\n• 10x scalability factor for conversational memory growth.",
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
              "Overview\n• A leading healthcare facility managing high volumes of biomedical and hazardous waste daily. They needed foolproof segregation, instant violation detection, and strong audit documentation all without compromising staff time or patient privacy.\n\nTechnology Stack\n• YOLO\n• AWS\n• SSD (MobileNet)\n• OpenCV\n• IoT sensors\n\nKey Challenges\n• Frequent misplacement of sharps into incorrect bins\n• Slow, unreliable manual inspections\n• Zero real-time visibility into improper disposals\n• Incomplete or inaccurate waste-type tracking for regulatory audits\n• Constant pressure to avoid fines and improve safety scores\n• Overworked clinical teams unable to take on more monitoring tasks\n\nSolutions\n• IoT sensors instantly detect every waste drop\n• Advanced AI classifies items as sharps, gloves, general medical waste, or others\n• Real-time alerts trigger on wrong item entries or full bins\n• Event logs and images uploaded to AWS for review and compliance\n• Privacy-first design with no continuous video recording\n• User-friendly web dashboard for live bin status and alerts\n• Lightning-fast local decisions with secure cloud storage\n\nBenefits Delivered\n• Dramatically reduced undetected sharps misplacements\n• Immediate staff intervention preventing hazards\n• Achieved 85-90% real-world accuracy\n• Fully automated waste-type reports for audits\n• Continuous model improvement via secure AWS uploads\n• Single dashboard visibility across monitored bins\n• Lower risk of fines and compliance violations\n• Freed up valuable staff time while improving safety",
            learnMoreHref: "/contact"
          },
          {
            title: "AI-Powered IoT for Smarter Home Automation (AIVA)",
            body:
              "Smart IoT solution for homes: experience real-time automation, voice control, and seamless device integration with enhanced privacy.",
            image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&q=80",
            details:
              "Overview\n• Smart IoT solution for homes: experience real-time automation, voice control, and seamless device integration with enhanced privacy.\n\nMetadata\n• Tags: AI, IoT, Smart Home\n• Detail page: Not currently discoverable via browser traversal/crawl in this pass."
          },
          {
            title: "AIVA: Privacy-First Edge AI",
            body:
              "All-in-One Smart Home AI Assistant with Edge Computing. Discover how we built a privacy-first smart home assistant with custom IoT hardware and edge AI for real-time control, biometric access, and device learning.",
            image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&q=80",
            details:
              "Overview\n• All-in-One Smart Home AI Assistant with Edge Computing. Discover how we built a privacy-first smart home assistant with custom IoT hardware and edge AI for real-time control, biometric access, and device learning.\n\nMetadata\n• Tags: Edge AI, Smart Home, Privacy\n• Detail page: Not currently discoverable via browser traversal/crawl in this pass."
          },
          {
            title: "IoT-Based Cost-Effective Electricity Generation and Monitoring System",
            body:
              "An innovative IoT-powered decentralized energy solution with real-time monitoring, remote control, and advanced analytics to optimize electricity generation and management across multiple stations.",
            image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&auto=format&q=80",
            details:
              "Overview\n• A forward-thinking client approached us to design a cost-effective, IoT-based electricity generation solution. While similar in concept to solar panel setups, the client's vision expanded into a fully integrated hardware-software ecosystem capable of generating electricity while offering advanced monitoring, control, and analytics for each rooftop-installed unit.\n\nTechnology Stack\n• Python\n• AWS\n• Nodejs\n• React\n• MongoDB\n\nKey Challenges\n• Develop hardware for rooftop electricity generation\n• Create a centralized system for remote monitoring and control\n• Provide a platform for tracking electricity generation and system adjustments\n• Establish an ERP system for device management and integration\n• Implement advanced analytics for performance assessment\n\nSolutions\n• Designed an IoT-powered energy management ecosystem\n• Developed custom PCBs with sensors for environmental monitoring\n• Built a responsive frontend using React.js and Next.js\n\nBenefits Delivered\n• Enabled real-time insights for administrators and end-users\n• Facilitated remote control capabilities\n• Optimized performance across multiple locations",
            learnMoreHref: "/contact"
          },
          {
            title: "IoT Integration with ERP for Optimized Production",
            body:
              "IoT-ERP integration for real-time production monitoring and automated data exchange, enhancing operational efficiency and informed decision-making.",
            image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&auto=format&q=80",
            details:
              "Overview\n• IoT-ERP integration for real-time production monitoring and automated data exchange, enhancing operational efficiency and informed decision-making.\n\nMetadata\n• Tags: IoT, ERP\n• Detail page: Not currently discoverable via browser traversal/crawl in this pass."
          },
          {
            title: "Enhancing IoT Capabilities for View",
            body:
              "Enhanced IoT capabilities for View Inc. through comprehensive DevOps, cloud, mobile development, and 24/7 support, driving innovation and operational efficiency.",
            image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&auto=format&q=80",
            details:
              "Overview\n• Our client, View Inc., a leader in smart glass and building technology, initially sought a DevOps engineer for infrastructure management. This evolved into a long-term partnership, where we supported their growing needs in full-stack development, mobile apps, IoT integration, and 24/7 infrastructure support, becoming a key part of their engineering team.\n\nTechnology Stack\n• AWS\n• Kubernetes\n• MongoDB\n• Redux\n• Google Cloud\n• Nodejs\n• React\n• Docker\n\nKey Challenges\n• Improve IoT system capabilities for increased efficiency.\n• Efficient management of a growing infrastructure.\n• Building a team that can work seamlessly across different time zones.\n• Scaling development capabilities to handle both full-stack and mobile app development.\n• Delivering 24/7 DevOps support to guarantee system availability.\n\nSolutions\n• Built a dedicated DevOps team to provide 24/7 operational support.\n• Team responsible for monitoring, troubleshooting, and maintaining servers.\n• Hired 5 Full-Stack Engineers to work in PST time zone for collaboration.\n\nBenefits Delivered\n• Ensured optimal performance and uptime.\n• Seamless communication and project execution.\n• Comprehensive solutions that ensure the stability and continuous growth.",
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
              "Overview\n• The client required a secure and scalable case management platform to streamline communication and collaboration between clients and case managers. The goal was to build a centralized system where users could track case progress, manage documents, schedule appointments, and communicate efficiently.\n\nTechnology Stack\n• React Native\n• Next JS\n• Node JS\n• FireBase\n• TypeScript\n• MondoDB\n• AWS\n\nKey Challenges\n• Fragmented communication across emails and manual updates\n• Lack of real-time case visibility\n• Document management issues\n• Complex workflow management\n\nSolutions\n• Centralized case management platform\n• Real-time case tracking\n• Secure document management\n• Integrated communication system\n• Task and workflow automation\n• Role-based access and security\n\nBenefits Delivered\n• Improved client transparency\n• Better communication\n• Efficient case management\n• Operational efficiency",
            learnMoreHref: "/contact"
          },
          {
            title: "AI Platform for DPDP Compliance & Data Governance",
            body:
              "AI-powered DPDP compliance platform that automates policy management, evidence collection, and auditor reviews with secure BYOC storage in AWS, GCP, or SharePoint.",
            image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&q=80",
            details:
              "Overview\n• Indian fintech company required to comply with the Digital Personal Data Protection (DPDP) Act 2023. They needed a centralized compliance system that never stores sensitive data outside their own cloud.\n\nTechnology Stack\n• React JS\n• Node JS\n• TypeScript\n• PostgreSQL\n• Docker\n• SendGrid\n• OpenAI\n• AWS S3\n• Pinecone\n• AWS\n• GCP\n• SharePoint adapters\n\nKey Challenges\n• Manual tracking of 50+ DPDP controls was slow and error-prone.\n• Strict data sovereignty rules prohibited external file uploads.\n• Repetitive TPRM questionnaires wasted hours on manual research.\n• Inefficient auditor reviews due to full-access sharing.\n• No real-time compliance score or automated reports for audits.\n• Complex support for multiple storage providers.\n\nSolutions\n• Tenant isolation via PostgreSQL Row-Level Security and subdomain-based routing.\n• Storage abstraction layer using signed URLs and Microsoft Graph.\n• Pre-loaded DPDP framework for status tracking and compliance scoring.\n• Evidence & Policy modules with tagging and expiry alerts.\n• AI Questionnaire Assistant for auto-generated responses.\n• Task management with email reminders and secure Auditor Portal.\n\nBenefits Delivered\n• 70% reduction in manual compliance work.\n• 100% data sovereignty with zero sensitive files on servers.\n• AI reduces TPRM questionnaire time by ~75%.\n• Real-time compliance score and instant auditor-ready reports.\n• Secure auditor access without data risk.\n• Single platform works seamlessly across AWS, GCP, and SharePoint.",
            learnMoreHref: "/contact"
          },
          {
            title: "AI Knowledge Graph Platform for Enterprise Data Intelligence",
            body:
              "AI-powered knowledge graph platform that connects ERP systems, emails, and operational data into a unified system enabling semantic search, natural language queries, and insights.",
            image: "https://images.unsplash.com/photo-1545987796-200677ee1011?w=800&auto=format&q=80",
            details:
              "Overview\n• Our client is a Netherlands-based manufacturing company specializing in precision laser cutting services for industrial clients. The company manages a large volume of operational data, including customer records, production orders, invoices, support tickets, and email communications.\n• Over time, these data sources were stored in different systems such as ERP databases and email servers. While each system served a specific operational purpose, the lack of integration between them created challenges in accessing comprehensive information about customers, orders, and support issues.\n• The organization needed a solution that could connect these fragmented data sources and allow employees to retrieve insights quickly without navigating multiple systems.\n\nTechnology Stack\n• Python\n• FastAPI\n• Neo4j\n• Pandas\n• huggingface\n• NumPy\n• Playwright\n• Streamlit\n• OpenAI\n\nKey Challenges\n• Fragmented Business Data\n• Manual Cross-Referencing\n• Limited Data Insights\n• Complex Database Structure\n• Lack of Natural Interaction\n\nSolutions\n• Data Integration Pipeline\n• Graph-Based Data Modeling\n• Taxonomy and Controlled Vocabulary\n• AI-Powered Natural Language Query Engine\n• Semantic Search Using Embeddings\n• Interactive Chat Interface\n\nBenefits Delivered\n• Unified Business Data\n• Faster Information Retrieval\n• Improved Operational Visibility\n• Semantic Search Capabilities\n• Scalable Data Architecture",
            learnMoreHref: "/contact"
          },
          {
            title: "Casino Analytics: User Engagement Analysis",
            body:
              "Improving player engagement through high-velocity data analytics and secure engineering. Ingesting and analyzing terabytes of player data to drive behavioral insights while ensuring the highest level of security and regulatory compliance.",
            image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&auto=format&q=80",
            details:
              "Overview\n• Explore Stellarmind.ai's AI, IoT, and AR solutions to boost efficiency and innovation. Discover custom software solutions tailored to meet your business needs.\n\nTechnology Stack\n• Python\n• Django\n• Airflow\n• Snowflake\n\nKey Challenges\n• Fragmented data sources\n• Massive volumes of data\n• Hindered real-time decision-making\n• Inadequate player profiling\n\nSolutions\n• Implemented Apache Airflow for data orchestration\n• Built ingestion engines using Snowpark and Python\n• Embedded rigorous data governance with dynamic masking and encryption\n\nBenefits Delivered\n• 30% improvement in player engagement\n• 500+ daily concurrent pipelines\n• 40% reduction in compute costs\n• GDPR & AML compliance with role-based access control",
            learnMoreHref: "/contact"
          },
          {
            title: "Automated SOC 2 Audit Review with Mistral AI",
            body:
              "AI-driven solution automated SOC 2 report evaluation for a cybersecurity firm, enhancing report accuracy, reducing manual efforts, and boosting compliance.",
            image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format&q=80",
            details:
              "Overview\n• The client is a USA-based cybersecurity firm offering end-to-end solutions in data protection, privacy, and regulatory compliance. Their services span penetration testing, vulnerability assessments, and comprehensive audits for frameworks like SOC 2, ISO 27001, HIPAA, and GDPR.\n\nTechnology Stack\n• Python\n• Hugging Face\n• Mistral-7B\n• AWS (EC2)\n• AWS (S3)\n• MongoDB\n\nKey Challenges\n• Inconsistent formats of reports with varying structures and language.\n• Lack of a uniform schema complicating content mapping to Trust Services Criteria (TSC).\n• Subjective evaluation of report quality based on nuanced factors like clarity and completeness.\n• Need for a robust multi-dimensional scoring framework for fair evaluations.\n• Requirement to chunk and embed SOC 2 documents without losing context.\n\nSolutions\n• Preprocessed SOC 2 reports by removing noise and normalizing structures.\n• Segmented data into categories corresponding to the Trust Services Criteria.\n• Model evaluated categories and returned quality scores with justifications.\n• Parsed tables from PDF reports for TSC mappings and audit procedures.\n• Designed token-efficient prompts for context-aware LLM use.\n• Converted document segments into embeddings for efficient retrieval.\n\nBenefits Delivered\n• Significantly reduced manual effort in SOC 2 report review.\n• Delivered structured evaluations that minimize human bias.\n• Enabled intelligent retrieval ensuring only relevant information is analyzed.\n• Provided detailed explanations for scores, enhancing transparency.\n• Improved compliance documentation by identifying gaps in reports.",
            learnMoreHref: "/contact"
          },
          {
            title: "AI-Powered Gameplay Analysis System",
            body:
              "Transforming screen recordings into actionable performance insights with high-fidelity computer vision and neural networks for competitive gaming.",
            image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&auto=format&q=80",
            details:
              "Overview\n• Our client is a UAE-based esports organization specializing in competitive gaming and event management\n\nTechnology Stack\n• Python\n• YoloV8\n• Scikit_Learn\n• Tesseract_OCR\n• OpenCV\n• Next.js\n• Node.js\n• MongoDB\n\nKey Challenges\n• Manual review time is slow.\n• Restricted game APIs block functionality.\n• Handling diverse resolutions and visual skins.\n• Need to process 60 frames per second.\n• Dynamic lighting changes affect OCR reliability.\n• Balancing depth of analysis with processing cost.\n\nSolutions\n• Optimized video pipeline reduces redundant computation by 40%.\n• Custom-trained YOLOv8 weights for event detection.\n• Insight engine correlates positioning with win rates.\n\nBenefits Delivered\n• 60-70% reduction in session review time.\n• Automated tagging of gameplay clips.\n• Immediate feedback through low-latency processing.\n• Deep insights into positioning, timing, and aim.",
            learnMoreHref: "/contact"
          },
          {
            title: "Implementing Sentiment Analysis Using AI/ML Techniques",
            body:
              "Implemented sentiment analysis for an e-commerce company, categorizing customer reviews into positive, neutral, or negative sentiments using advanced AI/ML techniques.",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&q=80",
            details:
              "Overview\n• Implemented sentiment analysis for an e-commerce company, categorizing customer reviews into positive, neutral, or negative sentiments using advanced AI/ML techniques.\n\nMetadata\n• Tags: AI/ML, Sentiment Analysis\n• Detail page: Not currently discoverable via browser traversal/crawl in this pass."
          },
          {
            title: "AI-Powered Employee Engagement System",
            body:
              "Developed an AI-powered system to enhance employee engagement by tracking behavior, monitoring moods, and delivering personalized greetings. Integrated with the HRMS to streamline attendance tracking and mood analysis.",
            image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&q=80",
            details:
              "Overview\n• Our client sought to enhance employee engagement by leveraging AI and machine learning to track office behavior, monitor moods, and deliver personalized greetings. The solution also needed to integrate with their HRMS tool to streamline attendance and improve overall employee satisfaction.\n\nTechnology Stack\n• AWS\n• FFmpeg\n• Opencv\n• Pytorch\n• Tensorflow\n• Node Js\n• React\n\nKey Challenges\n• Improve employee engagement\n• Assess moods\n• Automated attendance tracking\n• Integrate with HRMS tool\n• Detect office absences\n\nSolutions\n• Developed AI-powered engagement system\n• Integrated facial recognition for employee tracking\n• Automated attendance tracking via HRMS\n\nBenefits Delivered\n• Real-time mood analysis\n• Enhanced workplace interactions\n• Valuable insights into employee well-being",
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
              "Overview\n• The client aimed to build Krushiratn, a digital agriculture platform designed to empower farmers with technology-driven solutions. The goal was to create a unified ecosystem where farmers can access crop information, sell produce, connect with companies, and receive AI-powered assistance for agricultural queries.\n\nTechnology Stack\n• Python\n• FastAPI\n• React JS\n• Express JS\n• Node JS\n• Groq\n• Google Translator APIs\n• OpenAI\n• MySQL\n• RAG\n• Sarvam AI\n\nKey Challenges\n• Fragmented Agricultural Marketplace\n• Lack of Digital Access for Farmers\n• Inefficient Crop Trading Process\n• Language and Communication Barriers\n• Difficulty Accessing Agricultural Knowledge\n\nSolutions\n• AI-Powered Agricultural Assistant\n• Digital Crop Marketplace\n• Buy-Sell Marketplace for Agricultural Products\n• Crop Advisory and Information System\n• Admin Management System\n\nBenefits Delivered\n• Improved Market Access for Farmers\n• Localized AI Assistance\n• Streamlined Crop Trading\n• Increased Transparency\n• Scalable Agriculture Ecosystem",
            learnMoreHref: "/contact"
          },
          {
            title: "AI-Powered Automated Forex Trading & Intelligence System",
            body:
              "Discover how we transformed an unstable forex trading platform into a robust, scalable intelligence system with AI-powered automation, real-time synchronization, and intelligent risk management.",
            image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&auto=format&q=80",
            details:
              "Overview\n• The client operates a forex and stock market trading platform focused on enabling automated, data-driven trading. Their platform leverages market signals, algorithmic strategies, and real-time analytics to help users execute trades and monitor performance efficiently.\n\nTechnology Stack\n• Python\n• FastAPI\n• SQLite\n• TypeScript\n• Node JS\n• Docker\n• Digital Ocean\n• TradingView API\n• OANDA API\n• Next JS\n• JWT\n\nKey Challenges\n• System instability and inconsistent results\n• No accurate trade synchronization\n• Slow and difficult debugging\n• Incorrect calculations impacting risk\n• Security and system gaps\n\nSolutions\n• System stabilization and reliability fixes\n• Real-time trade synchronization engine\n• Faster debugging with local environment setup\n• Improved risk and position management\n• Security and backend strengthening\n• Complete trading ecosystem development\n• Deployment and live trading enablement\n• AI-powered intelligence layer\n\nBenefits Delivered\n• Reliable and stable trading system\n• Accurate and real-time data\n• Faster issue resolution\n• Safer risk management\n• Production-ready security\n• Scalable trading platform\n• AI-driven performance growth",
            learnMoreHref: "/contact"
          },
          {
            title: "Next-Gen Archery with AR, AI & 3D Tools",
            body:
              "A cutting-edge iOS application combining Augmented Reality (AR), Artificial Intelligence (AI), and 3D visualization to revolutionize archery performance tracking, delivering real-time trajectory insights and precision shot analysis.",
            image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&auto=format&q=80",
            details:
              "Overview\n• A cutting-edge iOS application combining Augmented Reality (AR), Artificial Intelligence (AI), and 3D visualization to revolutionize archery performance tracking, delivering real-time trajectory insights and precision shot analysis.\n\nMetadata\n• Tags: AR, AI, 3D Visualization, Sports Technology\n• Detail page: Not currently discoverable via browser traversal/crawl in this pass."
          },
          {
            title: "AR Educational App for Children",
            body:
              "Developed an interactive AR educational app for children, combining 3D characters, real-time AI interactions, and book-based learning for an engaging experience.",
            image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&auto=format&q=80",
            details:
              "Overview\n• Our client approached us with an innovative idea to develop an augmented reality (AR) application for children. The goal was to create an interactive educational app that would enhance learning by bringing book characters to life and enabling interactive conversations.\n\nTechnology Stack\n• Nodejs\n• React\n• PostgreSQL\n• MongoDB\n• Google Cloud\n• Docker\n• Unity 3D\n• Maya 3D\n• AI Interaction\n\nKey Challenges\n• Real-Time AR Interaction\n• Unity 3D for AR Development\n• Book Page Scanning\n• Character Animation\n• Voice Integration\n• AI Interaction\n• Maya 3D for Character Creation\n• Interactive Narration and Q&A\n\nSolutions\n• Designed an AR app with interactive elements for children.\n• Utilized Unity 3D to develop the AR functionalities, enabling real-time character activation and interaction.\n\nBenefits Delivered\n• Enhances children's learning experiences.\n• Creates lifelike 3D characters.\n• Meets complex requirements for educational technology projects.",
            learnMoreHref: "/contact"
          },
          {
            title: "Photo and Video Editing Mobile App",
            body:
              "Developed a custom mobile app for advanced photo and video editing with real-time effects, artistic filters, and Bitmoji integration, without using third-party SDKs.",
            image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&auto=format&q=80",
            details:
              "Overview\n• Our client approached us with the ambitious goal of creating a mobile app for photo and video editing with advanced functionalities, without relying on any third-party SDKs. The app needed to be robust and feature-rich, catering to both iOS and Android platforms.\n\nTechnology Stack\n• AWS\n• Kubernetes\n• Nodejs\n• React\n• PostgreSQL\n• MongoDB\n• NextdotJS\n• Docker\n\nKey Challenges\n• No Third-Party SDKs\n• Create Touch Fast/Slow Motion Editing While Recording\n• Convert Pictures to Beautiful Art\n• Quickly Trim, Cut, Crop, and Share\n• Add Snapchat Bitmojis Directly to Videos\n• Add Filters Like Snapchat and Instagram\n• Core Camera Features for iOS\n• Core Camera Features and FFmpeg for Android\n• Custom Filters and Effects\n\nSolutions\n• Enabled fast and slow-motion effects during video recording with one touch\n• Applied artistic filters and effects to transform photos\n\nBenefits Delivered\n• Feature-rich photo and video editing app\n• Advanced functionalities like fast/slow motion editing\n• Artistic photo transformation\n• Bitmoji integration",
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
          "Overview\n• Our client is a compliance-focused organization that requires strict background verification during account onboarding. They needed an automated system to continuously collect and update global sanctions data from multiple government sources and screen users against it in real time. This ensures regulatory compliance while preventing high-risk or restricted individuals from accessing the platform.\n\nTechnology Stack\n• Python\n• MySQL\n• PostgreSQL\n• Cron Jobs (Linux)\n\nKey Challenges\n• High accuracy required due to legal and financial implications\n• False positives/negatives could impact business operations\n• Efficient parsing and storage required for large datasets\n• Needed near real-time synchronization to avoid outdated checks\n• Required deduplication and entity resolution due to name variations\n• Lack of standard structure across datasets\n• Needed robust retry and error-handling mechanisms due to changing government endpoints\n\nSolutions\n• Built a centralized parser to handle XML, Excel, and API responses\n• Implemented cron jobs running every 3 hours for continuous synchronization\n• Applied name matching, alias mapping, and unique identifiers for normalization\n• Added fallback logic and logging for failed scrapes to ensure resilience\n• Indexed key fields and optimized database design for fast search\n• Integrated database with onboarding workflow for real-time screening\n\nBenefits Delivered\n• Automated screening ensures adherence to global regulatory requirements\n• Immediate identification of high-risk individuals during account creation\n• Eliminated manual verification effort, significantly reducing overhead\n• Aggregates data from multiple global authorities\n• Provides a consistent, reliable dataset for accurate risk assessment\n• Can accommodate future expansion in data sources with minimal changes",
        learnMoreHref: "/contact"
      },
      {
        title: "AI Job Platform for Immigration & PR-Eligible Opportunities",
        body:
          "AI-powered job search platform that helps skilled professionals find immigration-friendly roles and identify employment opportunities aligned with PR pathways.",
        details:
          "Overview\n• The client is a Canada-focused immigration technology startup aiming to simplify the PR pathway for skilled immigrants worldwide. Their mission is to eliminate the confusion around which jobs genuinely qualify for Canadian Permanent Residency and give newcomers a clear, structured path toward building a life in Canada.\n\nTechnology Stack\n• Python\n• Next JS\n• AWS S3\n• Hostinger VPS\n• PHP\n• Cloudflare\n\nKey Challenges\n• Confusion over job eligibility for PR pathways\n• No tools directly mapping jobs to PR eligibility criteria\n• Need for reliable low-latency infrastructure\n• Requirement for scalable and secure file delivery\n• Need for cost-efficient deployment without sacrificing reliability\n\nSolutions\n• Implemented Cloudflare for enhanced security and performance\n• Configured offsite backup storage in AWS S3\n• Established immutable backups in AWS S3\n• Created comprehensive documentation for operational procedures\n\nBenefits Delivered\n• Global performance with low latency through Cloudflare\n• Secure and reliable file handling with AWS S3\n• Cost-effective infrastructure combining VPS hosting, Cloudflare, and S3",
        learnMoreHref: "/contact"
      },
      {
        title: "Deterministic AI Enterprise Intelligence Platform",
        body:
          "Enterprise intelligence platform combining AI and rule engines to analyze enterprise data and deliver reliable, explainable decision support.",
        details:
          "Overview\n• Our client is a technology-driven enterprise organization focused on transforming how businesses analyze data and make operational decisions.\n• Traditional enterprise analytics platforms often rely on dashboards, manual analysis, and business intelligence tools that require human interpretation before action can be taken. While large language models (LLMs) provide powerful language capabilities, they often lack deterministic control, auditability, and reliability for enterprise decision-making.\n• The client wanted to build a next-generation enterprise intelligence platform that combines the reasoning power of LLMs with deterministic domain logic engines. The goal was to create a system capable of analyzing enterprise data, applying rule-based intelligence, and delivering clear, explainable insights to business users through natural language interfaces.\n\nTechnology Stack\n• Python\n• FastAPI\n• PostgreSQL\n• Redis\n• RBAC Framework\n• Open AI\n• Docker\n• Pinecone\n• Next JS\n• Enterprise APIs\n\nKey Challenges\n• LLMs can hallucinate information and make inconsistent decisions.\n• Black-box AI models fail compliance and audit requirements.\n• Same input must always produce the same decision output.\n• Different industries require different rules and metrics.\n• Need to combine structured and unstructured data sources.\n\nSolutions\n• Developed an AI Enterprise Intelligence Platform integrating a deterministic domain logic engine.\n• Separated language understanding from decision logic for reliability.\n• Used a configuration-driven domain architecture for customization.\n• Included a signal computation layer for meaningful metrics.\n• Implemented a rule engine for structured decision outputs.\n• Created a scoring engine for prioritized intelligence.\n• Established enterprise guardrails for compliance controls.\n• Controlled LLM integration for natural language capabilities.\n\nBenefits Delivered\n• Reliable AI decision intelligence driven by deterministic rules.\n• Every insight is traceable to signals, rules, and scores.\n• Scalable across industries with minimal effort.\n• Faster business insights through natural language queries.\n• Enterprise-grade security with access control and audit logging.",
        learnMoreHref: "/contact"
      },
      {
        title: "Secure CaseTracking & Client Management System",
        body:
          "Secure case management platform that enables clients and case managers to track case progress, manage documents, communicate, and schedule appointments.",
        details:
          "Overview\n• The client required a secure and scalable case management platform to streamline communication and collaboration between clients and case managers. The goal was to build a centralized system where users could track case progress, manage documents, schedule appointments, and communicate efficiently.\n\nTechnology Stack\n• React Native\n• Next JS\n• Node JS\n• FireBase\n• TypeScript\n• MondoDB\n• AWS\n\nKey Challenges\n• Fragmented communication across emails and manual updates\n• Lack of real-time case visibility\n• Document management issues\n• Complex workflow management\n\nSolutions\n• Centralized case management platform\n• Real-time case tracking\n• Secure document management\n• Integrated communication system\n• Task and workflow automation\n• Role-based access and security\n\nBenefits Delivered\n• Improved client transparency\n• Better communication\n• Efficient case management\n• Operational efficiency",
        learnMoreHref: "/contact"
      },
      {
        title: "AI-Powered Consulting Procurement Automation Platform",
        body:
          "AI-powered platform that automates supplier proposal review, pricing checks, and compliance-helping procurement teams save time, reduce risks, and decide faster.",
        details:
          "Overview\n• Our client is a large company that regularly hires external consultants and service providers for projects - from strategy and IT to operations and transformation. Every time a supplier sends a proposal or Statement of Work (SOW), multiple people (business users, procurement specialists, legal teams) had to carefully read and check dozens of pages to make sure everything followed company policies, pricing guidelines, and strategic rules. This happened many times every month.\n\nTechnology Stack\n• Python\n• LangChain\n• LangGraph\n• Azure\n• OpenAI\n\nKey Challenges\n• Reviewing long proposals took hours or even days.\n• Risk of human error in contract clauses and pricing.\n• Inconsistent formats of supplier documents.\n• Manual price benchmarking against internal rates.\n• Lack of clear decision data.\n\nSolutions\n• Easy upload and instant reading of proposals.\n• Automatic smart checks for compliance and pricing accuracy.\n• Clear, human-friendly report with actionable insights.\n\nBenefits Delivered\n• Cut proposal review time by 60-80%.\n• Far fewer mistakes and compliance problems.\n• Real cost savings by identifying overpriced proposals.\n• Happier procurement and business teams.\n• Consistent decision-making across reviews.\n• Better supplier negotiations with clear facts.",
        learnMoreHref: "/contact"
      },
      {
        title: "AI Platform for DPDP Compliance & Data Governance",
        body:
          "AI-powered DPDP compliance platform that automates policy management, evidence collection, and auditor reviews with secure BYOC storage in AWS, GCP, or SharePoint.",
        details:
          "Overview\n• Indian fintech company required to comply with the Digital Personal Data Protection (DPDP) Act 2023. They needed a centralized compliance system that never stores sensitive data outside their own cloud.\n\nTechnology Stack\n• React JS\n• Node JS\n• TypeScript\n• PostgreSQL\n• Docker\n• SendGrid\n• OpenAI\n• AWS S3\n• Pinecone\n• AWS\n• GCP\n• SharePoint adapters\n\nKey Challenges\n• Manual tracking of 50+ DPDP controls was slow and error-prone.\n• Strict data sovereignty rules prohibited external file uploads.\n• Repetitive TPRM questionnaires wasted hours on manual research.\n• Inefficient auditor reviews due to full-access sharing.\n• No real-time compliance score or automated reports for audits.\n• Complex support for multiple storage providers.\n\nSolutions\n• Tenant isolation via PostgreSQL Row-Level Security and subdomain-based routing.\n• Storage abstraction layer using signed URLs and Microsoft Graph.\n• Pre-loaded DPDP framework for status tracking and compliance scoring.\n• Evidence & Policy modules with tagging and expiry alerts.\n• AI Questionnaire Assistant for auto-generated responses.\n• Task management with email reminders and secure Auditor Portal.\n\nBenefits Delivered\n• 70% reduction in manual compliance work.\n• 100% data sovereignty with zero sensitive files on servers.\n• AI reduces TPRM questionnaire time by ~75%.\n• Real-time compliance score and instant auditor-ready reports.\n• Secure auditor access without data risk.\n• Single platform works seamlessly across AWS, GCP, and SharePoint.",
        learnMoreHref: "/contact"
      },
      {
        title: "Krushiratn: Digital Agriculture Marketplace Platform",
        body:
          "Smart agriculture platform that helps farmers access crop advisory, connect with agribusinesses, and use digital tools and AI insights to improve productivity.",
        details:
          "Overview\n• The client aimed to build Krushiratn, a digital agriculture platform designed to empower farmers with technology-driven solutions. The goal was to create a unified ecosystem where farmers can access crop information, sell produce, connect with companies, and receive AI-powered assistance for agricultural queries.\n\nTechnology Stack\n• Python\n• FastAPI\n• React JS\n• Express JS\n• Node JS\n• Groq\n• Google Translator APIs\n• OpenAI\n• MySQL\n• RAG\n• Sarvam AI\n\nKey Challenges\n• Fragmented Agricultural Marketplace\n• Lack of Digital Access for Farmers\n• Inefficient Crop Trading Process\n• Language and Communication Barriers\n• Difficulty Accessing Agricultural Knowledge\n\nSolutions\n• AI-Powered Agricultural Assistant\n• Digital Crop Marketplace\n• Buy-Sell Marketplace for Agricultural Products\n• Crop Advisory and Information System\n• Admin Management System\n\nBenefits Delivered\n• Improved Market Access for Farmers\n• Localized AI Assistance\n• Streamlined Crop Trading\n• Increased Transparency\n• Scalable Agriculture Ecosystem",
        learnMoreHref: "/contact"
      },
      {
        title: "AI-Powered Automated Forex Trading & Intelligence System",
        body:
          "Discover how we transformed an unstable forex trading platform into a robust, scalable intelligence system with AI-powered automation, real-time synchronization, and intelligent risk management.",
        details:
          "Overview\n• The client operates a forex and stock market trading platform focused on enabling automated, data-driven trading. Their platform leverages market signals, algorithmic strategies, and real-time analytics to help users execute trades and monitor performance efficiently.\n\nTechnology Stack\n• Python\n• FastAPI\n• SQLite\n• TypeScript\n• Node JS\n• Docker\n• Digital Ocean\n• TradingView API\n• OANDA API\n• Next JS\n• JWT\n\nKey Challenges\n• System instability and inconsistent results\n• No accurate trade synchronization\n• Slow and difficult debugging\n• Incorrect calculations impacting risk\n• Security and system gaps\n\nSolutions\n• System stabilization and reliability fixes\n• Real-time trade synchronization engine\n• Faster debugging with local environment setup\n• Improved risk and position management\n• Security and backend strengthening\n• Complete trading ecosystem development\n• Deployment and live trading enablement\n• AI-powered intelligence layer\n\nBenefits Delivered\n• Reliable and stable trading system\n• Accurate and real-time data\n• Faster issue resolution\n• Safer risk management\n• Production-ready security\n• Scalable trading platform\n• AI-driven performance growth",
        learnMoreHref: "/contact"
      },
      {
        title: "AI Knowledge Graph Platform for Enterprise Data Intelligence",
        body:
          "AI-powered knowledge graph platform that connects ERP systems, emails, and operational data into a unified system enabling semantic search, natural language queries, and insights.",
        details:
          "Overview\n• Our client is a Netherlands-based manufacturing company specializing in precision laser cutting services for industrial clients. The company manages a large volume of operational data, including customer records, production orders, invoices, support tickets, and email communications.\n• Over time, these data sources were stored in different systems such as ERP databases and email servers. While each system served a specific operational purpose, the lack of integration between them created challenges in accessing comprehensive information about customers, orders, and support issues.\n• The organization needed a solution that could connect these fragmented data sources and allow employees to retrieve insights quickly without navigating multiple systems.\n\nTechnology Stack\n• Python\n• FastAPI\n• Neo4j\n• Pandas\n• huggingface\n• NumPy\n• Playwright\n• Streamlit\n• OpenAI\n\nKey Challenges\n• Fragmented Business Data\n• Manual Cross-Referencing\n• Limited Data Insights\n• Complex Database Structure\n• Lack of Natural Interaction\n\nSolutions\n• Data Integration Pipeline\n• Graph-Based Data Modeling\n• Taxonomy and Controlled Vocabulary\n• AI-Powered Natural Language Query Engine\n• Semantic Search Using Embeddings\n• Interactive Chat Interface\n\nBenefits Delivered\n• Unified Business Data\n• Faster Information Retrieval\n• Improved Operational Visibility\n• Semantic Search Capabilities\n• Scalable Data Architecture",
        learnMoreHref: "/contact"
      },
      {
        title: "AI Medical Waste Monitoring System for Safe Disposal",
        body:
          "AI-powered system detecting improper medical waste disposal in real time, including sharps. Improves safety, ensures compliance, and provides audit-ready logs.",
        details:
          "Overview\n• A leading healthcare facility managing high volumes of biomedical and hazardous waste daily. They needed foolproof segregation, instant violation detection, and strong audit documentation all without compromising staff time or patient privacy.\n\nTechnology Stack\n• YOLO\n• AWS\n• SSD (MobileNet)\n• OpenCV\n• IoT sensors\n\nKey Challenges\n• Frequent misplacement of sharps into incorrect bins\n• Slow, unreliable manual inspections\n• Zero real-time visibility into improper disposals\n• Incomplete or inaccurate waste-type tracking for regulatory audits\n• Constant pressure to avoid fines and improve safety scores\n• Overworked clinical teams unable to take on more monitoring tasks\n\nSolutions\n• IoT sensors instantly detect every waste drop\n• Advanced AI classifies items as sharps, gloves, general medical waste, or others\n• Real-time alerts trigger on wrong item entries or full bins\n• Event logs and images uploaded to AWS for review and compliance\n• Privacy-first design with no continuous video recording\n• User-friendly web dashboard for live bin status and alerts\n• Lightning-fast local decisions with secure cloud storage\n\nBenefits Delivered\n• Dramatically reduced undetected sharps misplacements\n• Immediate staff intervention preventing hazards\n• Achieved 85-90% real-world accuracy\n• Fully automated waste-type reports for audits\n• Continuous model improvement via secure AWS uploads\n• Single dashboard visibility across monitored bins\n• Lower risk of fines and compliance violations\n• Freed up valuable staff time while improving safety",
        learnMoreHref: "/contact"
      },
      {
        title: "AI Ticket Opportunity Detection System for Event Brokers",
        body:
          "An AI-powered intelligence platform that monitors ticketing sites, announcements, and emails to instantly alert brokers about presale opportunities in real time.",
        details:
          "Overview\n• Our client is a U.S.-based ticket intelligence platform that helps ticket brokers and event professionals identify presale opportunities for concerts, tours, and major live events. The platform focuses on detecting early signals of ticket availability across multiple online sources so brokers can act quickly and secure tickets before they become widely available.\n• In the competitive ticket resale industry, timing is critical. Even a few minutes can determine whether an opportunity is captured or missed. To strengthen their capabilities, the client required a robust automated system capable of detecting ticket opportunities in real time and delivering instant alerts to their internal team and broker network.\n\nTechnology Stack\n• Python\n• FastAPI\n• PostgreSQL\n• Redis\n• Docker\n• Playwright\n• Gmail API\n• Signal CLI\n• Twilio\n• BeautifulSoup\n• Ticketmaster Discovery API\n• SendGrid\n• Google Custom Search API\n\nKey Challenges\n• Monitoring fragmented data sources for presale opportunities was inefficient.\n• Need for a system capable of real-time detection of opportunities.\n• System required to filter duplicates and avoid irrelevant alerts.\n• Alerts had to be delivered across multiple notification channels.\n• Needed a reliable system for continuous 24/7 monitoring.\n\nSolutions\n• Developed a modular monitoring engine for scanning multiple sources.\n• Implemented an intelligent detection engine with classification logic.\n• Established a deduplication mechanism for alerts.\n• Created a real-time notification engine for instant alerts.\n• Built a modular architecture for scalable monitoring.\n• Deployed the system in a containerized environment with high availability.\n\nBenefits Delivered\n• Faster detection of ticket opportunities across multiple sources.\n• Immediate real-time alerts for presale opportunities.\n• Reduced need for manual monitoring of platforms.\n• Improved quality of signals with reduced alert noise.\n• Scalable system for future growth and additional monitoring.",
        learnMoreHref: "/contact"
      },
      {
        title: "Casino Analytics: User Engagement Analysis",
        body:
          "Improving player engagement through high-velocity data analytics and secure engineering. Ingesting and analyzing terabytes of player data to drive behavioral insights while ensuring the highest level of security and regulatory compliance.",
        details:
          "Overview\n• Explore Stellarmind.ai's AI, IoT, and AR solutions to boost efficiency and innovation. Discover custom software solutions tailored to meet your business needs.\n\nTechnology Stack\n• Python\n• Django\n• Airflow\n• Snowflake\n\nKey Challenges\n• Fragmented data sources\n• Massive volumes of data\n• Hindered real-time decision-making\n• Inadequate player profiling\n\nSolutions\n• Implemented Apache Airflow for data orchestration\n• Built ingestion engines using Snowpark and Python\n• Embedded rigorous data governance with dynamic masking and encryption\n\nBenefits Delivered\n• 30% improvement in player engagement\n• 500+ daily concurrent pipelines\n• 40% reduction in compute costs\n• GDPR & AML compliance with role-based access control",
        learnMoreHref: "/contact"
      },
      {
        title: "FMCG Multi Tool Integrator \\| Data Analyst",
        body:
          "Architecting Real-Time Data Synchronization for Enterprise Sales. A sophisticated data engineering solution designed to unify fragmented sales tools into a single source of truth.",
        details:
          "Overview\n• Architecting Real-Time Data Synchronization for Enterprise Sales. A sophisticated data engineering solution designed to unify fragmented sales tools into a single source of truth.\n\nMetadata\n• Tags: Enterprise Architecture, Data Engineering\n• Detail page: Not currently discoverable via browser traversal/crawl in this pass."
      },
      {
        title: "AI-Powered IoT for Smarter Home Automation (AIVA)",
        body:
          "Smart IoT solution for homes: experience real-time automation, voice control, and seamless device integration with enhanced privacy.",
        details:
          "Overview\n• Smart IoT solution for homes: experience real-time automation, voice control, and seamless device integration with enhanced privacy.\n\nMetadata\n• Tags: AI, IoT, Smart Home\n• Detail page: Not currently discoverable via browser traversal/crawl in this pass."
      },
      {
        title: "AIVA: Privacy-First Edge AI",
        body:
          "All-in-One Smart Home AI Assistant with Edge Computing. Discover how we built a privacy-first smart home assistant with custom IoT hardware and edge AI for real-time control, biometric access, and device learning.",
        details:
          "Overview\n• All-in-One Smart Home AI Assistant with Edge Computing. Discover how we built a privacy-first smart home assistant with custom IoT hardware and edge AI for real-time control, biometric access, and device learning.\n\nMetadata\n• Tags: Edge AI, Smart Home, Privacy\n• Detail page: Not currently discoverable via browser traversal/crawl in this pass."
      },
      {
        title: "SERYNA - Emotionally Intelligent Voice AI Companion",
        body:
          "A seamless fusion of LLaMA3, FAISS, and ElevenLabs delivering real-time empathetic interactions. SERYNA provides non-judgmental support for users seeking emotional clarity during difficult moments.",
        details:
          "Overview\n• The client is a Canada-based IT solutions provider specializing in custom software development, mobile and web applications, and emerging technologies. They envisioned an emotionally intelligent, voice-interactive AI companion for users seeking non-judgmental support in emotionally difficult situations such as loneliness, stress, or anxiety.\n\nTechnology Stack\n• Python\n• Flask\n• LLaMA3\n• Hugging Face\n• ElevenLabs\n• FAISS\n\nKey Challenges\n• Large and unstructured dataset requiring significant cleaning and deduplication.\n• Computationally demanding embedding of high-volume conversations.\n• Need for careful optimization of indexing parameters for FAISS.\n• Preservation of emotional and contextual nuance in LLM prompt formatting.\n• Secure cross-origin communication for user data privacy during processing.\n• Real-time speech-to-text and text-to-speech integration for voice conversations.\n• Implementation of a multi-stage cleaning pipeline to remove semantic duplicates.\n• Reduced context retrieval time to under 100ms using FAISS.\n\nSolutions\n• Optimized hardware utilization and vectorization pipelines for computational efficiency.\n• Careful tuning of FAISS indexing parameters for accurate retrieval.\n• Focused on emotional and contextual response crafting in AI interactions.\n• Enhanced secure integration methodologies for frontend-backend communication.\n• Implemented real-time voice synthesis capabilities for seamless interaction.\n• A robust multi-stage data cleaning pipeline to improve training data quality.\n\nBenefits Delivered\n• 85% improvement in user emotional satisfaction compared to standard bots.\n• 40ms reduction in average response latency.\n• 10x scalability factor for conversational memory growth.",
        learnMoreHref: "/contact"
      },
      {
        title: "Automated SOC 2 Audit Review with Mistral AI",
        body:
          "AI-driven solution automated SOC 2 report evaluation for a cybersecurity firm, enhancing report accuracy, reducing manual efforts, and boosting compliance.",
        details:
          "Overview\n• The client is a USA-based cybersecurity firm offering end-to-end solutions in data protection, privacy, and regulatory compliance. Their services span penetration testing, vulnerability assessments, and comprehensive audits for frameworks like SOC 2, ISO 27001, HIPAA, and GDPR.\n\nTechnology Stack\n• Python\n• Hugging Face\n• Mistral-7B\n• AWS (EC2)\n• AWS (S3)\n• MongoDB\n\nKey Challenges\n• Inconsistent formats of reports with varying structures and language.\n• Lack of a uniform schema complicating content mapping to Trust Services Criteria (TSC).\n• Subjective evaluation of report quality based on nuanced factors like clarity and completeness.\n• Need for a robust multi-dimensional scoring framework for fair evaluations.\n• Requirement to chunk and embed SOC 2 documents without losing context.\n\nSolutions\n• Preprocessed SOC 2 reports by removing noise and normalizing structures.\n• Segmented data into categories corresponding to the Trust Services Criteria.\n• Model evaluated categories and returned quality scores with justifications.\n• Parsed tables from PDF reports for TSC mappings and audit procedures.\n• Designed token-efficient prompts for context-aware LLM use.\n• Converted document segments into embeddings for efficient retrieval.\n\nBenefits Delivered\n• Significantly reduced manual effort in SOC 2 report review.\n• Delivered structured evaluations that minimize human bias.\n• Enabled intelligent retrieval ensuring only relevant information is analyzed.\n• Provided detailed explanations for scores, enhancing transparency.\n• Improved compliance documentation by identifying gaps in reports.",
        learnMoreHref: "/contact"
      },
      {
        title: "Smarter Procurement: Faster, Scalable, Transparent",
        body:
          "Discover how we enhanced an AI-powered procurement system, streamlining processes, boosting productivity, and improving communication for resellers.",
        details:
          "Overview\n• The client is a USA-based software development company that specializes in creating advanced software solutions powered by artificial intelligence (AI). Their flagship platform is an AI-driven automated procurement system designed to streamline and accelerate procurement operations for resellers.\n\nTechnology Stack\n• GCP\n• Vercel\n• React\n• Node.js\n• Express.js\n• MongoDB\n\nKey Challenges\n• Manual procurement workflows caused delays.\n• Limited visibility due to lack of central dashboard.\n• Disorganized communication across different platforms.\n• Scalability issues with growing reseller base.\n\nSolutions\n• Real-time dashboard for procurement metrics.\n• Automated notifications for RFQ management.\n• Simplified PO creation and tracking.\n• Delivery tracking module for accuracy.\n• Centralized vendor records management.\n• Insightful analytics reports.\n• Streamlined user access control.\n• Organized records for contracting officers.\n• Automated email and invoice templates.\n\nBenefits Delivered\n• 20x improvement in productivity.\n• Greater operational transparency.\n• Improved communication and coordination.\n• 0 error reduction from automated forms.\n• Scalable architecture for growing transactions.",
        learnMoreHref: "/contact"
      },
      {
        title: "AI-Powered Gameplay Analysis System",
        body:
          "Transforming screen recordings into actionable performance insights with high-fidelity computer vision and neural networks for competitive gaming.",
        details:
          "Overview\n• Our client is a UAE-based esports organization specializing in competitive gaming and event management\n\nTechnology Stack\n• Python\n• YoloV8\n• Scikit_Learn\n• Tesseract_OCR\n• OpenCV\n• Next.js\n• Node.js\n• MongoDB\n\nKey Challenges\n• Manual review time is slow.\n• Restricted game APIs block functionality.\n• Handling diverse resolutions and visual skins.\n• Need to process 60 frames per second.\n• Dynamic lighting changes affect OCR reliability.\n• Balancing depth of analysis with processing cost.\n\nSolutions\n• Optimized video pipeline reduces redundant computation by 40%.\n• Custom-trained YOLOv8 weights for event detection.\n• Insight engine correlates positioning with win rates.\n\nBenefits Delivered\n• 60-70% reduction in session review time.\n• Automated tagging of gameplay clips.\n• Immediate feedback through low-latency processing.\n• Deep insights into positioning, timing, and aim.",
        learnMoreHref: "/contact"
      },
      {
        title: "IoT-Based Cost-Effective Electricity Generation and Monitoring System",
        body:
          "An innovative IoT-powered decentralized energy solution with real-time monitoring, remote control, and advanced analytics to optimize electricity generation and management across multiple stations.",
        details:
          "Overview\n• A forward-thinking client approached us to design a cost-effective, IoT-based electricity generation solution. While similar in concept to solar panel setups, the client's vision expanded into a fully integrated hardware-software ecosystem capable of generating electricity while offering advanced monitoring, control, and analytics for each rooftop-installed unit.\n\nTechnology Stack\n• Python\n• AWS\n• Nodejs\n• React\n• MongoDB\n\nKey Challenges\n• Develop hardware for rooftop electricity generation\n• Create a centralized system for remote monitoring and control\n• Provide a platform for tracking electricity generation and system adjustments\n• Establish an ERP system for device management and integration\n• Implement advanced analytics for performance assessment\n\nSolutions\n• Designed an IoT-powered energy management ecosystem\n• Developed custom PCBs with sensors for environmental monitoring\n• Built a responsive frontend using React.js and Next.js\n\nBenefits Delivered\n• Enabled real-time insights for administrators and end-users\n• Facilitated remote control capabilities\n• Optimized performance across multiple locations",
        learnMoreHref: "/contact"
      },
      {
        title: "Next-Gen Archery with AR, AI & 3D Tools",
        body:
          "A cutting-edge iOS application combining Augmented Reality (AR), Artificial Intelligence (AI), and 3D visualization to revolutionize archery performance tracking, delivering real-time trajectory insights and precision shot analysis.",
        details:
          "Overview\n• A cutting-edge iOS application combining Augmented Reality (AR), Artificial Intelligence (AI), and 3D visualization to revolutionize archery performance tracking, delivering real-time trajectory insights and precision shot analysis.\n\nMetadata\n• Tags: AR, AI, 3D Visualization, Sports Technology\n• Detail page: Not currently discoverable via browser traversal/crawl in this pass."
      },
      {
        title: "IoT Integration with ERP for Optimized Production",
        body:
          "IoT-ERP integration for real-time production monitoring and automated data exchange, enhancing operational efficiency and informed decision-making.",
        details:
          "Overview\n• IoT-ERP integration for real-time production monitoring and automated data exchange, enhancing operational efficiency and informed decision-making.\n\nMetadata\n• Tags: IoT, ERP\n• Detail page: Not currently discoverable via browser traversal/crawl in this pass."
      },
      {
        title: "AR Educational App for Children",
        body:
          "Developed an interactive AR educational app for children, combining 3D characters, real-time AI interactions, and book-based learning for an engaging experience.",
        details:
          "Overview\n• Our client approached us with an innovative idea to develop an augmented reality (AR) application for children. The goal was to create an interactive educational app that would enhance learning by bringing book characters to life and enabling interactive conversations.\n\nTechnology Stack\n• Nodejs\n• React\n• PostgreSQL\n• MongoDB\n• Google Cloud\n• Docker\n• Unity 3D\n• Maya 3D\n• AI Interaction\n\nKey Challenges\n• Real-Time AR Interaction\n• Unity 3D for AR Development\n• Book Page Scanning\n• Character Animation\n• Voice Integration\n• AI Interaction\n• Maya 3D for Character Creation\n• Interactive Narration and Q&A\n\nSolutions\n• Designed an AR app with interactive elements for children.\n• Utilized Unity 3D to develop the AR functionalities, enabling real-time character activation and interaction.\n\nBenefits Delivered\n• Enhances children's learning experiences.\n• Creates lifelike 3D characters.\n• Meets complex requirements for educational technology projects.",
        learnMoreHref: "/contact"
      },
      {
        title: "Photo and Video Editing Mobile App",
        body:
          "Developed a custom mobile app for advanced photo and video editing with real-time effects, artistic filters, and Bitmoji integration, without using third-party SDKs.",
        details:
          "Overview\n• Our client approached us with the ambitious goal of creating a mobile app for photo and video editing with advanced functionalities, without relying on any third-party SDKs. The app needed to be robust and feature-rich, catering to both iOS and Android platforms.\n\nTechnology Stack\n• AWS\n• Kubernetes\n• Nodejs\n• React\n• PostgreSQL\n• MongoDB\n• NextdotJS\n• Docker\n\nKey Challenges\n• No Third-Party SDKs\n• Create Touch Fast/Slow Motion Editing While Recording\n• Convert Pictures to Beautiful Art\n• Quickly Trim, Cut, Crop, and Share\n• Add Snapchat Bitmojis Directly to Videos\n• Add Filters Like Snapchat and Instagram\n• Core Camera Features for iOS\n• Core Camera Features and FFmpeg for Android\n• Custom Filters and Effects\n\nSolutions\n• Enabled fast and slow-motion effects during video recording with one touch\n• Applied artistic filters and effects to transform photos\n\nBenefits Delivered\n• Feature-rich photo and video editing app\n• Advanced functionalities like fast/slow motion editing\n• Artistic photo transformation\n• Bitmoji integration",
        learnMoreHref: "/contact"
      },
      {
        title: "Enhancing IoT Capabilities for View",
        body:
          "Enhanced IoT capabilities for View Inc. through comprehensive DevOps, cloud, mobile development, and 24/7 support, driving innovation and operational efficiency.",
        details:
          "Overview\n• Our client, View Inc., a leader in smart glass and building technology, initially sought a DevOps engineer for infrastructure management. This evolved into a long-term partnership, where we supported their growing needs in full-stack development, mobile apps, IoT integration, and 24/7 infrastructure support, becoming a key part of their engineering team.\n\nTechnology Stack\n• AWS\n• Kubernetes\n• MongoDB\n• Redux\n• Google Cloud\n• Nodejs\n• React\n• Docker\n\nKey Challenges\n• Improve IoT system capabilities for increased efficiency.\n• Efficient management of a growing infrastructure.\n• Building a team that can work seamlessly across different time zones.\n• Scaling development capabilities to handle both full-stack and mobile app development.\n• Delivering 24/7 DevOps support to guarantee system availability.\n\nSolutions\n• Built a dedicated DevOps team to provide 24/7 operational support.\n• Team responsible for monitoring, troubleshooting, and maintaining servers.\n• Hired 5 Full-Stack Engineers to work in PST time zone for collaboration.\n\nBenefits Delivered\n• Ensured optimal performance and uptime.\n• Seamless communication and project execution.\n• Comprehensive solutions that ensure the stability and continuous growth.",
        learnMoreHref: "/contact"
      },
      {
        title: "Implementing Sentiment Analysis Using AI/ML Techniques",
        body:
          "Implemented sentiment analysis for an e-commerce company, categorizing customer reviews into positive, neutral, or negative sentiments using advanced AI/ML techniques.",
        details:
          "Overview\n• Implemented sentiment analysis for an e-commerce company, categorizing customer reviews into positive, neutral, or negative sentiments using advanced AI/ML techniques.\n\nMetadata\n• Tags: AI/ML, Sentiment Analysis\n• Detail page: Not currently discoverable via browser traversal/crawl in this pass."
      },
      {
        title: "AI-Powered Employee Engagement System",
        body:
          "Developed an AI-powered system to enhance employee engagement by tracking behavior, monitoring moods, and delivering personalized greetings. Integrated with the HRMS to streamline attendance tracking and mood analysis.",
        details:
          "Overview\n• Our client sought to enhance employee engagement by leveraging AI and machine learning to track office behavior, monitor moods, and deliver personalized greetings. The solution also needed to integrate with their HRMS tool to streamline attendance and improve overall employee satisfaction.\n\nTechnology Stack\n• AWS\n• FFmpeg\n• Opencv\n• Pytorch\n• Tensorflow\n• Node Js\n• React\n\nKey Challenges\n• Improve employee engagement\n• Assess moods\n• Automated attendance tracking\n• Integrate with HRMS tool\n• Detect office absences\n\nSolutions\n• Developed AI-powered engagement system\n• Integrated facial recognition for employee tracking\n• Automated attendance tracking via HRMS\n\nBenefits Delivered\n• Real-time mood analysis\n• Enhanced workplace interactions\n• Valuable insights into employee well-being",
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


