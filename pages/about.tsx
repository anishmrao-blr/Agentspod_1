import Head from "next/head";

const CALENDAR_LINK = "https://cal.com/sevesenseai/30min";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Us | Agendspod.AI</title>
        <meta
          name="description"
          content="We partner with founders and enterprises to deliver outcome-driven AI systems, combining deep engineering intelligence with hands-on collaboration from strategy to scale."
        />
      </Head>

      <main className="pc-page">
        <section className="pc-wrap pc-section pc-cta" aria-labelledby="about-hero-heading">
          <h1 id="about-hero-heading" className="pc-text-h1-hero">
            ENGINEERING INTELLIGENCE, HUMAN PARTNERSHIP.
          </h1>
          <p className="pc-text-body-large pc-section-copy">
            We build with teams that care about real outcomes, not vanity experiments. From first architecture decisions to
            production rollout, we stay accountable for measurable impact.
          </p>
          <div className="pc-hero-ctas is-centered">
            <a className="pc-btn pc-btn-primary-hero pc-btn-anchor" href={CALENDAR_LINK} target="_blank" rel="noopener noreferrer">
              Book a strategy call
            </a>
            <a className="pc-btn pc-btn-ghost-hero pc-btn-anchor" href="/projects">
              See case studies
            </a>
          </div>
        </section>

        <section className="pc-wrap pc-section" aria-labelledby="who-we-are-heading">
          <h2 id="who-we-are-heading" className="pc-text-h2-section">
            Who We Are
          </h2>
          <p className="pc-text-body-large pc-section-copy">
            We are engineers, builders, and strategic partners focused on applied AI. Our team blends startup speed with
            enterprise-grade delivery so organizations can move from vision to execution with confidence.
          </p>
        </section>

        <section className="pc-wrap pc-section" aria-labelledby="how-we-work-heading">
          <h2 id="how-we-work-heading" className="pc-text-h2-section">
            How We Work
          </h2>
          <p className="pc-text-body-large pc-section-copy">
            We begin with business outcomes, design the right technical path, and ship in tight, transparent cycles. Every
            sprint maps to practical milestones so stakeholders can see progress and value early.
          </p>
        </section>

        <section className="pc-wrap pc-section" aria-labelledby="why-teams-choose-us-heading">
          <h2 id="why-teams-choose-us-heading" className="pc-text-h2-section">
            Why Teams Choose Us
          </h2>
          <p className="pc-text-body-large pc-section-copy">
            Teams choose us because we stay deeply involved from discovery through production, balancing technical rigor with
            collaborative partnership to deliver durable AI capabilities that drive measurable outcomes.
          </p>
        </section>
      </main>
    </>
  );
}
