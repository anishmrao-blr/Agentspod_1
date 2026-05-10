import { render, screen } from "@testing-library/react";
import AboutPage from "@/pages/about";
import { ThemeProvider } from "@/components/theme/ThemeProvider";

describe("About page", () => {
  it("renders the core About page sections and CTA links", () => {
    render(
      <ThemeProvider>
        <AboutPage />
      </ThemeProvider>,
    );

    expect(screen.getByRole("heading", { name: /who we are/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /how we work/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /why teams choose us/i })).toBeInTheDocument();

    const strategyCallLinks = screen.getAllByRole("link", { name: /book a strategy call/i });
    expect(strategyCallLinks.length).toBeGreaterThan(0);
    expect(strategyCallLinks[0]).toHaveAttribute("href", "/qualify");
    expect(screen.getByRole("link", { name: /see case studies/i })).toHaveAttribute("href", "/projects");
  });
});
