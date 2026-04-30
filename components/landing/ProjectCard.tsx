type ProjectCardProps = {
  industry: string;
  title: string;
  problem: string;
  solution: string;
  outcome: string;
  metricCallout: string;
  tech: string[];
  image?: string;
};

export function ProjectCard({ industry, title, problem, solution, outcome, metricCallout, tech, image }: ProjectCardProps) {
  return (
    <article className="pc-project-card">
      {image && (
        <div
          className="pc-project-card-media"
          style={{ backgroundImage: `url(${image})` }}
          aria-hidden="true"
        />
      )}
      <div className="pc-project-card-body">
        <div className="pc-project-card-header">
          <span className="pc-project-card-tag">{industry}</span>
          <h2 className="pc-project-card-title">{title}</h2>
          <p className="pc-project-card-metric">{metricCallout}</p>
        </div>
        <div className="pc-project-card-columns">
          <div className="pc-project-card-col">
            <h3 className="pc-project-card-col-heading">Problem</h3>
            <p className="pc-project-card-col-body">{problem}</p>
          </div>
          <div className="pc-project-card-col">
            <h3 className="pc-project-card-col-heading">Solution</h3>
            <p className="pc-project-card-col-body">{solution}</p>
          </div>
          <div className="pc-project-card-col">
            <h3 className="pc-project-card-col-heading">Outcome</h3>
            <p className="pc-project-card-col-body">{outcome}</p>
          </div>
        </div>
        <div className="pc-project-card-tech">
          {tech.map((t) => (
            <span key={t} className="pc-featured-work-badge">{t}</span>
          ))}
        </div>
      </div>
    </article>
  );
}
