import Head from "next/head";
import { SiteHeader } from "@/components/landing/SiteHeader";

const CALENDAR_LINK = "https://cal.com/swami-tpxjxh";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Us | Agentspod.AI</title>
        <meta
          name="description"
          content="We partner with founders and enterprises to deliver outcome-driven AI systems, combining deep engineering intelligence with hands-on collaboration from strategy to scale."
        />
      </Head>

      <main className="pc-page">
        <SiteHeader mobileNavAriaLabel="About mobile navigation" />

        <section className="pc-wrap pc-section pc-cta" aria-label="About intro">
          <div style={{ margin: "0 auto", maxWidth: 980, textAlign: "center" }}>
            <p className="pc-text-body-large pc-section-copy" style={{ margin: "0 auto", maxWidth: 760 }}>
              We build with teams that care about real outcomes, not vanity experiments. From first architecture decisions to
              production rollout, we stay accountable for measurable impact.
            </p>
            <div className="pc-hero-ctas is-centered" style={{ marginTop: 28 }}>
              <a className="pc-btn pc-btn-primary-hero pc-btn-anchor" href={CALENDAR_LINK} target="_blank" rel="noopener noreferrer">
                Book a strategy call
              </a>
              <a className="pc-btn pc-btn-ghost-hero pc-btn-anchor" href="/projects">
                See case studies
              </a>
            </div>
          </div>
        </section>

        <section className="pc-wrap pc-section" aria-labelledby="who-we-are-heading">
          <div className="pc-audience-grid" style={{ gap: 20 }}>
            <article className="pc-audience-card">
              <h2 id="who-we-are-heading" className="pc-text-h2-section" style={{ marginBottom: 14 }}>
                Who We Are
              </h2>
              <p className="pc-text-body-large">
                We are engineers, builders, and strategic partners focused on applied AI. Our team blends startup speed with
                enterprise-grade delivery so organizations can move from vision to execution with confidence.
              </p>
            </article>
            <article className="pc-audience-card" aria-labelledby="why-teams-choose-us-heading">
              <h2 id="why-teams-choose-us-heading" className="pc-text-h2-section" style={{ marginBottom: 14 }}>
                Why Teams Choose Us
              </h2>
              <p className="pc-text-body-large">
                Teams choose us because we stay deeply involved from discovery through production, balancing technical rigor with
                collaborative partnership to deliver durable AI capabilities that drive measurable outcomes.
              </p>
            </article>
          </div>
        </section>

        <section className="pc-wrap pc-section" aria-labelledby="how-we-work-heading">
          <h2 id="how-we-work-heading" className="pc-text-h2-section" style={{ textAlign: "center", marginBottom: 14 }}>
            How We Work
          </h2>
          <p className="pc-text-body-large pc-section-copy" style={{ margin: "0 auto", maxWidth: 740, textAlign: "center" }}>
            We move in transparent, measurable cycles so you can see progress early and scale with confidence.
          </p>
          <div className="pc-card-grid is-toolkit" style={{ marginTop: 26 }}>
            <article className="pc-card-feature">
              <p className="pc-eyebrow">01</p>
              <h3 className="pc-text-h2-section" style={{ fontSize: "1.4rem", marginBottom: 8 }}>
                Discover
              </h3>
              <p className="pc-text-body-soft">Align business outcomes, technical constraints, and success metrics.</p>
            </article>
            <article className="pc-card-feature">
              <p className="pc-eyebrow">02</p>
              <h3 className="pc-text-h2-section" style={{ fontSize: "1.4rem", marginBottom: 8 }}>
                Design
              </h3>
              <p className="pc-text-body-soft">Turn requirements into clear architecture, scope, and execution plans.</p>
            </article>
            <article className="pc-card-feature">
              <p className="pc-eyebrow">03</p>
              <h3 className="pc-text-h2-section" style={{ fontSize: "1.4rem", marginBottom: 8 }}>
                Build
              </h3>
              <p className="pc-text-body-soft">Ship in short milestones with reliable quality and visible delivery progress.</p>
            </article>
            <article className="pc-card-feature">
              <p className="pc-eyebrow">04</p>
              <h3 className="pc-text-h2-section" style={{ fontSize: "1.4rem", marginBottom: 8 }}>
                Scale
              </h3>
              <p className="pc-text-body-soft">Optimize systems, hand over cleanly, and support sustained growth.</p>
            </article>
          </div>
        </section>

        <section className="pc-wrap pc-section pc-cta" aria-labelledby="about-cta-heading">
          <div style={{ margin: "0 auto", maxWidth: 900, textAlign: "center" }}>
            <h2 id="about-cta-heading" className="pc-text-h2-section" style={{ marginBottom: 14 }}>
              Ready to Build with Us?
            </h2>
            <p className="pc-text-body-large pc-section-copy" style={{ margin: "0 auto", maxWidth: 680 }}>
              Bring your use case, product ambition, or enterprise challenge. We will help you move from strategy to production.
            </p>
            <div className="pc-hero-ctas is-centered" style={{ marginTop: 24 }}>
              <a className="pc-btn pc-btn-primary-hero pc-btn-anchor" href={CALENDAR_LINK} target="_blank" rel="noopener noreferrer">
                Book a strategy call
              </a>
              <a className="pc-btn pc-btn-ghost-hero pc-btn-anchor" href="/contact">
                Talk to our team
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
