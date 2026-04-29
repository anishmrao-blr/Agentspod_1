import { render, screen } from "@testing-library/react";
import AboutPage from "@/pages/about";

describe("About page", () => {
  it("renders the core About page sections and CTA links", () => {
    render(<AboutPage />);

    expect(
      screen.getByRole("heading", {
        name: /engineering intelligence, human partnership/i,
      }),
    ).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /who we are/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /how we work/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /why teams choose us/i })).toBeInTheDocument();

    expect(screen.getByRole("link", { name: /book a strategy call/i })).toHaveAttribute(
      "href",
      "https://cal.com/sevesenseai/30min",
    );
    expect(screen.getByRole("link", { name: /book a strategy call/i })).toHaveAttribute("target", "_blank");
    expect(screen.getByRole("link", { name: /book a strategy call/i })).toHaveAttribute(
      "rel",
      expect.stringContaining("noopener"),
    );
    expect(screen.getByRole("link", { name: /see case studies/i })).toHaveAttribute("href", "/projects");
  });
});
