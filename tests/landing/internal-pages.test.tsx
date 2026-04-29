import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { InternalContentPage } from "@/components/landing/InternalContentPage";
import { internalPages } from "@/components/landing/internalPages";
import "@/styles/globals.css";

describe("Internal content pages", () => {
  it("has data entries for all non-home sitemap paths", () => {
    const expectedSlugs = [
      "ai-agents",
      "gen-ai",
      "data-science",
      "voice-ai",
      "software-development",
      "projects",
      "careers",
      "contact",
      "privacy",
      "terms"
    ];

    expectedSlugs.forEach((slug) => {
      expect(internalPages[slug]).toBeDefined();
      expect(internalPages[slug].heroHeading).not.toBe("");
      expect(internalPages[slug].capabilities.length).toBeGreaterThan(0);
    });
  });

  it("renders a route model with headings and CTA", () => {
    render(<InternalContentPage page={internalPages["ai-agents"]} />);

    expect(screen.getByRole("heading", { name: "AI Agents" })).toBeInTheDocument();
    expect(screen.getAllByRole("link", { name: "Deploy Agents" }).length).toBeGreaterThan(0);
    expect(screen.getByRole("heading", { name: "Technical Capabilities" })).toBeInTheDocument();
  });

  it("filters case studies by selected category", async () => {
    const user = userEvent.setup();
    render(<InternalContentPage page={internalPages.projects} />);

    expect(screen.getByRole("tab", { name: "All" })).toBeInTheDocument();
    expect(screen.getByText("AI-Driven Sanctions Intelligence & Real-Time Compliance System")).toBeInTheDocument();
    expect(screen.getByText("SERYNA - Emotionally Intelligent Voice AI Companion")).toBeInTheDocument();

    await user.click(screen.getByRole("tab", { name: "Voice AI & Conversational Systems" }));

    expect(screen.queryByText("AI-Driven Sanctions Intelligence & Real-Time Compliance System")).not.toBeInTheDocument();
    expect(screen.getByRole("tab", { name: "Voice AI & Conversational Systems" })).toHaveAttribute("aria-selected", "true");
    expect(screen.getByText("SERYNA - Emotionally Intelligent Voice AI Companion")).toBeInTheDocument();
  });
});

