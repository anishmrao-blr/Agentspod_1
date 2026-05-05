import Head from "next/head";
import { useState } from "react";
import { AnimatePresence, LazyMotion, domAnimation, m, useReducedMotion } from "framer-motion";
import { SiteHeader } from "@/components/landing/SiteHeader";

const ANISH_CAL_URL = "https://cal.com/anish-rao-drqgh9";
const TOTAL_STEPS = 4;
const smoothEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

const PERSONAL_DOMAINS = new Set([
  "gmail.com", "yahoo.com", "hotmail.com", "outlook.com", "icloud.com",
  "me.com", "mac.com", "protonmail.com", "proton.me", "aol.com",
  "live.com", "msn.com", "googlemail.com", "ymail.com",
]);

const TEAM_SIZE_LABELS = ["1–10", "11–50", "51–100", "100–500", "500+"];

const JOURNEY_STAGES = [
  "We have a product — want to add AI to it",
  "Starting fresh, building something new",
  "Large org looking to automate",
];

const FOCUS_AREAS = [
  "AI Agents / Automation",
  "Generative AI / LLMs",
  "Voice AI",
  "Data Science",
];

const BUDGET_OPTIONS = [
  { value: "yes", label: "Yes, this works for us" },
  { value: "slightly", label: "A bit tight, but open to talking" },
  { value: "no", label: "Not yet — maybe later" },
];

type FormData = {
  email: string;
  name: string;
  teamSizeIndex: number;
  journeyStage: string;
  focusAreas: string[];
  projectDesc: string;
  budgetComfort: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isWorkEmail(email: string) {
  const domain = email.split("@")[1]?.toLowerCase();
  return !!domain && !PERSONAL_DOMAINS.has(domain);
}

export default function QualifyPage() {
  const reducedMotion = useReducedMotion() ?? false;
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<FormData>({
    email: "",
    name: "",
    teamSizeIndex: 1,
    journeyStage: "",
    focusAreas: [],
    projectDesc: "",
    budgetComfort: "",
  });

  const emailTouched = form.email.length > 0;
  const emailValid = isValidEmail(form.email) && isWorkEmail(form.email);
  const emailError =
    emailTouched && isValidEmail(form.email) && !isWorkEmail(form.email)
      ? "Please use your work email — Gmail, Yahoo, and similar are not accepted."
      : null;

  const canProceed =
    (step === 1 && emailValid && form.name.trim().length > 1) ||
    (step === 2 && !!form.journeyStage) ||
    (step === 3 && form.focusAreas.length > 0) ||
    (step === 4 && !!form.budgetComfort);

  function handleNext() {
    if (!canProceed) return;
    if (step < TOTAL_STEPS) {
      setStep((s) => s + 1);
      return;
    }
    if (form.budgetComfort === "no") {
      setSubmitted(true);
    } else {
      window.location.href = ANISH_CAL_URL;
    }
  }

  function toggleFocusArea(area: string) {
    setForm((f) => ({
      ...f,
      focusAreas: f.focusAreas.includes(area)
        ? f.focusAreas.filter((a) => a !== area)
        : [...f.focusAreas, area],
    }));
  }

  const motionProps = reducedMotion
    ? {}
    : {
        initial: { opacity: 0, x: 16 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -16 },
        transition: { duration: 0.25, ease: smoothEase },
      };

  return (
    <>
      <Head>
        <title>Let's Talk — AgentsPod.AI</title>
        <meta name="description" content="Takes about 2 minutes. A few questions so Anish knows how to help before your call." />
      </Head>
      <LazyMotion features={domAnimation}>
        <main className="pc-page">
          <SiteHeader mobileNavAriaLabel="Qualify page navigation" />
          <section className="pc-wrap">
            <div className="pc-qualify-container">
              {submitted ? (
                <NurtureScreen />
              ) : (
                <>
                  <StepIndicator current={step} total={TOTAL_STEPS} />
                  <AnimatePresence mode="wait">
                    <m.div key={`step-${step}`} {...motionProps}>
                      <div className="pc-qualify-card">
                        {step === 1 && (
                          <Step1
                            form={form}
                            setForm={setForm}
                            emailError={emailError}
                            emailValid={emailValid}
                          />
                        )}
                        {step === 2 && <Step2 form={form} setForm={setForm} />}
                        {step === 3 && (
                          <Step3
                            form={form}
                            setForm={setForm}
                            toggleFocusArea={toggleFocusArea}
                          />
                        )}
                        {step === 4 && <Step4 form={form} setForm={setForm} />}
                      </div>
                      <div className="pc-qualify-nav">
                        {step > 1 ? (
                          <button
                            type="button"
                            className="pc-btn pc-btn-ghost-hero"
                            onClick={() => setStep((s) => s - 1)}
                          >
                            ← Back
                          </button>
                        ) : (
                          <span />
                        )}
                        <m.button
                          type="button"
                          className={`pc-btn pc-btn-primary-hero${!canProceed ? " is-disabled" : ""}`}
                          onClick={handleNext}
                          disabled={!canProceed}
                          whileHover={reducedMotion || !canProceed ? undefined : { y: -2 }}
                          whileTap={reducedMotion || !canProceed ? undefined : { scale: 0.98 }}
                        >
                          {step < TOTAL_STEPS
                            ? "Next →"
                            : form.budgetComfort === "no"
                            ? "Got it"
                            : "Book a call →"}
                        </m.button>
                      </div>
                    </m.div>
                  </AnimatePresence>
                </>
              )}
            </div>
          </section>
        </main>
      </LazyMotion>
    </>
  );
}

function StepIndicator({ current, total }: { current: number; total: number }) {
  return (
    <div
      className="pc-qualify-steps"
      role="progressbar"
      aria-valuenow={current}
      aria-valuemin={1}
      aria-valuemax={total}
      aria-label={`Step ${current} of ${total}`}
    >
      {Array.from({ length: total }, (_, i) => (
        <span
          key={i}
          className={`pc-qualify-step-dot${
            i + 1 === current ? " is-active" : i + 1 < current ? " is-done" : ""
          }`}
        />
      ))}
    </div>
  );
}

function Step1({
  form,
  setForm,
  emailError,
  emailValid,
}: {
  form: FormData;
  setForm: React.Dispatch<React.SetStateAction<FormData>>;
  emailError: string | null;
  emailValid: boolean;
}) {
  return (
    <>
      <p className="pc-eyebrow">Step 1 of 4</p>
      <h2 className="pc-qualify-heading">First, who are we talking to?</h2>
      <p className="pc-text-body-small" style={{ marginTop: 8, marginBottom: 0 }}>
        We build for companies, not individuals — a work email helps us get context.
      </p>
      <div className="pc-qualify-field" style={{ marginTop: 24 }}>
        <label className="pc-qualify-label" htmlFor="q-email">
          Work email
        </label>
        <input
          id="q-email"
          type="email"
          className={`pc-qualify-input${emailError ? " is-error" : emailValid ? " is-valid" : ""}`}
          placeholder="you@company.com"
          value={form.email}
          onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
          autoComplete="email"
          // eslint-disable-next-line jsx-a11y/no-autofocus
          autoFocus
        />
        {emailError && <p className="pc-qualify-hint is-error">Looks like a personal email. Try your work address.</p>}
        {emailValid && <p className="pc-qualify-hint is-success">Looks good</p>}
      </div>
      <div className="pc-qualify-field">
        <label className="pc-qualify-label" htmlFor="q-name">
          Your name
        </label>
        <input
          id="q-name"
          type="text"
          className="pc-qualify-input"
          placeholder="What should we call you?"
          value={form.name}
          onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
          autoComplete="name"
        />
      </div>
    </>
  );
}

function Step2({
  form,
  setForm,
}: {
  form: FormData;
  setForm: React.Dispatch<React.SetStateAction<FormData>>;
}) {
  return (
    <>
      <p className="pc-eyebrow">Step 2 of 4</p>
      <h2 className="pc-qualify-heading">About your team</h2>
      <div className="pc-qualify-field" style={{ marginTop: 24 }}>
        <label className="pc-qualify-label" htmlFor="q-team-size">
          How big is the team?
        </label>
        <input
          id="q-team-size"
          type="range"
          className="pc-qualify-slider"
          min={0}
          max={TEAM_SIZE_LABELS.length - 1}
          step={1}
          value={form.teamSizeIndex}
          onChange={(e) => setForm((f) => ({ ...f, teamSizeIndex: Number(e.target.value) }))}
          aria-valuetext={TEAM_SIZE_LABELS[form.teamSizeIndex]}
        />
        <div className="pc-qualify-slider-labels" aria-hidden="true">
          {TEAM_SIZE_LABELS.map((label) => (
            <span key={label}>{label}</span>
          ))}
        </div>
        <p className="pc-qualify-slider-value">{TEAM_SIZE_LABELS[form.teamSizeIndex]} people</p>
      </div>
      <div className="pc-qualify-field">
        <label className="pc-qualify-label">Where are things at right now?</label>
        <div className="pc-qualify-chip-row" style={{ flexDirection: "column" }}>
          {JOURNEY_STAGES.map((stage) => (
            <button
              key={stage}
              type="button"
              className={`pc-qualify-chip pc-qualify-chip--block${form.journeyStage === stage ? " is-selected" : ""}`}
              onClick={() => setForm((f) => ({ ...f, journeyStage: stage }))}
              aria-pressed={form.journeyStage === stage}
            >
              {stage}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

function Step3({
  form,
  setForm,
  toggleFocusArea,
}: {
  form: FormData;
  setForm: React.Dispatch<React.SetStateAction<FormData>>;
  toggleFocusArea: (area: string) => void;
}) {
  return (
    <>
      <p className="pc-eyebrow">Step 3 of 4</p>
      <h2 className="pc-qualify-heading">What are you building?</h2>
      <div className="pc-qualify-field" style={{ marginTop: 24 }}>
        <label className="pc-qualify-label">Pick what fits — you can choose more than one</label>
        <div className="pc-qualify-chip-row">
          {FOCUS_AREAS.map((area) => (
            <button
              key={area}
              type="button"
              className={`pc-qualify-chip${form.focusAreas.includes(area) ? " is-selected" : ""}`}
              onClick={() => toggleFocusArea(area)}
              aria-pressed={form.focusAreas.includes(area)}
            >
              {area}
            </button>
          ))}
        </div>
      </div>
      <div className="pc-qualify-field">
        <label className="pc-qualify-label" htmlFor="q-desc">
          Anything else to share?{" "}
          <span style={{ color: "var(--foreground-faint)" }}>(optional)</span>
        </label>
        <textarea
          id="q-desc"
          className="pc-qualify-input pc-qualify-textarea"
          placeholder="Rough idea is fine. No pitch deck needed."
          rows={3}
          value={form.projectDesc}
          onChange={(e) => setForm((f) => ({ ...f, projectDesc: e.target.value }))}
        />
      </div>
    </>
  );
}

function Step4({
  form,
  setForm,
}: {
  form: FormData;
  setForm: React.Dispatch<React.SetStateAction<FormData>>;
}) {
  return (
    <>
      <p className="pc-eyebrow">Step 4 of 4</p>
      <h2 className="pc-qualify-heading">Last thing — budget</h2>
      <p className="pc-text-body-small" style={{ marginTop: 8, marginBottom: 0 }}>
        We put our rates upfront. No surprises on the call.
      </p>
      <div className="pc-qualify-rate-box" style={{ marginTop: 24 }}>
        <p className="pc-qualify-rate-num">~$26/hr</p>
        <p className="pc-qualify-rate-sub">₹1L/month (~$1,050) · min. 3-month engagement</p>
      </div>
      <div className="pc-qualify-field">
        <label className="pc-qualify-label">Is this in the right ballpark?</label>
        <div className="pc-qualify-chip-row" style={{ flexDirection: "column" }}>
          {BUDGET_OPTIONS.map((opt) => (
            <button
              key={opt.value}
              type="button"
              className={`pc-qualify-chip pc-qualify-chip--block${form.budgetComfort === opt.value ? " is-selected" : ""}`}
              onClick={() => setForm((f) => ({ ...f, budgetComfort: opt.value }))}
              aria-pressed={form.budgetComfort === opt.value}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

function NurtureScreen() {
  return (
    <div className="pc-qualify-nurture">
      <p className="pc-eyebrow" style={{ textAlign: "center" }}>Noted</p>
      <h2
        className="pc-text-h2-section"
        style={{ fontSize: 36, letterSpacing: "-0.03em", marginTop: 12 }}
      >
        No worries
      </h2>
      <p className="pc-text-body-large" style={{ textAlign: "center", marginTop: 12 }}>
        Budget isn&apos;t there yet — that&apos;s fine. We&apos;ll still be here when the timing
        works. Feel free to drop us a note in the meantime.
      </p>
      <div className="pc-hero-ctas is-centered" style={{ marginTop: 32 }}>
        <a
          className="pc-btn pc-btn-primary-hero pc-btn-anchor"
          href="/"
        >
          Back to home
        </a>
        <a
          className="pc-btn pc-btn-ghost-hero pc-btn-anchor"
          href="mailto:hello@agentspod.ai"
        >
          Email us
        </a>
      </div>
    </div>
  );
}
