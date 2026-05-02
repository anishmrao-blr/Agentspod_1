"use client";

import { useId, useState } from "react";

type ExpandableCardFeatureProps = {
  title: string;
  body: string;
  media?: string;
  details: string;
  learnMoreLabel?: string;
};

function cls(...parts: Array<string | undefined | false>) {
  return parts.filter(Boolean).join(" ");
}

export function ExpandableCardFeature({
  title,
  body,
  media,
  details,
  learnMoreLabel = "Learn more"
}: ExpandableCardFeatureProps) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <article className={cls("pc-card-feature", "is-default")}>
      <div className="pc-card-media" style={media ? { backgroundImage: `url(${media})` } : undefined} />
      <h3>{title}</h3>
      <p>{body}</p>
      <button
        type="button"
        className="pc-text-link pc-card-feature-learn"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
      >
        {open ? "Show less" : learnMoreLabel}
      </button>
      <div
        id={panelId}
        className={cls("pc-card-feature-details", open && "is-open")}
        role="region"
        aria-label="Case study details"
        hidden={!open}
        tabIndex={open ? 0 : undefined}
        style={{ whiteSpace: "pre-line" }}
      >
        {details}
      </div>
    </article>
  );
}
